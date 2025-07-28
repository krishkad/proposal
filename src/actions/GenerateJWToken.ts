"use server";
import jwt from "jsonwebtoken";

export const generateAccessToken = async (
  userId: string,
  plan: "FREE" | "PRO",
  expiresIn: number // e.g., free trial
) => {
  const payload = { id: userId, plan };
  return jwt.sign(payload, process.env.JWT_SECRET_KEY as string, { expiresIn });
};
