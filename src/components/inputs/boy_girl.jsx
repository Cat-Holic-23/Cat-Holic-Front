import React from "react";

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
              flex items-center justify-start gap-[8px] w-[160px] h-[58px] py-[9px] px-0 rounded-[15px]
              border border-[rgba(255,179,0,0.20)]
              shadow-[0px_4px_0px_0px_rgba(255,179,0,0.20)]
              cursor-pointer transition-colors duration-200 font-pretendard
              ${selected ? "bg-[#D1F4AA] font-bold" : "bg-white font-medium"}
              hover:bg-[#D1F4AA]
            `}
          >
            <span className="w-[32px] h-[32px] flex items-center justify-center ml-[13px] shrink-0">
              <img
                src={option.icon}
                alt={option.label}
                className="w-[32px] h-[32px] object-contain"
              />
            </span>
            <span className="text-[18px] tracking-[-0.4px] leading-[140%] text-center">
              {option.label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
