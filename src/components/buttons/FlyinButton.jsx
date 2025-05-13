import React from "react";
import { useRouter } from "next/router";

const FlyInButton = ({ disabled = false }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/SignUpPage");
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
      Fly in
    </button>
  );
};

export default FlyInButton;
