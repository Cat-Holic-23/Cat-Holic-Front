import React, { useState } from "react";
import MiniTitle from "@/components/minititle/minititle";
import InputId from "@/components/inputs/input";
import LoginButton from "@/components/buttons/LoginButton";
import { useRouter } from "next/router";
import InputPassword from "@/components/inputs/password";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const isActive = userId.trim() && userPassword.trim() && !loading;

  return (
    <div className="min-h-screen flex flex-col items-center px-3 pt-10 pb-[100px] w-full">
      <div className="w-full max-w-md flex flex-col items-center">
        <MiniTitle>Login</MiniTitle>

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

        {/* 로그인 버튼 */}
        <div className="absolute bottom-[36px] w-full flex justify-center">
          <LoginButton
            userId={userId}
            userPassword={userPassword}
            disabled={!isActive}
          />
        </div>
      </div>
    </div>
  );
}
