// 이게 로그인 버튼

import React from "react";
import { useRouter } from "next/router";
import { hasValidToken } from "@/utils/storage";

const FlyInButton = ({ disabled = false }) => {
  const router = useRouter();

  const handleClick = () => {
    if (hasValidToken()) {
      router.push("/home");
    } else {
      router.push("/login");
    }
  };

  return (
    <button
      className={`
        w-[314px] h-[55px] rounded-full border-none text-white text-[18px] font-medium
        transition-all duration-200 font-fredoka
        ${
          disabled
            ? "bg-[#BBB] shadow-[0px_4px_0px_0px_#7F7F7F] cursor-not-allowed opacity-60"
            : "bg-[#FFB932] shadow-[0px_4px_0px_0px_#F67E06] cursor-pointer hover:bg-gradient-to-r hover:from-[#FFB932] hover:to-[rgba(253,81,29,0.8)] hover:shadow-[0px_4px_0px_0px_#FF762D] active:scale-95"
        }
      `}
      onClick={handleClick}
      disabled={disabled}
    >
      FLY IN
    </button>
  );
};

export default FlyInButton;
