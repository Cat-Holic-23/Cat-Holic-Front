import React, { useState, useRef } from "react";
import { useRouter } from "next/router";
import MiniTitle from "@/components/minititle/minititle";
import Moodi from "@/components/moodi_face";
import InterestSpinner, { categories } from "@/components/interest";
import StartButton from "./../components/buttons/StartButton";
import { join } from "@/components/apis/auth";

export default function Int() {
  const router = useRouter();
  const [interests, setInterests] = useState([]);
  const [loading, setLoading] = useState(false);
  const spinnerRef = useRef();

  const handlePageTouch = () => {
    if (spinnerRef.current) {
      spinnerRef.current();
    }
  };

  const handleNext = async () => {
    setLoading(true);
    const username = localStorage.getItem("signup_userId");
    const password = localStorage.getItem("signup_userPassword");
    const nickname = localStorage.getItem("signup_nickname");
    const age = localStorage.getItem("signup_age");
    const gender = localStorage.getItem("signup_gender");

    try {
      await join({
        username: String(username),
        password: String(password),
        nickname: String(nickname),
        gender: String(gender),
        age: Number(age),
        interest: interests
          .map((k) => categories.find((c) => c.key === k)?.label)
          .join(", "),
      });

      alert("회원가입이 완료되었습니다. 로그인 후 이용해주세요.");
      router.push("/login");
    } catch (err) {
      alert("회원가입에 실패했습니다.");
    } finally {
      setLoading(false);
    }
  };

  const isActive = interests.length > 0;

  return (
    <div
      className="relative min-h-screen w-full flex flex-col items-center bg-transparent"
      onClick={handlePageTouch}
      onTouchEnd={handlePageTouch}
    >
      <div className="fixed top-0 left-0 w-full flex justify-center z-10 pt-10 pb-4 bg-transparent">
        <MiniTitle>Interest</MiniTitle>
      </div>

      <div className="flex flex-col items-center w-full max-w-md flex-1 pt-[80px] pb-[140px]">
        <div className="flex flex-col items-center">
          <Moodi />
          <div
            style={{
              color: "#424242",
              fontFamily: "Pretendard",
              fontSize: 18,
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "140%",
              letterSpacing: "-0.4px",
              marginTop: 24,
              textAlign: "center",
            }}
          >
            Choose your interests!
          </div>
        </div>

        <InterestSpinner
          value={interests}
          onChange={setInterests}
          onSpinNext={spinnerRef}
        />
      </div>

      <div className="fixed bottom-0 left-0 w-full flex justify-center z-10 pb-9 ">
        <StartButton onClick={handleNext} disabled={!isActive || loading} />
      </div>
    </div>
  );
}
