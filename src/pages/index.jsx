import React from "react";
import Moodi from "@/components/moodi";
import Logo from "@/components/logo";
import FlyInButton from "@/components/buttons/FlyinButton";
import SignUpButton from "@/components/buttons/SignUpButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-end pb-20 relative">
      {/* 로고 */}
      <div className="absolute top-[7%] flex w-50 animate-float1">
        <Logo />
      </div>

      {/* 무디 */}
      <div className="absolute top-[22%] flex justify-center w-full animate-float2">
        <Moodi />
      </div>

      {/* 버튼*/}
      <div className="flex flex-col items-center gap-4 z-10">
        <FlyInButton />
        <SignUpButton />
      </div>
    </div>
  );
}
