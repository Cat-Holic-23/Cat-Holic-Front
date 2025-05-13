import React from "react";
import ContinueButton from "@/components/buttons/ContinueButton";

export default function Wrong_Modal({ open, onClose, onContinue }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/20"
      onClick={onClose}
    >
      <div
        className="w-[390px] rounded-t-[15px] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[390px] h-[196px] rounded-t-[15px] border border-black bg-white flex flex-col justify-end items-center gap-[10px] flex-shrink-0 px-[51px] pb-[34px]">
          <div className="flex flex-row items-center justify-center mb-1 mt-6">
            <img src="/svgs/wrong.svg" alt="wrong" className="w-8 h-8 mr-2" />
            <span className="text-[#424242] font-pretendard font-bold text-[28px] leading-[140%] tracking-[-0.56px]">
              Try Again!
            </span>
          </div>
          <div className="text-[#424242] font-pretendard font-medium text-[16px] text-center mb-4">
            NN waits until the friend is done
          </div>
          <ContinueButton
            className="w-full max-w-[288px] mt-2"
            onClick={() => {
              alert("Coming Soon");
              if (onContinue) onContinue();
            }}
          />
        </div>
      </div>
    </div>
  );
}
