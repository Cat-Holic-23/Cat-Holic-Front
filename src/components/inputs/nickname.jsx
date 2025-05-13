import React from "react";

export default function Nickname({ value, onChange }) {
  return (
    <div
      className="
        flex items-center w-[342px] h-[58px] 
        pr-[183px] pl-4 ml-4 
        rounded-[15px] border border-white bg-white 
        shadow-[0px_4px_0px_0px_rgba(255,179,0,0.20)]
      "
    >
      <span className="flex items-center justify-center w-[32px] h-[32px] mr-4">
        <img
          src="/svgs/pencile.svg"
          alt="pencil"
          className="w-[32px] h-[32px] object-contain"
        />
      </span>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Nickname"
        className="
          ml-[13px] w-full border-none outline-none font-pretendard
          bg-transparent text-[22px] text-[#424242] font-semibold
        "
      />
    </div>
  );
}
