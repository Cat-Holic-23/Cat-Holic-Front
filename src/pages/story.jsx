//메인 - 조건 부로 컴포넌트 불러오기
"use client";

import { useState } from "react";
import Answer from "@/components/story/Answer";
import MoodiSpeech from "@/components/story/Moodi_Speech";

export default function StoryPage() {
  const [step, setStep] = useState(0); // 스텝 상태관리리

  return (
    <div className="w-full h-screen flex flex-col justify-between items-center p-4">
      {/* 무디 필드 */}
      {step === 0 && <MoodiSpeech />}

      {/* 채팅 입력 필드 */}
      {step === 0 && (
        <Answer onSubmit={(msg) => console.log("사용자 입력:", msg)} />
      )}
    </div>
  );
}
