import { SignUpForm } from "@/components/auth/SignUpForm";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <div className="bg-primary/5 flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="/"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="inline-flex items-center justify-center size-6 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full">
            {/* <Sparkles className="w-8 h-8 text-white" /> */}
            <img
              src="/freeposal-logo-removebg-preview.png"
              className="size-6 shrink-0"
              alt="Freeposal Logo"
            />
          </div>
          Freeposal
        </Link>
        <SignUpForm />
      </div>
    </div>
  );
};

export default SignUpPage;
