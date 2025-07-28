import { generateAccessToken } from "@/actions/GenerateJWToken";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";
import { excludePassword } from "@/lib/utils";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    const isUserAlreadyExists = await prisma.user.findUnique({
      where: { email },
    });

    if (isUserAlreadyExists) {
      return NextResponse.json({
        success: false,
        message: "user already exists",
      });
    }

    const hashedpassword = bcrypt.hashSync(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedpassword,
      },
    });

    if (!user) {
      return NextResponse.json({
        success: false,
        message: "failed to create user",
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
    console.log("error while creating user: ", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
