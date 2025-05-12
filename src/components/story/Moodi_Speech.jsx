// //무디 컴포넌트 + 말풍선 컴포넌트 + AI 대답 생성

import Moodi from "@/components/moodi";
import { useEffect, useState } from "react";

export default function MoodiSpeech({ userMsg, step }) {
  const [aiMsg, setAiMsg] = useState("");

  useEffect(() => {
    if (step === 1 && userMsg) {
      setAiMsg(`${userMsg}`);
      // AI 응답 생성 로직
    }
  }, [step, userMsg]);

  return (
    <div className="w-[390px] h-[844px] relative overflow-hidden bg-white">
      {/* 말풍선 */}
      <div className="top-[110px] left-1/2 transform -translate-x-1/2 text-sm bg-gray-200 p-2 rounded-lg max-w-[260px] text-center">
        {step === 0 ? "What topic do you want to talk about?" : aiMsg}
      </div>

      {/* 무디 위치 지정 */}
      <div className="top-[152px] left-[45px] right-[45px] bottom-[392px] flex justify-center items-center">
        <div className="w-[50px] h-[50px] flex justify-center items-center flex-shrink-0">
          <Moodi />
        </div>
      </div>
    </div>
  );
}
