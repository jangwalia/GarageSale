import Logo from "@/components/Logo";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-y-6 items-center min-h-screen justify-center">
      <Logo />
      <main className="">{children}</main>
    </div>
  );
}
