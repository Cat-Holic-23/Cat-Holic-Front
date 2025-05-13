import React from "react";

export default function Age({ value, onChange }) {
  return (
    <div className="ml-4 w-[342px] h-[58px] px-0 py-0 flex items-center rounded-[15px] border border-white bg-white shadow-[0px_4px_0px_0px_rgba(255,179,0,0.20)]">
      <span className="ml-4 w-[32px] h-[32px] flex items-center justify-center flex-shrink-0">
        <img
          src="/svgs/age.svg"
          alt="pencil"
          className="w-[32px] h-[32px] object-contain"
        />
      </span>
      <input
        type="number"
        min={0}
        max={100}
        value={value}
        onChange={onChange}
        placeholder="Age"
        className="
          ml-[10px] w-full border-none outline-none font-semibold font-pretendard text-[18px] text-[#424242] bg-transparent
          appearance-none
          [&::-webkit-outer-spin-button]:appearance-none
          [&::-webkit-inner-spin-button]:appearance-none
          [&::-webkit-inner-spin-button]:m-0
        "
      />
    </div>
  );
}
