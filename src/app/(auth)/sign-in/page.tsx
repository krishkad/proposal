import { SignInForm } from "@/components/auth/SignInForm";
import Link from "next/link";

const SignInPage = () => {
  return (
    <div className="bg-primary/5 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <img src="/android-chrome.png" className="size-4" alt="logo" />
          </div>
          Freeposal.ai
        </Link>
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInPage;
