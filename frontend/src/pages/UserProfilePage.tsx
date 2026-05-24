import { ArrowRight, ShieldCheck } from "lucide-react";
import BasicInfoSection from "../components/profile/BasicInfoSection";
import OptionalInfoSection from "../components/profile/OptionalInfoSection";
import PageHeader from "../components/common/PageHeader";

const UserProfilePage = () => (
  <main className="screen profile-screen">
    <PageHeader
      title="나에게 맞는 코디를 준비할게요"
      description="추천에 필요한 정보만 간단히 알려주세요."
    />

    <div className="privacy-callout">
      <ShieldCheck aria-hidden size={18} />
      <span>체형 정보는 코디 추천과 AI 미리보기에만 사용돼요.</span>
    </div>

    <BasicInfoSection />
    <OptionalInfoSection />

    <button className="primary-button profile-submit" type="button">
      추천 시작하기
      <ArrowRight aria-hidden size={18} />
    </button>
  </main>
);

export default UserProfilePage;
