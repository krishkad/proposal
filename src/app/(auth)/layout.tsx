import CheckIsUser from "@/components/auth/CheckIsUser";
import React, { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full">
      <CheckIsUser />
      <main className="w-full">{children}</main>
    </div>
  );
};

export default AuthLayout;
