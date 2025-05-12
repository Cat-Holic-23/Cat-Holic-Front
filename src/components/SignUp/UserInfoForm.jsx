"use client";

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

    router.push({
      pathname: "/InterestPage",
      query: {
        userId,
        password,
        nickname: data.nickname,
        age: data.age,
        gender: selectedGender,
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-6 px-6 py-10">
      <div className="flex items-center w-full max-w-xs border rounded-xl px-4 py-3">
        <input {...register("nickname", { required: true })} placeholder="nickname" className="w-full outline-none" />
      </div>

      <div className="flex items-center w-full max-w-xs border rounded-xl px-4 py-3">
        <input {...register("age", { required: true })} type="number" placeholder="Age" className="w-full outline-none" />
      </div>

      <div className="flex gap-4">
        {["Boy", "Girl"].map((gender) => (
          <button
            key={gender}
            type="button"
            onClick={() => setSelectedGender(gender)}
            className={`flex items-center px-6 py-3 border rounded-xl ${
              selectedGender === gender ? "bg-black text-white" : "bg-white text-black"
            }`}
          >
            {gender}
          </button>
        ))}
      </div>

      {errorMessage && <div className="text-red-500 text-sm text-center">{errorMessage}</div>}

      <button type="submit" className="mt-4 px-20 py-3 rounded-full bg-gray-500 text-white font-semibold">
        NEXT
      </button>
    </form>
  );
}
