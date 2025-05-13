{
  /* 해야할 일 */
}
// 1. 로그인 토큰 보내기
// 2. 로그인 토큰 받아오기기
// 3. 로그인 창 접근시 토큰 존재 -> 바로 홈(이거 아마 로그인 버튼에 구현해놓음음)

import React from "react";
import MiniTitle from "@/components/minititle/minititle";
import InputId from "@/components/inputs/input";
import InputPassword from "@/components/inputs/input";
import LoginButton from "@/components/buttons/LoginButton";

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col items-center px-3 pt-10 pb-[100px] w-full">
      <div className="w-full max-w-md flex flex-col items-center">
        <MiniTitle>Login</MiniTitle>

        <div className="w-full mt-20 space-y-4 flex flex-col items-center">
          <InputId placeholder="Enter your user ID" />
          <InputPassword placeholder="Enter your password" />
        </div>

        {/* 다음 버튼 */}
        <div className="absolute bottom-[36px] w-full flex justify-center">
          <LoginButton />
        </div>
      </div>
    </div>
  );
}
