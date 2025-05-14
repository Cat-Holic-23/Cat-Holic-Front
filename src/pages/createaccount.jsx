import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import MiniTitle from "@/components/minititle/minititle";
import InputId from "@/components/inputs/input";
import InputPassword from "@/components/inputs/input";
import NextButton from "@/components/buttons/NextButton";

export default function CreateAccountId() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [agreeAll, setAgreeAll] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  // 약관 체크박스 연동
  const handleAll = (checked) => {
    setAgreeAll(checked);
    setAgree1(checked);
    setAgree2(checked);
  };

  const handleNext = () => {
    // localStorage에 임시 저장
    localStorage.setItem("signup_userId", userId);
    localStorage.setItem("signup_userPassword", userPassword);
    router.push("/userInfo");
  };

  const isActive = userId.trim() && userPassword.trim() && agree1 && agree2;

  return (
    <div className="min-h-screen flex flex-col items-center px-3 pt-10 pb-[100px] w-full">
      <div className="w-full max-w-md flex flex-col items-center">
        <MiniTitle>Create your account</MiniTitle>

        <div className="w-full mt-20 space-y-4 flex flex-col items-center">
          <InputId
            placeholder="Enter your user ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <InputPassword
            placeholder="Enter your password"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
          />
        </div>
        {/* 약관동의 퍼블리싱 */}
        <div className="w-full mt-6 space-y-3 text-sm text-gray-800">
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agreeAll}
              onChange={(e) => handleAll(e.target.checked)}
            />
            <span>약관 전체 동의</span>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agree1}
              onChange={(e) => {
                setAgree1(e.target.checked);
                setAgreeAll(e.target.checked && agree2);
              }}
            />
            <span>
              [필수] Moodi 이용약관
              <a
                href="/terms.pdf"
                target="_blank"
                className="ml-2 underline text-blue-500"
              >
                PDF
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={agree2}
              onChange={(e) => {
                setAgree2(e.target.checked);
                setAgreeAll(e.target.checked && agree1);
              }}
            />
            <span>
              [필수] Moodi 개인정보처리방침
              <a
                href="/privacy.pdf"
                target="_blank"
                className="ml-2 underline text-blue-500"
              >
                PDF
              </a>
            </span>
          </div>
        </div>
      </div>
      {/* 다음 버튼 */}
      <div className="absolute bottom-[36px] w-full flex justify-center">
        <NextButton onClick={handleNext} disabled={!isActive} />
      </div>
    </div>
  );
}
