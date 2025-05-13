import React, { useState } from "react";

const OPTIONS = [
  "예시 1",
  "조금 긴 에시 2",
  "하 이거 언제 다하냐냐",
  "Take the swing",
];

export default function Select({ options = OPTIONS, onSelect }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col gap-4">
      {options.map((option, idx) => {
        const isSelected = selected === idx;
        return (
          <button
            key={option}
            className={`w-[314px] h-[55px] rounded-[15px] font-pretendard text-[16px] font-semibold leading-[140%] tracking-[-0.4px] px-20 flex items-center justify-center select-none transition-all
              ${isSelected
                ? "bg-gradient-to-r from-[#A0D468] to-[#36BC92CC] text-white shadow-[0_4px_0_0_#6FAD2B]"
                : "bg-[#F7FFEE] text-[#7CBC36] shadow-[0_4px_0_0_#A0D468] hover:bg-gradient-to-r hover:from-[#A0D468] hover:to-[#36BC92CC] hover:text-white hover:shadow-[0_4px_0_0_#6FAD2B]"
              }`}
            onClick={() => {
              setSelected(idx);
              if (onSelect) onSelect(option, idx);
            }}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
