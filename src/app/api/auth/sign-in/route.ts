import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import { generateAccessToken } from "@/actions/GenerateJWToken";
import prisma from "@/lib/prisma";
import { excludePassword } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "user does not exist",
      });
    }

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect) {
      return NextResponse.json({
        success: false,
        message: "Incorrect credentials",
      });
    }

    const safeUser = excludePassword(user);

    const token = await generateAccessToken(
      safeUser.id,
      safeUser.plan,
      7 * 24 * 60 * 60
    );

    const response = NextResponse.json({
      success: true,
      message: "ok",
      data: safeUser,
    });
    response.cookies.set("freeposal-authentication", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 7 * 24 * 60 * 60,
    });

    return response;
  } catch (error) {
    console.log("error while loging user: ", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
