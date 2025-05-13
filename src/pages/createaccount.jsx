 {/* 해야할 일 */}
// 1. userId, userPassword 값 보내기기
// 2. 이용약관 상세 작업 - pdf 내려 받는걸로 
// 3. NextButton 활성화 조건

import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import MiniTitle from "@/components/minititle/minititle";
import InputId from "@/components/inputs/input";
import InputPassword from "@/components/inputs/input";
import NextButton from "@/components/buttons/NextButton";

export default function CreateAccount() {
  const router = useRouter();

  const handleNext = () => {
      router.push("/userInfo");
  };

  return (
    <div className="min-h-screen flex flex-col items-center px-3 pt-10 pb-[100px] w-full">
      <div className="w-full max-w-md flex flex-col items-center">
        <MiniTitle>Create your account</MiniTitle>

        <div className="w-full mt-20 space-y-4 flex flex-col items-center">
          <InputId placeholder="Enter your user ID" />
          <InputPassword placeholder="Enter your password" />
        </div>

        {/* 약관 동의 상세 수정 */}
        <div className="w-full mt-6 space-y-3 text-sm text-gray-800">
          <div className="flex items-center space-x-2">
            <span>약관 전체 동의</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>[필수] Moodi 이용약관</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>[필수] Moodi 이용약관</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">[필수] Moodi 이용약관</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-gray-500">[필수] Moodi 이용약관</span>
          </div>
        </div>
      </div>
      {/* 다음 버튼 */}
      <div className="absolute bottom-[36px] w-full flex justify-center">
        <NextButton onClick={handleNext} />
      </div>
    </div>
  );
}
