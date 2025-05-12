//메인화면
import React from "react";
import { useRouter } from "next/router";
import { isLoggedIn } from "@/utils/storage";

export default function Home() {
  const router = useRouter();

  const handleFlyIn = () => {
    if (isLoggedIn()) {
      router.push("/home"); // 이미 로그인: 메인화면
    } else {
      router.push("/SignUpPage");
    }
  };

  const handleLogin = () => {
    router.push("/login");
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen min-h-[calc(var(--vh,1vh)*100)]">
      <h1 className="text-2xl font-bold">이제야 배경..</h1>
      <button
        className="px-6 py-3 bg-blue-500 rounded-lg mb-4 font-semibold hover:bg-blue-600 transition"
        onClick={handleFlyIn}
      >
        Fly in
      </button>
      <button
        className="px-6 py-3 bg-gray-700 rounded-lg font-semibold hover:bg-gray-800 transition"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
