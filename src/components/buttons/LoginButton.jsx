import React from "react";
import { useRouter } from "next/router";

const LoginButton = ({ disabled = false }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/createaccount");
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
