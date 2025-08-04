import { Proposal, User } from "@prisma/client";
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



export function excludePrompt(proposals: Proposal[]) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const filteredProposals = proposals.map(({ prompt, ...rest }) => rest);
  return filteredProposals
}