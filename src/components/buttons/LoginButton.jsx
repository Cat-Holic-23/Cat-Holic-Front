import React from "react";
import { useRouter } from "next/router";
import { isLoggedIn, hasValidToken } from "@/utils/storage";

const LoginButton = ({ disabled = false }) => {
  const router = useRouter();

  const handleClick = () => {
    if (isLoggedIn() && !hasValidToken()) {
      // 토큰은 있는데 만료된 경우 (로그인 필요)
      router.push("/login");
    } else {
      // 토큰 자체가 없는 경우 (회원가입 필요)
      router.push("/signup");
    }
  };

  return (
    <button
      className={`
        w-[314px] h-[55px] rounded-full bg-[#FFB932]
        shadow-[0px_4px_0px_0px_#F67E06] border-none text-white
        text-[20px] font-bold transition-transform font-pretendard
        ${disabled ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}
      `}
      onClick={handleClick}
      disabled={disabled}
    >
      Login
    </button>
  );
};

export default LoginButton;
