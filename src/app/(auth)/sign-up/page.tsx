import React from "react";
import { SignUpForm } from "@/components/auth/SignUpForm";
import { GalleryVerticalEndIcon } from "lucide-react";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="bg-primary/5 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link href="/" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEndIcon className="size-4" />
          </div>
          Freeposal.ai
        </Link>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
