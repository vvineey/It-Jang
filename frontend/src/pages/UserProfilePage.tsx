import { ArrowRight, ShieldCheck } from "lucide-react";
import BasicInfoSection from "../components/profile/BasicInfoSection";
import OptionalInfoSection from "../components/profile/OptionalInfoSection";
import PageHeader from "../components/common/PageHeader";

const UserProfilePage = () => (
  <main className="screen profile-screen">
    <PageHeader
      eyebrow="profile"
      title="내 옷장에 맞는 정보를 알려줘요"
      description="기본 정보와 취향 정보를 나눠 입력해서 추천 정확도를 높입니다."
    />

    <div className="privacy-callout">
      <ShieldCheck aria-hidden size={18} />
      <span>체형 정보는 추천과 AI 미리보기 목적에만 사용하도록 설계합니다.</span>
    </div>

    <BasicInfoSection />
    <OptionalInfoSection />

    <button className="primary-button profile-submit" type="button">
      저장하고 옷장 만들기
      <ArrowRight aria-hidden size={18} />
    </button>
  </main>
);

export default UserProfilePage;
