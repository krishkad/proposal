import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("freeposal-authentication")?.value;

    if (!token) {
      return NextResponse.json({ success: false, message: "failed to logout" });
    }

    const response = NextResponse.json({
      success: true,
      message: "log out successful",
    });

    response.cookies.delete("freeposal-authentication");
    return response;
  } catch (error) {
    console.log("[ERROR WHILE LOGING OUT]: ", error);
    return NextResponse.json({
      success: false,
      message: "Internal server error",
    });
  }
}
