import { NextRequest, NextResponse } from "next/server";
import { CustomJwtPayload } from "../generate-proposal/route";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

export async function PUT(req: NextRequest) {
  try {
    const { userId } = Object.fromEntries(new URL(req.url).searchParams);

    const { proposal, proposalId, proposalTitle } = await req.json();

    if (!userId || !proposal || !proposalId || !proposalTitle) {
      return NextResponse.json({
        success: false,
        message: "proposal or proposalId or userId or proposalTitle missing",
      });
    }

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

    const updated_proposal = await prisma.proposal.update({
      where: { id: proposalId },
      data: { proposal, title: proposalTitle },
    });

    if (!updated_proposal) {
      return NextResponse.json({
        success: false,
        message: "failed to update proposal",
      });
    }

    return NextResponse.json({ success: true, data: updated_proposal });
  } catch (error) {
    console.log("Error while updating proposal: ", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
