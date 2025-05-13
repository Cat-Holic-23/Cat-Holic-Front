 {/* 해야할 일 */}
// 1. 흥미 정보 백엔드로 보내기기
// 2. 저 스피너 좀 고치기 - CSS
// 3. 버튼 UI 살짝 수정 & 버튼 활성화 로직직


import React from "react";
import { useRouter } from "next/router";
import MiniTitle from "@/components/minititle/minititle";
import Moodi from "@/components/moodi";
import InterestSpinner from "@/components/signup/interest";
import StartButton from "./../components/buttons/StartButton";

export default function Interest() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/home");
  };
  return (
    <div className="min-h-screen flex flex-col items-center px-3 pt-10 pb-[100px] w-full">
      <div className="w-full max-w-md flex flex-col items-center">
        <MiniTitle>Interest</MiniTitle>

        <div className="mt-6 mb-8 flex justify-center w-50">
          <Moodi />
        </div>

        <div className="absolute top-[400px] w-full space-y-4 flex flex-col items-center">
          <InterestSpinner />
        </div>
      </div>

      {/* 다음 버튼 */}
      <div className="absolute bottom-[36px] w-full flex justify-center">
        <StartButton onClick={handleNext} />
      </div>
    </div>
  );
}
