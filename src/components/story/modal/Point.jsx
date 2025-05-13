import React from "react";
import { useRouter } from "next/router";

export default function Point_Modal({ open, onClose, point = 100 }) {
  const router = useRouter();

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/20"
      onClick={onClose}
    >
      <div
        className="w-[320px] h-[413px] rounded-[15px] bg-white flex flex-col items-center justify-center p-0"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src="/svgs/medal.svg"
          alt="medal"
          className="w-[190px] h-[190px] mb-4"
        />
        <div className="flex flex-row items-center justify-center mb-2">
          <span className="text-[#424242] font-pretendard font-bold text-[22px] leading-[140%] tracking-[-0.4px] uppercase">
            GOOD JOB!
          </span>
        </div>
        <div className="flex flex-row items-center justify-center mb-6">
          <span className="text-[#FFB932] font-pretendard font-bold text-[24px] leading-[140%] tracking-[-0.48px] mr-1">
            +{point}
          </span>
          <img src="/svgs/point.svg" alt="point" className="w-5 h-5" />
        </div>
        <div className="flex flex-row gap-3 mt-3">
          {/* Home 버튼 */}
          <button
            className="
              flex justify-center items-center w-[127px] h-[58px]
              rounded-[15px] bg-gradient-to-r from-[#FFB932] to-[#FD723FCC] shadow-[0_4px_0_0_#F2712C]
              font-pretendard font-semibold text-[18px] text-white
            "
            onClick={() => router.push("/home")}
          >
            Home
          </button>
          {/* Item 버튼 */}
          <button
            className="
              flex justify-center items-center w-[127px] h-[58px]
              rounded-[15px] bg-[#FFF7E7] shadow-[0_4px_0_0_#E37730]
              font-pretendard font-semibold text-[18px] text-[#FFB932]
            "
            onClick={() => {
              alert("Coming Soon");
              router.push("/home");
            }}
          >
            Item
          </button>
        </div>
      </div>
    </div>
  );
}
