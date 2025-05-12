// //무디 컴포넌트 + 말풍선 컴포넌트 + AI 대답 생성
import Moodi from "@/components/moodi";
import { useEffect, useState } from "react";

export default function MoodiSpeech({ userMsg, step }) {
  const [aiMsg, setAiMsg] = useState("");

  useEffect(() => {
    if (step === 1 && userMsg) {
      // AI 응답 생성 로직
      const aiResponse = `${userMsg}`;
      setAiMsg(aiResponse);
    }
  }, [step, userMsg]);

  return (
    <div className="flex flex-col items-center">
      <Moodi />
      <div className="speech-bubble mt-2">
        {step === 0 ? "What topic do you want to talk about?" : aiMsg}
      </div>
    </div>
  );
}
