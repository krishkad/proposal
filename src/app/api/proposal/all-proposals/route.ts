import prisma from "@/lib/prisma";
import { excludePrompt } from "@/lib/utils";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
import { CustomJwtPayload } from "../generate-proposal/route";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function GET(req: NextRequest, params: any) {
  try {
    const { userId } = Object.fromEntries(new URL(req.url).searchParams);

    console.log({ userId });

    const token = req.cookies.get("freeposal-authentication")?.value;

    console.log({ token });
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

    if (userId !== userToken.id) {
      console.log("userid and token userid does not match");
      const response = NextResponse.redirect(new URL("/sign-in", req.url));
      response.cookies.delete("freeposal-authentication");
      return response;
    }

    const user = await prisma.user.findUnique({ where: { id: userToken.id } });

    if (!user) {
      console.log(`no user with this id: `, userToken.id);
      const response = NextResponse.redirect(new URL("/sign-in", req.url));
      response.cookies.delete("freeposal-authentication");
      return response;
    }

    const proposals = await prisma.proposal.findMany({
      where: { userId },
    });

    if (!proposals || proposals.length <= 0) {
      return NextResponse.json({
        success: false,
        message: "no proposals found",
      });
    }

    const filteredProposals = excludePrompt(proposals);

    return NextResponse.json({ success: true, proposals: filteredProposals });
  } catch (error) {
    console.log("[ERROR WHILE GETTING ALL PROPOSALS]: ", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
