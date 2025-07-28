"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

const CheckIsUser = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const freeposal_user = localStorage.getItem("freeposal-user");

    if (freeposal_user) {
      if (pathname.includes("/sign-in") || pathname.includes("/sign-up")) {
        router.push("/dashboard/generate");
      }
      return;
    }

    router.push("/dashboard/generate");
  }, [pathname]);

  return <></>;
};

export default CheckIsUser;
