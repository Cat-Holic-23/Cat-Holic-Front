import React from "react";
import { useRouter } from "next/router";

const FlyInButton = ({ disabled = false }) => {
  const router = useRouter();
  
    const handleClick = () => {
      if (isLoggedIn() && !hasValidToken()) {
        // 토큰은 있는데 만료된 경우 (로그인 필요)
        router.push("/login");
      } else {
        // 토큰 자체가 없는 경우 (회원가입 필요)
        router.push("/createaccount");
      }
    };

  return (
    <button
      className={`
        w-[314px] h-[55px] rounded-full border-none text-white text-[20px] font-bold 
        transition-all duration-200 font-pretendard
        ${
          disabled
            ? "bg-[#BBB] shadow-[0px_4px_0px_0px_#7F7F7F] cursor-not-allowed opacity-60"
            : "bg-[#FFB932] shadow-[0px_4px_0px_0px_#F67E06] cursor-pointer hover:bg-gradient-to-r hover:from-[#FFB932] hover:to-[rgba(253,81,29,0.8)] hover:shadow-[0px_4px_0px_0px_#FF762D] active:scale-95"
        }
      `}
      onClick={handleClick}
      disabled={disabled}
    >
      Fly in
    </button>
  );
};

export default FlyInButton;
