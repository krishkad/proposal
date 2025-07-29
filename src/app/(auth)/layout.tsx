import { cookies } from "next/headers";
import React, { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {
  const token = await cookies();

  console.log({ token });
  return (
    <div className="w-full">
      <main className="w-full">{children}</main>
    </div>
  );
};

export default AuthLayout;
