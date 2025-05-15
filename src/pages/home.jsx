import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Point from "@/components/point";
import SpeechBubble from "@/components/speech_basci";
import Moodi from "@/components/moodi";
import Navbar from "@/components/nav/navbar";
import { getUserPoint } from "@/pages/api/point";
import { getNickname } from "@/pages/api/auth";

export default function Home() {
  const [point, setPoint] = useState(0);
  const [nickname, setNickname] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      const userPoint = await getUserPoint();
      const userNickname = await getNickname();
      setPoint(userPoint);
      setNickname(userNickname);
    }
    fetchData();
  }, []);

  const handleSettingClick = () => {
    alert("Coming Soon");
  };

  return (
    <div className="min-h-screen w-full flex justify-center overflow-hidden">
      <div className="relative w-full max-w-[390px] min-h-screen flex flex-col items-center justify-between px-4">
        <div className="absolute top-4 left-4 z-10">
          <Point value={point} />
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

        <div className="flex flex-col items-center justify-center flex-grow pt-[70px] pb-[120px]">
          <SpeechBubble>Hi {nickname}!</SpeechBubble>
          <Moodi className = "animate-float2" />
        </div>

        <div className="w-full flex justify-center">
          <Navbar />
        </div>
      </div>
    </div>
  );
}
