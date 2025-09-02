import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { userId } = Object.fromEntries(new URL(req.url).searchParams);

    const now = new Date();

    const subscriptions = await prisma.subscription.findMany({
      where: {
        userId: userId,
        status: "active",
        endDate: {
          gt: now,
        },
      },
      orderBy: {
        startDate: "desc",
      },
    });

    if (!subscriptions || subscriptions.length <= 0) {
      return NextResponse.json({
        success: false,
        message: "no active suhscriptions found",
      });
    }

    return NextResponse.json({
      success: true,
      message: "ok",
      data: subscriptions,
    });
  } catch (error) {
    console.log("error while getting subscription", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
