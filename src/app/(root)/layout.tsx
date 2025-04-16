import Navbar from "@/components/shared/navbar";
import React from "react";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="w-full relative">
      <nav className="sticky top-0 bg-background w-full z-30">
        <Navbar />
      </nav>
      <main className="w-full">{children}</main>
    </main>
  );
};

export default RootLayout;
