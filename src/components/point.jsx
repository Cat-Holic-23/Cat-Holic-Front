import React from "react";

export default function Point({ value }) {
  return (
    <span className="inline-flex items-center gap-[5px]">
      <img
        src="/svgs/point.svg"
        alt="포인트"
        className="w-5 h-5 block aspect-square"
      />
      <span className="text-black text-[20px] font-semibold leading-[140%] tracking-[-0.5px] relative -top-[1.5px] font-pretendard">
        {value}
      </span>
    </span>
  );
}
