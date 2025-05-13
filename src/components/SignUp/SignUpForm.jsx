import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useState } from "react";
import NextButton from "@/components/buttons/NextButton";

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

  const terms = ["[필수] Moodi 이용약관", "[필수] 개인정보 처리방침"];

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
    router.push({
      pathname: "/UserInfoPage",
      query: {
        userId: data.userId,
        password: data.password,
      },
    });
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="p-6 flex flex-col gap-4 max-w-sm mx-auto"
    >
      <input
        {...register("userId", { required: true })}
        placeholder="Enter your user ID"
        className="border rounded p-2"
      />
      <input
        {...register("password", { required: true })}
        type="password"
        placeholder="Enter your password"
        className="border rounded p-2"
      />

      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={handleAllToggle}
      >
        <input type="checkbox" checked={isAllChecked} readOnly />
        <span>약관 전체 동의</span>
      </div>

      {terms.map((text, i) => (
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

      <NextButton />
    </form>
  );
}
