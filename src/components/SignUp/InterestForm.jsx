import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { join } from "@/components/apis/auth";

const INTERESTS = [
  "그림그리기",
  "음악듣기",
  "잠자기",
  "피아노치기",
  "게임하기",
];

export default function InterestForm() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const [userInfo, setUserInfo] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const stored = localStorage.getItem("userInfo");
    if (stored) {
      setUserInfo(JSON.parse(stored));
    }
  }, []);

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest)
        ? prev.filter((item) => item !== interest)
        : [...prev, interest]
    );
  };

  const handleSubmit = async () => {
    if (selectedInterests.length === 0) {
      alert("관심사를 1개 이상 선택해주세요.");
      return;
    }

    if (!userInfo) return;

    const payload = {
      ...userInfo,
      interests: selectedInterests,
    };

    try {
      await join(payload);
      localStorage.removeItem("userInfo");
      router.push("/main"); // 회원가입 후 이동할 페이지
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto flex flex-col items-center gap-4">
      <div className="bg-[#c4c4c4] px-4 py-1 rounded-full font-semibold">
        Interest
      </div>

      <div className="w-40 h-40 bg-gray-200 rounded-full border border-gray-500" />

      <p className="text-lg font-semibold mt-4">관심사를 골라보세요!</p>

      <div className="flex flex-wrap justify-center gap-2">
        {INTERESTS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => toggleInterest(item)}
            className={`px-3 py-1 rounded-full flex items-center gap-1 ${
              selectedInterests.includes(item)
                ? "bg-black text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="mt-6 w-full py-3 rounded-full bg-gray-500 text-white font-semibold"
      >
        START
      </button>
    </div>
  );
}
