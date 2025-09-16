import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { userId, durationDays = 30 } = await req.json();
    const startDate = new Date();
    const endDate = new Date(startDate);
    endDate.setDate(endDate.getDate() + durationDays);

    const sub = await prisma.subscription.create({
      data: {
        userId,
        status: "active",
        startDate,
        endDate,
        max_proposals_generation: 30,
        proposals_generated: 0
      },
    });

    if (!sub) {
      return NextResponse.json({
        success: false,
        message: "failed to create subscription",
      });
    }

    return NextResponse.json({ success: true, message: "ok", data: sub });
  } catch (error) {
    console.log("error while create subscription: ", error);
  }
}
