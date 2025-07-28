import { User } from "@prisma/client";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function excludePassword(user: User) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: _password, ...others } = user;
  return others;
}
