// 노란 말푸선선
import React from "react";

export default function Speech({ children }) {
  return (
    <div className="relative w-[320px] bg-white rounded-[15px] flex justify-center items-center px-0 py-4 text-center text-[20px] font-semibold text-[#424242] leading-[140%] tracking-[-0.4px] mx-auto mb-8 shadow-[0px_4px_0px_rgba(255,185,50,0.45)] font-pretendard">
      <span className="w-full break-words px-6 block">{children}</span>

      {/* 꼬리 (테두리) */}
      <div className="absolute left-1/2 -bottom-[18px] -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[18px] border-t-white z-[1] drop-shadow-[0px_4px_0px_rgba(255,185,50,0.45)]" />

      {/* 꼬리 (흰색 내부) */}
      <div className="absolute left-1/2 -bottom-[16px] -translate-x-1/2 w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-t-[16px] border-t-white z-[2]" />
    </div>
  );
}
