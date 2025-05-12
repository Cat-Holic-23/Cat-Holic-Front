import { useRouter } from "next/router";
import { useState } from "react";
import { join } from "@/components/apis/auth";
import { setAccessToken, setRefreshToken } from "@/utils/storage";

//이걸 또 보내줘야야
const INTERESTS = ["그림그리기", "음악듣기", "잠자기", "피아노치기", "게임하기"];

export default function InterestForm() {
  const [selectedInterests, setSelectedInterests] = useState([]);
  const router = useRouter();

  const { userId, password, nickname, age, gender } = router.query;

  const toggleInterest = (interest) => {
    setSelectedInterests((prev) =>
      prev.includes(interest) ? prev.filter((item) => item !== interest) : [...prev, interest]
    );
  };

  const handleSubmit = async () => {
    if (selectedInterests.length === 0) {
      alert("관심사를 1개 이상 선택해주세요.");
      return;
    }

    const payload = {
      userId,
      password,
      nickname,
      age: Number(age),
      gender,
      interests: selectedInterests,
    };

    try {
      const res = await join(payload);
      setAccessToken(res.accessToken);
      setRefreshToken(res.refreshToken);
      router.push("/home");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto flex flex-col items-center gap-4">
      <div className="w-40 h-40 bg-gray-200 rounded-full border border-gray-500" />
      <p className="text-lg font-semibold mt-4">관심사를 골라보세요!</p>
      <div className="flex flex-wrap justify-center gap-2">
        {INTERESTS.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => toggleInterest(item)}
            className={`px-3 py-1 rounded-full flex items-center gap-1 ${
              selectedInterests.includes(item) ? "bg-black text-white" : "bg-gray-300 text-black"
            }`}
          >
            {item}
          </button>
        ))}
      </div>
      <button onClick={handleSubmit} className="mt-6 w-full py-3 rounded-full bg-gray-500 text-white font-semibold">
        START
      </button>
    </div>
  );
}
