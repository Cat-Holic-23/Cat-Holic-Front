import React from "react";

const InputBox = ({ value, onChange, placeholder, type = "text" }) => {
  return (
    <div
      className="
        flex items-center w-[342px] h-[58px] 
        pr-[183px] pl-4 
        rounded-[15px] border border-white bg-white 
        shadow-[0px_4px_0px_0px_rgba(255,179,0,0.20)]
      "
    >
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="
          w-full border-none outline-none bg-transparent 
          text-[14px] text-[#222] placeholder:text-[#aaa] font-pretendard
        "
      />
    </div>
  );
};

export default InputBox;
