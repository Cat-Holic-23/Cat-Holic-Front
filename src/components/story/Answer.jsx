//사용자 채팅
import { useState } from "react";

export default function ChatInput({ onSubmit }) {
  const [input, setInput] = useState("");

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed) return;

    onSubmit(trimmed);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <div className="flex items-center border rounded-full px-4 py-2 shadow-sm">
      <input
        type="text"
        className="flex-1 outline-none bg-transparent text-sm"
        placeholder="Etc."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSend}
        className="ml-2 text-gray-500 hover:text-black"
      >
      submit
      </button>
    </div>
  );
}
