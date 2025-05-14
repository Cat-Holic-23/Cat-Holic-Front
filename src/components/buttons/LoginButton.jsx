import React from "react";
import { useRouter } from "next/router";
import { login, getUserInfo } from "@/components/apis/auth";
import { setAccessToken, isLoggedIn } from "@/utils/storage";

const LoginButton = ({ userId, userPassword, disabled = false }) => {
  const router = useRouter();

  const handleLogin = async () => {
    try {
      // 1. 로그인 시도
      await login({ username: userId, password: userPassword });

      // 2. 로그인 성공 후 회원정보 조회 시도
      try {
        await getUserInfo();
        router.push("/home");
      } catch (err) {
        alert("로그인 실패");
        router.push("/createaccount");
      }
    } catch (err) {
      alert("로그인 실패");
      router.push("/createaccount");
    }
  };

  return (
    <button
      className={`
        w-[314px] h-[55px] rounded-full border-none text-white text-[18px] font-medium
        transition-all duration-200 font-fredoka
        ${
          disabled
            ? "bg-[#DCDCDC] shadow-[0px_4px_0px_0px_#9C9C9C] cursor-not-allowed opacity-60"
            : "bg-[#FFB932] shadow-[0px_4px_0px_0px_#F67E06] cursor-pointer hover:bg-gradient-to-r hover:from-[#FFB932] hover:to-[rgba(253,81,29,0.8)] hover:shadow-[0px_4px_0px_0px_#FF762D] active:scale-95"
        }
      `}
      onClick={handleLogin}
      disabled={disabled}
    >
      LOGIN
    </button>
  );
};

export default LoginButton;
