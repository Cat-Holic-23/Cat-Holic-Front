"use client";

import { useState } from "react";
import Answer from "@/components/story/Answer";
import MoodiSpeech from "@/components/story/Moodi_Speech";
import Select from "@/components/story/Select";
import RightModal from "@/components/story/modal/Right";
import WrongModal from "@/components/story/modal/Wrong";

// 예시 데이터
const aiChoices = [
  { id: "1", text: "정답입니다!" },
  { id: "2", text: "오답 1" },
  { id: "3", text: "오답 2" },
  { id: "4", text: "오답 3" },
];
const correctId = "1"; 

export default function StoryPage() {
  const [step, setStep] = useState(0);
  const [userMsg, setUserMsg] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  // 첫 질문
  const handleUserSubmit = (msg) => {
    setUserMsg(msg);
    setStep(1);
  };

  // 상황 제시
  const handleScreenTouch = () => {
    if (step === 1) setStep(2);
  };

  // 4지선다 선택
  const handleSelect = (id) => {
    if (selectedId || isCorrect !== null) return; 
    setSelectedId(id);
    const isAnswer = id === correctId;
    setIsCorrect(isAnswer);
    setStep(3);
  };

  // 자유입력(채팅) 정답 체크
  const handleFreeInput = (msg) => {
    if (selectedId || isCorrect !== null) return; // 이미 선택 or 입력햇음 무시시
    // 자유입력도 정답과 비교 aI 이거 어케 받니니
    const correctText = aiChoices.find((c) => c.id === correctId).text;
    const isAnswer = msg === correctText;
    setIsCorrect(isAnswer);
    setStep(3);
  };

  // 결과 모달에서 CONTINUE 버튼 클릭
  const handleContinue = () => {
    setStep(0);
    setUserMsg("");
    setSelectedId(null);
    setIsCorrect(null);
  };

  return (
    <div
      className="w-full h-screen flex flex-col justify-between items-center p-4"
      onClick={handleScreenTouch}
      style={{ cursor: step === 1 ? "pointer" : "default" }}
    >
      {/* 무디 + 말풍선 */}
      <MoodiSpeech
        userMsg={userMsg}
        step={step}
        overrideText={
          step === 2
            ? "어떤 말을 할래?" // 상황에 맞는 질문 (AI 생성)
            : undefined
        }
      />

      {/* step 0: 채팅 입력 */}
      {step === 0 && <Answer onSubmit={handleUserSubmit} />}

      {/* step 2: 4지선다 + 자유입력 동시 */}
      {step === 2 && (
        <div className="flex flex-col gap-4 w-full max-w-md">
          <Select
            options={aiChoices}
            onSelect={handleSelect}
            selectedId={selectedId}
          />
          <div className="text-center text-sm text-gray-400"></div>
          <Answer onSubmit={handleFreeInput} />
        </div>
      )}

      {/* step 3: 정답/오답 모달 */}
      {step === 3 && isCorrect === true && (
        <RightModal onContinue={handleContinue} />
      )}
      {step === 3 && isCorrect === false && (
        <WrongModal onContinue={handleContinue} />
      )}
    </div>
  );
}
