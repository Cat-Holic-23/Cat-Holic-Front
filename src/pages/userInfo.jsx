import React, { useState } from "react";
import { useRouter } from "next/router";
import MiniTitle from "@/components/minititle/minititle";
import Moodi from "@/components/moodi_face";
import NickName from "@/components/inputs/nickname";
import Age from "@/components/inputs/age";
import Gender from "@/components/inputs/boy_girl";
import NextButton from "@/components/buttons/NextButton";

export default function CreateAccountInfo() {
  const router = useRouter();
  const [nickname, setNickname] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");

  const handleNext = () => {
    localStorage.setItem("signup_nickname", nickname);
    localStorage.setItem("signup_age", age);
    localStorage.setItem("signup_gender", gender);
    router.push("/int");
  };

  const isActive = nickname.trim() && age && gender;
  return (
    <div className="relative min-h-screen w-full flex flex-col items-center bg-transparent">
      <div className="fixed top-0 left-0 w-full flex justify-center z-10 pt-10 pb-4 bg-transparent">
        <MiniTitle>User Information</MiniTitle>
      </div>

      <div className="flex flex-col items-center justify-center w-full max-w-md flex-1 pt-[80px] pb-[140px]">
        <div className="mb-8 animate-float2">
          <Moodi />
        </div>
        <div className="w-full flex flex-col items-center space-y-4">
          <NickName
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <Age value={age} onChange={(e) => setAge(e.target.value)} />
          <Gender value={gender} onChange={setGender} />
        </div>
      </div>

      {/* 하단 NextButton 고정 */}
      <div className="fixed bottom-0 left-0 w-full flex justify-center z-10 pb-9 ">
        <NextButton onClick={handleNext} disabled={!isActive} />
      </div>
    </div>
  );
}
