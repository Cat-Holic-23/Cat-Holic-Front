"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Moodi from "@/components/moodi"; // 마스코트 캐릭터
import { getUserInfoFromToken } from "@/utils/storage";
import axios from "@/libs/axios";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [nickname, setNickname] = useState("Nickname");
  const [point, setPoint] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userInfo = getUserInfoFromToken();
        if (userInfo?.nickname) setNickname(userInfo.nickname);

        const res = await axios.get("/api/member");
        setPoint(res.data.data.point); // 포인트 받아오기
      } catch (e) {
        console.error("포인트 또는 닉네임 불러오기 실패", e);
      }
    };

    fetchData();
  }, []);

  const handleComingSoon = () => {
    console.log("추후개설");
  };

  return (
    <div className="flex flex-col items-center justify-between w-[430px] h-[932px] mx-auto bg-white">
      {/* 상단 영역 */}
      <div className="flex justify-between items-center w-full px-4 py-3">
        <div className="flex items-center gap-1 text-black font-semibold text-lg">
          <span>🅟</span>
          {point}
        </div>
      </div>

      {/* 말풍선 */}
      <div className="relative mt-4">
        <div className="bg-gray-300 text-black font-semibold px-4 py-2 rounded-lg">
          Hi {nickname}!
        </div>
        <div className="w-3 h-3 bg-gray-300 absolute left-1/2 -bottom-1 transform -translate-x-1/2 rotate-45"></div>
      </div>

      {/* 마스코트 */}
      <div className="w-60 h-60 mt-4 rounded-full border border-gray-500 bg-gray-100 flex items-center justify-center">
        <Moodi />
      </div>

      {/* 하단 메뉴바 */}
      <div className="flex justify-around items-center w-full bg-gray-300 py-3 mt-auto">
        <button className="flex flex-col items-center text-sm">
          <div className="w-6 h-6 border border-gray-500 rounded-full mb-1"></div>
          Home
        </button>
        <button
          onClick={() => router.push("/story")}
          className="flex flex-col items-center text-sm"
        >
          <div className="w-6 h-6 border border-gray-500 rounded-full mb-1"></div>
          Story
        </button>
        <button
          onClick={handleComingSoon}
          className="flex flex-col items-center text-sm"
        >
          <div className="w-6 h-6 border border-gray-500 rounded-full mb-1"></div>
          Game
        </button>
        <button
          onClick={handleComingSoon}
          className="flex flex-col items-center text-sm"
        >
          <div className="w-6 h-6 border border-gray-500 rounded-full mb-1"></div>
          Item
        </button>
      </div>
    </div>
  );
}
