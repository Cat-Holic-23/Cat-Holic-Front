 {/* 해야할 일 */}
// 1. 포인트 값 받아오는 api (point.js)
// 2. nickname 받아오는 api(auth.js)

import React from "react";
import Point from "@/components/point";
import SpeechBubble from "@/components/speech_basci";
import Moodi from "@/components/moodi";
import Navbar from "@/components/nav/navbar";

export default function Home() {
  const handleSettingClick = () => {
    alert("Coming Soon");
  };

  return (
    <div className="min-h-screen w-full flex justify-center overflow-hidden">
      {/* 모바일 뷰 가상 화면 */}
      <div className="relative w-full max-w-[390px] min-h-screen flex flex-col items-center justify-between px-4">
        <div className="absolute top-4 left-4 z-10">
          <Point value={120} />
        </div>

        <button
          onClick={handleSettingClick}
          className="absolute top-4 right-4 w-[36px] h-[36px] z-10"
        >
          <img
            src="/svgs/setting.svg"
            alt="Setting"
            className="w-full h-full object-contain"
          />
        </button>


        <div className="flex flex-col items-center justify-center flex-grow pt-[60px] pb-[120px]">
          <SpeechBubble>Hi Nickname!</SpeechBubble>
          <Moodi />
        </div>


        <div className="w-full flex justify-center">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
