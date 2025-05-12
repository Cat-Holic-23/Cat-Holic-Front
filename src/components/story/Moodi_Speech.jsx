// //무디 컴포넌트 + 말풍선 컴포넌트 + AI 대답 생성
import Moodi from "@/components/moodi";
import React from "react";

export default function MoodiSpeech() {
  return (
    <div className="flex flex-col items-center mt-10">
      {/* 말풍선 */}
      <div className="bg-gray-300 px-4 py-2 rounded-xl relative text-center font-semibold">
        <p>What topic do you want to talk about?</p>
        <div className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-300 rotate-45"></div>
      </div>

      {/* 무디 캐릭터 */}
      <div className="mt-4 w-32 h-32 rounded-full border bg-gray-100 flex items-center justify-center">
        <Moodi />
      </div>
    </div>
  );
}
