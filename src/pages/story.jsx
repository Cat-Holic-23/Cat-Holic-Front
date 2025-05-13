import React, { useState, useRef, useEffect } from "react";
import MiniTitle from "@/components/minititle/minititle";
import SpeechBubble from "@/components/speech";
import Moodi from "@/components/moodi";
import MoodiFace from "@/components/moodi_face";
import ChatInput from "@/components/inputs/chat";
import Select from "@/components/story/Select";
import Right_Modal from "@/components/story/modal/Right";
import Wrong_Modal from "@/components/story/modal/Wrong";
import Point_Modal from "@/components/story/modal/Point";

const MOCK_SOCIAL_STORY =
  "This is a mock social situation story generated based on the topic.";
const MOCK_SOCIAL_QUERY = "What do you think about this situation?";
const MOCK_OPTIONS = [
  "예시 1",
  "조금 긴 에시 2",
  "하 이거 언제 다하냐냐",
  "Take the swing",
];

export default function Story() {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState("");
  const [socialStory, setSocialStory] = useState(MOCK_SOCIAL_STORY);
  const [socialQuery, setSocialQuery] = useState(MOCK_SOCIAL_QUERY);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showRightModal, setShowRightModal] = useState(false);
  const [showWrongModal, setShowWrongModal] = useState(false);
  const [showPointModal, setShowPointModal] = useState(false);

  // 1. 사용자가 채팅 입력 후 send
  const handleSendTopic = (msg) => {
    setTopic(msg);
    setStep(2);
  };

  // 2. 사회상황 이야기 끝나면(화면 클릭)
  const handleStoryClick = () => {
    if (step === 2) setStep(3);
  };

  // 3. 질의 끝나면 2초 뒤 step 4
  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => setStep(4), 3000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  // 4. 답변 선택
  const handleSelect = (option, idx) => {
    setSelectedAnswer(idx);
    if (idx === 0) setShowRightModal(true);
    else setShowWrongModal(true);
  };

  const handleContinue = () => {
    setShowRightModal(false);
    setShowWrongModal(false);
    setShowPointModal(true);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-white">
      {/* 상단 MiniTitle 고정 */}
      <div className="fixed top-0 left-0 w-full flex justify-center z-10 pt-10 pb-4 bg-white">
        {step > 1 && <MiniTitle>story</MiniTitle>}
      </div>

      {/* 중앙 Moodi + 말풍선/입력/선택 */}
      <div className="flex flex-col items-center justify-center w-full max-w-md flex-1 pt-[100px] pb-[140px]">
        <div className="w-full flex flex-col items-center space-y-4">
          {/* step 1: 토픽 입력 */}
          {step === 1 && (
            <>
              <SpeechBubble>What topic do you want to talk</SpeechBubble>
              {/* step 4만 MoodiFace, 나머지는 Moodi */}
              {step === 4 ? <MoodiFace /> : <Moodi />}
              <ChatInput
                onSend={handleSendTopic}
                placeholder="Type your topic..."
              />
              <div className="mb-8"></div>
            </>
          )}

          {/* step 2: 사회상황 이야기 (클릭 시 step 3) */}
          {step === 2 && (
            <div
              onClick={handleStoryClick}
              className="w-full flex flex-col items-center cursor-pointer"
            >
              <SpeechBubble>
                {/* 실제론 topic 기반, 지금은 목업 */}
                {socialStory}
              </SpeechBubble>
              {step === 4 ? <MoodiFace /> : <Moodi />}
            </div>
          )}

          {/* step 3: 사회상황 질의*/}
          {step === 3 && (
            <>
              <SpeechBubble>{socialQuery}</SpeechBubble>
              {step === 4 ? <MoodiFace /> : <Moodi />}
            </>
          )}

          {/* step 4: 답변 선택/입력 */}
          {step === 4 && (
            <>
              <SpeechBubble>{socialQuery}</SpeechBubble>
              {step === 4 ? <MoodiFace /> : <Moodi />}
              <Select options={MOCK_OPTIONS} onSelect={handleSelect} />
              <ChatInput
                onSend={(msg) => {
                  /* 답변 채팅 처리 */
                }}
                placeholder="You can enter it yourself"
              />
            </>
          )}
        </div>
      </div>
      {/* 정답 모달 */}
      <Right_Modal
        open={showRightModal}
        onClose={() => setShowRightModal(false)}
        onContinue={handleContinue}
      />
      <Wrong_Modal
        open={showWrongModal}
        onClose={() => setShowWrongModal(false)}
        onContinue={handleContinue}
      />
      <Point_Modal
        open={showPointModal}
        onClose={() => setShowPointModal(false)}
        point={100} // 목업 포인트
      />
    </div>
  );
}
