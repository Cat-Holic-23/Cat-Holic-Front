import React, { useState } from "react";

export default function Select({ options = [], onSelect }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="flex flex-col gap-4 w-full">
      {options.map((option, idx) => {
        const isSelected = selected === idx;
        return (
          <button
            key={option}
            className={`w-full h-[55px] rounded-[15px] font-fredoka text-[16px] font-medium leading-[140%] tracking-[-0.4px] px-6 flex items-center justify-center select-none transition-all break-words whitespace-pre-line
              ${
                isSelected
                  ? "bg-gradient-to-r from-[#A0D468] to-[#36BC92CC] text-white shadow-[0_4px_0_0_#6FAD2B]"
                  : "bg-[#F7FFEE] text-[#7CBC36] shadow-[0_4px_0_0_#A0D468] hover:bg-gradient-to-r hover:from-[#A0D468] hover:to-[#36BC92CC] hover:text-white hover:shadow-[0_4px_0_0_#6FAD2B]"
              }
            `}
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
