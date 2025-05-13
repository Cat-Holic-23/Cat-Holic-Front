import React from "react";

export default function Nickname({ value, onChange }) {
  return (
    <div className="ml-4 w-[342px] h-[58px] px-0 py-0 flex items-center rounded-[15px] border border-white bg-white shadow-[0px_4px_0px_0px_rgba(255,179,0,0.20)]">
      <span className="ml-4 w-[32px] h-[32px] flex items-center justify-center flex-shrink-0">
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
          ml-[10px] w-full border-none outline-none font-pretendard
          bg-transparent text-[18px] text-[#424242] font-semibold
        "
      />
    </div>
  );
}
