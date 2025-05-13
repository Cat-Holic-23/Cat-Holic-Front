 {/* 해야할 일 */}
// 1. 조건부 컴포넌트 렌더링
// 2. 프롬포트 받아오기 (api)
// 3. 맞음 / 틀림 / 포인트 - 모달창 제작
// 4. 4지 선다시 줄 없는 무디

import React, { useState, useEffect } from "react";
import MiniTitle from "@/components/minititle/minititle";
import Speech from "@/components/speech";
import Moodi from "@/components/moodi";
import Select from "@/components/story/Select";
import ChatInput from "@/components/inputs/chat";

const MOCK_STORY =
  "오늘 길가다가 돈다발을 발견했어어";
const MOCK_QUESTION = "넌 어떻게 할거야??";

export default function StoryPage() {
  const [stage, setStage] = useState("intro");
  const [topic, setTopic] = useState("");
  const [story, setStory] = useState("");
  const [question, setQuestion] = useState("");
  const [clicked, setClicked] = useState(false);

  const handleSendTopic = (message) => {
    setTopic(message);
    setStory(MOCK_STORY);
    setStage("story");
  };

  const handleClickAnywhere = () => {
    if (stage === "story") {
      setQuestion(MOCK_QUESTION);
      setStage("question");
    }
  };

  useEffect(() => {
    if (stage === "question") {
      const timer = setTimeout(() => {
        setStage("select");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <div
      div
      className="min-h-screen w-full flex justify-center overflow-hidden"
      onClick={handleClickAnywhere}
    >
      {(stage === "story" || stage === "question" || stage === "select") && (
        <div className="mb-4">
          <MiniTitle text="Story" />
        </div>
      )}

      <div className="mt-[-100px] z-10">
        {stage === "intro" && (
          <>
            <Speech>What topic do you want to talk</Speech>
            <Moodi />
            <ChatInput
              onSend={handleSendTopic}
              placeholder="Enter a topic..."
            />
          </>
        )}

        {stage === "story" && <Speech>{story}</Speech>}

        {stage === "question" && <Speech>{question}</Speech>}

        {stage === "select" && (
          <>
            <Speech>{question}</Speech>
            <div className="mt-6 mb-4">
              <Select />
            </div>
            <ChatInput
              onSend={(msg) => console.log("User reply:", msg)}
              placeholder="your answer..."
            />
          </>
        )}
      </div>
    </div>
  );
}
