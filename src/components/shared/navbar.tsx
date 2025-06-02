import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "../ui/button";

const Navbar = () => {
  return (
    <div className="max-w-wrapper h-16 flex items-center justify-between border-b border-gray-200">
      {/* LOGO */}
      <h1 className="text-2xl font-bold text-primary">Proposal.ai</h1>

      {/* LINKS */}
      <div className="w-max hidden md:flex items-center-justify-center gap-8">
        <Link href={"#"} className="hover:text-primary transition-all">
          Features
        </Link>
        <Link href={"#"} className="hover:text-primary transition-all">
          How It Works
        </Link>
        <Link href={"#"} className="hover:text-primary transition-all">
          Pricing
        </Link>
        <Link href={"#"} className="hover:text-primary transition-all">
          FAQ&apos;s
        </Link>
      </div>

      {/* BUTTONS */}
      <div className="w-max flex items-center justify-center gap-6">
        <Link href={"#"} className="hover:text-primary transition-all">
          Log-in
        </Link>
        <Link
          href={"/dashboard/generate"}
          className={cn(buttonVariants({ variant: "default" }))}
        >
          Start Free
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
