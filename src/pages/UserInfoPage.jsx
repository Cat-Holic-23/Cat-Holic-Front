//회원가입 페이지  - 회원정보
import UserInfo from "@/components/SignUp/UserInfoForm";

export default function UserInfoPage() {
  return (
    <div className="min-h-screen items-center justify-center">
      <div className="bg-[#c4c4c4] px-4 py-1 rounded-full font-semibold">
        User Information
      </div>
      <UserInfo />
    </div>
  );
}
