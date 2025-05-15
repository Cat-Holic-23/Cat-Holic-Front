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
import { saveResult, updateResult } from "@/pages/api/answer";
import { generateStory } from "@/pages/api/story";
import { checkStory } from "@/pages/api/story";
import StoryLoading from "@/components/story/Loading";

export default function Story() {
  const [step, setStep] = useState(1);
  const [topic, setTopic] = useState("");
  const [options, setOptions] = useState([]);
  const [socialStory, setSocialStory] = useState("");
  const [socialQuery, setSocialQuery] = useState("");
  const [showRightModal, setShowRightModal] = useState(false);
  const [showWrongModal, setShowWrongModal] = useState(false);
  const [showPointModal, setShowPointModal] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState([]);
  const [storyId, setStoryId] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [explanation, setExplanation] = useState("");
  const [storyData, setStoryData] = useState(null);
  const [resultId, setResultId] = useState(null);
  const [isStoryLoading, setIsStoryLoading] = useState(false);

  // 1. 사용자가 채팅 입력 후 send
  const handleSendTopic = async (msg) => {
    setTopic(msg);
    setIsStoryLoading(true);
    try {
      const data = await generateStory(msg);
      setStoryData(data);
      setSocialStory(data.story);
      setSocialQuery(data.question);
      setOptions(data.choices);
      setStoryId(data.id);
      setCorrectAnswer(data.correct_answer);
      setStep(2);
    } catch (e) {
      alert("Failed to generate story.");
    } finally {
      setIsStoryLoading(false);
    }
  };
  // 2. 사회상황 이야기 끝나면
  const handleStoryClick = () => {
    if (step === 2) setStep(3);
  };

  // 3. 질의 끝나면 2초 뒤 step 4
  useEffect(() => {
    if (step === 3) {
      const timer = setTimeout(() => setStep(4), 1000);
      return () => clearTimeout(timer);
    }
  }, [step]);

  const handleContinue = () => {
    setShowRightModal(false);
    setShowWrongModal(false);
    setShowPointModal(true);
  };

  const handleAnswer = async (userAnswer) => {
    if (!storyData) {
      alert("No problems were created.");
      return;
    }

    // 1. 결과 저장 
    let resultData;
    try {
      resultData = await saveResult({
        story: storyData.story,
        question: storyData.question,
        choices: storyData.choices,
        answer: storyData.correct_answer,
        userInput: userAnswer,
      });
      setResultId(resultData.id);
    } catch (e) {
      alert("Failed to save answer.");
      return;
    }

    // 2. 해설/정답 확인인
    try {
      const aiResult = await checkStory(resultData.id);
      setExplanation(aiResult.explanation);

      if (
        aiResult.correct_answer.trim().toLowerCase() ===
        userAnswer.trim().toLowerCase()
      ) {
        setShowRightModal(true);
      } else {
        setShowWrongModal(true);
      }
    } catch (e) {
      setExplanation("Could not load commentary.");
      setShowWrongModal(true);
    }
  };

  const handleUpdateAnswer = async (newUserInput) => {
    if (!resultId || !storyData) return;
    try {
      await updateResult(resultId, {
        id: resultId,
        story: storyData.story,
        question: storyData.question,
        choices: storyData.choices,
        answer: storyData.correct_answer,
        userInput: newUserInput,
      });
    } catch (e) {
      alert("Failed to edit your answer.");
    }
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-white overflow-hidden">
      <div className="fixed top-0 left-0 w-full flex justify-center z-10 pt-10 pb-4 bg-white">
        <MiniTitle>Story</MiniTitle>
      </div>

      <div className="flex flex-col items-center w-full max-w-md flex-1 pt-[80px] pb-[40px]">
        <div className="w-full flex flex-col items-center space-y-4">
          {step === 1 && (
            <>
              <SpeechBubble>What topic do you want to talk about</SpeechBubble>
              <Moodi
                style={{ width: 120, height: 120 }}
                className="animate-float2"
              />
            </>
          )}
          {step === 2 && (
            <div
              onClick={handleStoryClick}
              className="w-full flex flex-col items-center cursor-pointer"
              style={{ minHeight: 400 }}
            >
              <SpeechBubble>{socialStory}</SpeechBubble>
              <Moodi
                style={{ width: 120, height: 120 }}
                className="animate-float2"
              />
            </div>
          )}
          {step === 3 && (
            <>
              <SpeechBubble>{socialQuery}</SpeechBubble>
              <Moodi
                style={{ width: 120, height: 120 }}
                className="animate-float2"
              />
            </>
          )}
          {step === 4 && (
            <>
              <SpeechBubble>{socialQuery}</SpeechBubble>
              <MoodiFace
                tyle={{ width: 120, height: 120 }}
                className="animate-float2"
              />
              <div className="w-full flex flex-col items-center gap-3 mt-4 ">
                <Select
                  options={storyData?.choices || []}
                  onSelect={handleAnswer}
                />
                <ChatInput
                  onSend={handleAnswer}
                  placeholder="You can enter it yourself"
                />
              </div>
            </>
          )}
        </div>
      </div>

      {step === 1 && (
        <div
          className="fixed left-1/2 bottom-16 z-20 w-full max-w-md px-4 flex flex-col items-center"
          style={{ transform: "translateX(-50%)" }}
        >
          <ChatInput
            onSend={handleSendTopic}
            placeholder="Type your topic..."
          />
        </div>
      )}

      {isStoryLoading && <StoryLoading />}

      <Right_Modal
        open={showRightModal}
        onClose={() => setShowRightModal(false)}
        onContinue={handleContinue}
        explanation={explanation}
      />
      <Wrong_Modal
        open={showWrongModal}
        onClose={() => setShowWrongModal(false)}
        onContinue={handleContinue}
        explanation={explanation}
      />
      <Point_Modal
        open={showPointModal}
        onClose={() => setShowPointModal(false)}
        point={30}
      />
    </div>
  );
}
