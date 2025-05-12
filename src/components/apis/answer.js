"use client";

import { useState } from "react";
import Answer from "@/components/story/Answer";
import axios from "@/libs/axios";

export default function AnswerPage() {
  const [response, setResponse] = useState("What topic do you want to talk about?");

  const handleSubmit = async (userInput) => {
    try {
      const res = await axios.post("/api/answer", {
        question: userInput,
      });
      const answer = res.data?.answer || "응답을 불러올 수 없어요.";
      setResponse(answer);
    } catch (err) {
      console.error("API 호출 실패", err);
      setResponse("문제가 발생했어요.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-between h-full p-4">
      <div className="bg-gray-200 text-center text-sm px-4 py-2 rounded-xl relative mb-4">
        {response}
        <div className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-[10px] border-t-gray-200"></div>
      </div>
        {/* 무디자리리 */}
      <div className="w-40 h-40 rounded-full bg-gray-100 border mb-4"></div>

      <Answer onSubmit={handleSubmit} />
    </div>
  );
}
