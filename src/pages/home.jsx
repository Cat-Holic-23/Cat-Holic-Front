"use client";

import { useEffect, useState } from "react";
import Moodi from "@/components/moodi"; // 마스코트 캐릭터
import { getUserInfoFromToken } from "@/utils/storage";
import axios from "@/libs/axios";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const [nickname, setNickname] = useState("Nickname");
  const [point, setPoint] = useState(0);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const userInfo = getUserInfoFromToken();
  //       if (userInfo?.nickname) setNickname(userInfo.nickname);

  //       const res = await axios.get("/api/member");
  //       setPoint(res.data.data.point); // 포인트 받아오기
  //     } catch (e) {
  //       console.error("포인트 또는 닉네임 불러오기 실패", e);
  //     }
  //   };

  //   fetchData();
  // }, []);

  const handleComingSoon = () => {
    console.log("추후개설");
  };

  return (
    <div className>
      {/* 상단 영역 */}
      <div className>
        <div className>
          <span>🅟</span>
          {point}
        </div>
      </div>

      {/* 말풍선 */}
      <div className>
        <div className> Hi {nickname}!</div>
        <div className></div>
      </div>

      {/* 무디 */}
      <div className>
        <Moodi />
      </div>
    </div>
  );
}
