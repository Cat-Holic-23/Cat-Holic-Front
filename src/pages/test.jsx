import { useRouter } from "next/router";
import { isLoggedIn } from "@/utils/storage";
import Moodi from "@/components/moodi";
import FlyInButton from "@/components/buttons/FlyinButton";
import LoginButton from "@/components/buttons/LoginButton";
import MiniTitle from "@/components/minititle/minititle";
import InputBox from "@/components/inputs/input";
import GenderBox from "@/components/inputs/boy_girl";
import ChatInput from "@/components/inputs/chat";
import SpeechBubble from "@/components/speech";
import Point from "@/components/point";
import NickName from "@/components/inputs/nickname";
import React, { useState } from "react";
import Age from "@/components/inputs/age";
import BoyGirl from "@/components/inputs/boy_girl";
import Interest from "@/components/signup/interest";

export default function Test() {
  const [gender, setGender] = React.useState("");
  return (
    <div className>
      <MiniTitle>메인 렌더링 페이지 Create your account</MiniTitle>
      <br></br>
      <BoyGirl value={gender} onChange={setGender} />
      <br></br>
      <Age />
      <br></br>
      <GenderBox label="Boy" color="#3CC9FF" />
      <br></br>
      <GenderBox label="Girl" color="#FFB932" />
      <br></br>
      <LoginButton />
      <br></br>
      <FlyInButton />
      <br></br>
      <Point value={150} />
      <br></br>
      <Interest />
      <br></br>
      <SpeechBubble>Hi nickname</SpeechBubble>
      <br></br>
      <ChatInput placeholder="컴포넌트 확인" />
    </div>
  );
}
