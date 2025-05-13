import React from "react";
import Moodi from "@/components/moodi";
import FlyInButton from "@/components/buttons/FlyinButton";
import SignUpButton from "@/components/buttons/SignUpButton";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-end pb-20 relative">
      {/* 무디 캐릭터 */}
      <div className="absolute top-[20%] flex justify-center w-full">
        <Moodi />
      </div>

      {/* 버튼 영역 */}
      <div className="flex flex-col items-center gap-4 z-10">
        <FlyInButton />
        <SignUpButton />
      </div>
    </div>
  );
}
