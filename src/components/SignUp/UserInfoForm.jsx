"use client";

import { join } from "@/components/apis/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

export default function UserInfoForm() {
  const router = useRouter();
  const { userId, password } = router.query;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedGender, setSelectedGender] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    if (!selectedGender) {
      setErrorMessage("성별을 선택해주세요.");
      return;
    }

    try {
      const existing = JSON.parse(localStorage.getItem("userInfo") || "{}");
      localStorage.setItem(
  "userInfo",
  JSON.stringify({
    ...existing,
    nickname: data.nickname,
    age: data.age,
    gender: selectedGender,
  })
);

      router.push("/InterestPage");
    } catch (err) {
      setErrorMessage(err.message || "회원가입에 실패했습니다.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col items-center gap-6 px-6 py-10"
    >
      <div className="px-4 py-1 rounded-full bg-gray-300 text-black font-semibold">
        User Information
      </div>


      {/* 닉네임 입력 */}
      <div className="flex items-center w-full max-w-xs border rounded-xl px-4 py-3">
        <input
          {...register("nickname", { required: true })}
          placeholder="nickname"
          className="w-full outline-none"
        />
      </div>

      {/* 나이 입력 */}
      <div className="flex items-center w-full max-w-xs border rounded-xl px-4 py-3">
        <input
          {...register("age", { required: true })}
          type="number"
          placeholder="Age"
          className="w-full outline-none"
        />
      </div>

      {/* 성별 선택 */}
      <div className="flex gap-4">
        {["Boy", "Girl"].map((gender) => (
          <button
            key={gender}
            type="button"
            onClick={() => setSelectedGender(gender)}
            className={`flex items-center px-6 py-3 border rounded-xl ${
              selectedGender === gender
                ? "bg-black text-white"
                : "bg-white text-black"
            }`}
          >
            {gender}
          </button>
        ))}
      </div>

      {/* 에러 메시지 */}
      {errorMessage && (
        <div className="text-red-500 text-sm text-center">{errorMessage}</div>
      )}

      {/* 제출 버튼 */}
      <button
        type="submit"
        className="mt-4 px-20 py-3 rounded-full bg-gray-500 text-white font-semibold"
      >
        NEXT
      </button>
    </form>
  );
}
