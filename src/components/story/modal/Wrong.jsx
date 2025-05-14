import React from "react";
import ContinueButton from "@/components/buttons/ContinueButton";

export default function Wrong_Modal({
  open,
  onClose,
  onContinue,
  explanation,
}) {
  if (!open) return null;

  const getFontSize = (text) => {
    const length = text ? text.length : 0;
    if (length < 50) return "text-[16px]";
    if (length < 100) return "text-[14px]";
    if (length < 150) return "text-[12px]";
    return "text-[10px]";
  };

  const fontSizeClass = getFontSize(explanation);

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/20"
      onClick={onClose}
    >
      <div
        className="w-[390px] rounded-t-[15px] flex flex-col items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-[390px] max-h-[460px] min-h-[180px] rounded-t-[15px] border border-black bg-white flex flex-col justify-end items-center gap-[10px] flex-shrink-0 px-[51px] pb-[34px] overflow-y-auto">
          <div className="flex flex-row items-center justify-center mb-1 mt-6">
            <img src="/svgs/wrong.svg" alt="right" className="w-8 h-8 mr-2" />
            <span className="text-[#424242] font-pretendard font-bold text-[28px] leading-[140%] tracking-[-0.56px]">
              Try Again!
            </span>
          </div>
          <div
            className={`text-[#424242] font-pretendard font-medium text-center mb-4 ${fontSizeClass} break-words`}
            style={{ wordBreak: "break-word" }}
          >
            {explanation || "NN waits until the friend is done"}
          </div>
          <ContinueButton
            className="w-full max-w-[288px] mt-2"
            onClick={() => {
              if (onContinue) onContinue();
            }}
          />
        </div>
      </div>
    </div>
  );
}
