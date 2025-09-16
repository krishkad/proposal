import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { CustomJwtPayload } from "../../proposal/generate-proposal/route";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("freeposal-authentication")?.value;
    if (!token) {
      return NextResponse.json({ success: false, message: "no token found" });
    }
    const token_data = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY as string
    ) as CustomJwtPayload;

    if (!token_data.id) {
      return NextResponse.json({ sucess: false, message: "token expired" });
    }
    const { userId } = Object.fromEntries(new URL(req.url).searchParams);

    if (token_data.id !== userId) {
      return NextResponse.json({ success: false, message: "not authorized" });
    }

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
