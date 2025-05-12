//회원가입 페이지  - 흥미 정보
import Interest from "@/components/SignUp/InterestForm";

export default function InterestPage() {
  return (
    <div className="min-h-screen items-center justify-center">
    <div className="bg-[#c4c4c4] px-4 py-1 rounded-full font-semibold">
        Interest
      </div>
      <Interest />
    </div>
  );
}
