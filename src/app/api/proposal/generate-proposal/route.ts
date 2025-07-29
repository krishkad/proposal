import { getPrompt } from "@/lib/prompt";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || "",
  baseURL: "https://openrouter.ai/api/v1",
});

export async function POST(req: NextRequest) {
  try {
    const {
      outreachType,
      clientNeeds,
      lengthPerference,
      proposalTone,
      additional,
    } = await req.json();

    console.log({  outreachType,
      clientNeeds,
      lengthPerference,
      proposalTone,
      additional, });

    if (!clientNeeds || !lengthPerference || !outreachType) {
      return NextResponse.json({
        success: false,
        message: "all fields are required",
      });
    }

    const finalPromptToGenerate = getPrompt({
      myGig:
        "I build custom, responsive websites using React, Tailwind, and Framer Motion, focusing on fast performance and clean design.",
      clientNeeds,
      lengthPerference,
      proposalTone,
      outreachType,
      additional,
    });

    const response = await openai.chat.completions.create({
      model: "moonshotai/kimi-k2:free", // You can also try "deepseek/deepseek-coder"
      // model: "qwen/qwen3-235b-a22b-07-25:free", // You can also try "deepseek/deepseek-coder"
      messages: [{ role: "user", content: finalPromptToGenerate }],
      temperature: 0.7,
    });

    console.log({ response });

    return NextResponse.json({
      success: true,
      message: "ok",
      data: response.choices[0].message.content,
    });
  } catch (error) {
    console.log("[ERROR WHILE CREATING PROPOSAL]: ", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
