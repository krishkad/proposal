"use client"
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const CheckIsToken = ({ token }: { token: string | null }) => {
  const router = useRouter();
  const pathname = usePathname();
  useEffect(() => {
    if (token) {
      if (pathname.includes("/sign-in") || pathname.includes("/sign-up")) {
        router.push("/dashboard/generate");
        return;
      }
      return;
    }

    router.push("/dashboard/generate");
  }, [token, pathname]);

  return <></>;
};

export default CheckIsToken;
