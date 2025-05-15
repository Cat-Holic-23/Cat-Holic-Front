import React, { useState } from "react";
import InputBox from "@/components/inputs/input";
import Image from "next/image";

const InputPassword = ({ value, onChange, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative w-[342px]">
      <InputBox
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="pr-10" 
      />
      <button
        type="button"
        onClick={() => setShowPassword(!showPassword)}
        className="absolute top-1/2 right-4 -translate-y-1/2"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        <Image
          src={showPassword ? "/svgs/eye_off.svg" : "/svgs/eye_on.svg"}
          alt={showPassword ? "Eye off icon" : "Eye on icon"}
          width={24}
          height={24}
        />
      </button>
    </div>
  );
};

export default InputPassword;
