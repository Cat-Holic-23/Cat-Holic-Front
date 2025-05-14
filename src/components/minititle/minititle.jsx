import React from "react";

const MiniTitle = ({ children, style }) => {
  return (
    <span
      className="
        inline-flex items-center justify-center gap-[10px] 
        px-[15px] py-[3px] rounded-[15px] 
        bg-[#FFCE54] text-white 
        font-pretendard text-[16px] font-semibold 
        leading-[140%] tracking-[-0.32px]
      "
      style={style}
    >
      {children}
    </span>
  );
};

export default MiniTitle;
