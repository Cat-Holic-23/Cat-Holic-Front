import React, { useState } from "react";

const ChatInput = ({ onSend, placeholder = "Etc." }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      className="
        flex items-center w-[342px] h-[58px] px-4 
        rounded-[15px] border border-white bg-white 
        shadow-[0px_4px_0px_0px_rgba(255,179,0,0.20)]
        relative
      "
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        className="
          flex-1 bg-transparent outline-none border-none 
          text-[16px] text-[#222] placeholder:text-[#aaa] font-pretendard
        "
      />
      <button
        onClick={handleSend}
        aria-label="Send"
        className="ml-[10px] p-0 bg-none border-none cursor-pointer flex items-center"
      >
        <img
          src="/svgs/send.svg"
          alt="Send"
          className="w-[28px] h-[28px] object-contain"
          style={{ filter: "drop-shadow(0px 0px 0px #FFB300)" }}
        />
      </button>
    </div>
  );
};

export default ChatInput;
