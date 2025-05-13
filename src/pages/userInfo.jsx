 {/* 해야할 일 */}
// 1. nickname, age, gender 값 보내기
// 2. gender 선택박스 CSS 추가
// 3. NextButton 활성화 조건

import React from "react";
import { useRouter } from "next/router";
import MiniTitle from "@/components/minititle/minititle";
import Moodi from "@/components/moodi";
import NickName from "@/components/inputs/nickname";
import Age from "@/components/inputs/age";
import Gender from "@/components/inputs/boy_girl";
import NextButton from "@/components/buttons/NextButton";

export default function CreateAccount() {
  const router = useRouter();
  
    const handleNext = () => {
        router.push("/interest");
    };
  
  return (
    <div className="min-h-screen flex flex-col items-center px-3 pt-10 pb-[100px] w-full">
      <div className="w-full max-w-md flex flex-col items-center">
        <MiniTitle>User Information</MiniTitle>

        <div className="mt-6 mb-8 flex justify-center w-50">
          <Moodi />
        </div>

        <div className="absolute top-[600px] w-full space-y-4 flex flex-col items-center">
          <NickName />
          <Age />
          <Gender />
        </div>
      </div>

      {/* 다음 버튼 */}
      <div className="absolute bottom-[36px] w-full flex justify-center">
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
}
