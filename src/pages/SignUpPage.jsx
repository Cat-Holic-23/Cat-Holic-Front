//회원가입 페이지
import CreateAccount from "@/components/Signup/SignUpForm";

export default function SignUpPage() {
  return (
    <div className="min-h-screen items-center justify-center">
      <div className="bg-[#c4c4c4] px-4 py-1 rounded-full font-semibold">
          Create your account
      </div>
      <CreateAccount />
    </div>
  );
}
