import React from "react";

const COLOR = "#FFB932"; // 강조 색상 (선택 시 border에 사용)

export default function BoyGirl({ value, onChange }) {
  const options = [
    {
      key: "boy",
      label: "Boy",
      icon: "/svgs/boy.svg",
    },
    {
      key: "girl",
      label: "Girl",
      icon: "/svgs/girl.svg",
    },
  ];

  return (
    <div className="flex gap-2">
      {options.map((option) => {
        const selected = value === option.key;
        return (
          <div
            key={option.key}
            onClick={() => onChange(option.key)}
            className={`
              flex items-center justify-start gap-[14px] w-[162px] h-[58px] py-[9px] px-0 rounded-[15px]
              bg-white shadow-[0px_4px_0px_0px_rgba(255,179,0,0.20)]
              cursor-pointer transition-colors duration-200 font-pretendard
              ${selected ? "border-[2px]" : "border"}
              ${
                selected
                  ? "border-[#FFB932] font-bold"
                  : "border-white font-medium"
              }
              text-[#424242] font-[Pretendard] 
            `}
          >
            <span className="w-[32px] h-[32px] flex items-center justify-center ml-[15px] shrink-0">
              <img
                src={option.icon}
                alt={option.label}
                className="w-[32px] h-[32px] object-contain"
              />
            </span>
            <span className="text-[22px] tracking-[-0.4px] leading-[140%] text-center">
              {option.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
