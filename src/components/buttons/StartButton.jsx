import React from "react";

const StartButton = ({ onClick, disabled, className = "" }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={`
        w-[314px] h-[55px] rounded-full border-none text-white text-[20px] font-bold 
        transition-all duration-200 font-pretendard
        ${disabled ? 
          "bg-[#DCDCDC] shadow-[0px_4px_0px_0px_#9C9C9C] cursor-not-allowed opacity-60"
          :
          "bg-[#FFB932] shadow-[0px_4px_0px_0px_#F67E06] cursor-pointer hover:bg-gradient-to-r hover:from-[#FFB932] hover:to-[rgba(253,81,29,0.8)] hover:shadow-[0px_4px_0px_0px_#FF762D] active:scale-95"
        }
        ${className}
      `}
    >
      START
    </button>
  );
};

export default StartButton;
