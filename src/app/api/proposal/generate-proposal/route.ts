import prisma from "@/lib/prisma";
import { getPrompt } from "@/lib/prompt";
import jwt, { JwtPayload } from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

export interface CustomJwtPayload extends JwtPayload {
  id: string;
  plan: "Free" | "Pro";
  exp: number; // required to check expiration manually
}

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

    console.log({ outreachType });
    if (!clientNeeds || !lengthPerference || !outreachType) {
      return NextResponse.json({
        success: false,
        message: "all fields are required",
      });
    }

    const token = req.cookies.get("freeposal-authentication")?.value;

    if (!token) {
      return NextResponse.json({
        success: false,
        message: "Not Authenticated",
      });
    }

    let userToken: CustomJwtPayload;

    try {
      userToken = jwt.verify(
        token,
        process.env.JWT_SECRET_KEY as string
      ) as CustomJwtPayload;
    } catch (error) {
      console.log("JWT VERIFY ERROR", error);
      const response = NextResponse.redirect(new URL("/sign-in", req.url));
      response.cookies.delete("freeposal-authentication");
      return response;
    }

    console.log({ userToken });

    const user = await prisma.user.findUnique({ where: { id: userToken.id } });

    if (!user) {
      console.log(`no user with this id: `, userToken.id);
      const response = NextResponse.redirect(new URL("/sign-in", req.url));
      response.cookies.delete("freeposal-authentication");
      return response;
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
      messages: [{ role: "user", content: finalPromptToGenerate }],
      temperature: 0.7,
    });

    if (
      !response.choices[0].message?.content ||
      !response.choices ||
      !response.id ||
      !response
    ) {
      return NextResponse.json({
        success: false,
        message: "failed to generate proposal",
      }); // or return response
    }

    const response_json = JSON.parse(response.choices[0].message.content);

    console.log({ response_json });

    const proposal = await prisma.proposal.create({
      data: {
        prompt: finalPromptToGenerate,
        proposal: `${response_json.proposal}` || "",
        userInput: clientNeeds,
        type: outreachType ? "freelance" : "email",
        userId: user.id,
        successRate: response_json.successRate,
        title: response_json.shortTitle,
      },
    });

    if (!proposal) {
      return NextResponse.json({
        success: false,
        message: "failed to create proposal",
      });
    }

    return NextResponse.json({
      success: true,
      message: "ok",
      data: response_json.proposal,
    });
  } catch (error) {
    console.log("[ERROR WHILE CREATING PROPOSAL]: ", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
