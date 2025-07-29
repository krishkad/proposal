import { ReactNode } from "react";

const AuthLayout = async ({ children }: { children: ReactNode }) => {

  return (
    <div className="w-full">
      <main className="w-full">{children}</main>
    </div>
  );
};

export default AuthLayout;
