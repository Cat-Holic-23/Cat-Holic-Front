import React, { useState } from "react";
import { useRouter } from "next/router";
import MiniTitle from "@/components/minititle/minititle";
import InputId from "@/components/inputs/input";
import InputPassword from "@/components/inputs/input";
import NextButton from "@/components/buttons/NextButton";
import Image from "next/image";

export default function CreateAccountId() {
  const router = useRouter();
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [agreeAll, setAgreeAll] = useState(false);
  const [agree1, setAgree1] = useState(false);
  const [agree2, setAgree2] = useState(false);

  const handleAll = (checked) => {
    setAgreeAll(checked);
    setAgree1(checked);
    setAgree2(checked);
  };

  const handleNext = () => {
    localStorage.setItem("signup_userId", userId);
    localStorage.setItem("signup_userPassword", userPassword);
    router.push("/userInfo");
  };

  const isActive = userId.trim() && userPassword.trim() && agree1 && agree2;

  const renderCheckbox = (checked, onChange) => (
    <button onClick={onChange} className="w-5 h-5">
      <Image
        src={checked ? "/svgs/check.svg" : "/svgs/check_no.svg"}
        alt="checkbox"
        width={20}
        height={20}
      />
    </button>
  );

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

        <div className="w-full mt-6 space-y-4 text-sm text-gray-800">
          <div
            className="flex items-center justify-between"
            style={{ color: agreeAll ? "#424242" : "#00000087" }}
          >
            <div className="flex items-center space-x-2">
              {renderCheckbox(agreeAll, () => handleAll(!agreeAll))}
              <span>Agree to all</span>
            </div>
          </div>

          <div
            className="flex items-center justify-between"
            style={{ color: agree1 ? "#424242" : "#00000087" }}
          >
            <div className="flex items-center space-x-2">
              {renderCheckbox(agree1, () => {
                const next = !agree1;
                setAgree1(next);
                setAgreeAll(next && agree2);
              })}
              <span>[Required] Moodi Terms of Use</span>
            </div>
            <a href="/Moodi_terms.pdf" target="_blank" rel="noopener noreferrer">
              <Image
                src="/svgs/PDF_down.svg"
                alt="Download PDF"
                width={20}
                height={20}
              />
            </a>
          </div>

          <div
            className="flex items-center justify-between"
            style={{ color: agree2 ? "#424242" : "#00000087" }}
          >
            <div className="flex items-center space-x-2">
              {renderCheckbox(agree2, () => {
                const next = !agree2;
                setAgree2(next);
                setAgreeAll(next && agree1);
              })}
              <span>[Required] Moodi Terms of Service</span>
            </div>
            <a href="/Moodi_services.pdf" target="_blank" rel="noopener noreferrer">
              <Image
                src="/svgs/PDF_down.svg"
                alt="Download PDF"
                width={20}
                height={20}
              />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[36px] w-full flex justify-center">
        <NextButton onClick={handleNext} disabled={!isActive} />
      </div>
    </div>
  );
}
