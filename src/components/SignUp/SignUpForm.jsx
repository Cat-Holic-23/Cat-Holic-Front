import { join } from "@/components/apis/auth";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SignupForm() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [checkedItems, setCheckedItems] = useState([
    false,
    false,
    false,
    false,
  ]);
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const terms = [
    "[필수] Moodi 이용약관",
    "[필수] 개인정보 처리방침",
    "[선택] 광고 수신 동의",
    "[선택] 위치 정보 이용약관",
  ];

  const isAllChecked = checkedItems.every(Boolean);
  const isRequiredChecked = checkedItems[0] && checkedItems[1];

  const handleCheckboxChange = (index, checked) => {
    const updated = [...checkedItems];
    updated[index] = checked;
    setCheckedItems(updated);
  };

  const handleAllToggle = () => {
    const newValue = !isAllChecked;
    setCheckedItems(Array(4).fill(newValue));
  };

  const onSubmit = async (data) => {
    try {
      setErrorMessage("");
      localStorage.setItem("userInfo", JSON.stringify({ userId, password }));
      router.push({
      pathname: "/UserInfoPage",
      query: {
              userId: data.userId,
              password: data.password,
      },
});
    } catch (err) {
      setErrorMessage(err.message || "회원가입에 실패했습니다.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 flex flex-col gap-4 max-w-sm mx-auto"
    >
      <div className="flex justify-center items-center relative gap-2.5 px-[15px] py-[3px] rounded-[15px] bg-[#c4c4c4]">
        <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-black">
          Create your account
        </p>
      </div>
      <input
        {...register("userId", { required: true })}
        placeholder="Enter your user ID"
        className="border rounded p-2"
      />
      <br />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Enter your password"
        className="border rounded p-2"
      />

      {/* 약관 전체 동의 */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleAllToggle}
      >
        <input type="checkbox" checked={isAllChecked} readOnly />
        <span>약관 전체 동의</span>
      </div>

      {/* 개별 약관 */}
      {terms.slice(0, open ? 4 : 2).map((text, i) => (
        <div key={i} className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={checkedItems[i]}
            onChange={(e) => handleCheckboxChange(i, e.target.checked)}
          />
          <span className={checkedItems[i] ? "font-bold" : "text-gray-400"}>
            {text}
          </span>
        </div>
      ))}

      {/* 에러 메시지 */}
      {errorMessage && (
        <div className="text-red-500 text-sm text-center">{errorMessage}</div>
      )}

      {/* 제출 */}
      <button
        type="submit"
        disabled={!isRequiredChecked}
        className={`mt-4 p-2 rounded text-white ${
          isRequiredChecked ? "bg-black" : "bg-gray-400"
        }`}
      >
        NEXT
      </button>
    </form>
  );
}
