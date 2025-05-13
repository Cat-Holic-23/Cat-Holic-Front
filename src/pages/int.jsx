{
  /* 해야할 일 */
}
// 1. 흥미 정보 백엔드로 보내기기
// 2. 저 스피너 좀 고치기 - CSS
// 3. 버튼 UI 살짝 수정 & 버튼 활성화 로직직

import React from "react";
import { useRouter } from "next/router";
import MiniTitle from "@/components/minititle/minititle";
import Moodi from "@/components/moodi_face";
import InterestSpinner from "@/components/interest";
import StartButton from "./../components/buttons/StartButton";

export default function Int() {
  const router = useRouter();

  const handleNext = () => {
    router.push("/home");
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-transparent">
      {/* 상단 MiniTitle 고정 */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-10 pt-10 pb-4 bg-transparent">
        <MiniTitle>Interest</MiniTitle>
      </div>

      {/* 가운데 Moodi + 입력폼 */}
      <div className="flex flex-col items-center w-full max-w-md flex-1 pt-[80px] pb-[140px]">
        <div className="mb-2">
          <Moodi />
        </div>
        <InterestSpinner />
      </div>

      {/* 하단 NextButton 고정 */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center z-10 pb-9 ">
        <StartButton />
      </div>
    </div>
  );
}
