import { ArrowRight, Gift, ShieldCheck, ThermometerSun } from "lucide-react";
import { Link } from "react-router-dom";
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

    <Link className="profile-service-entry" to="/my/manner-temperature">
      <ThermometerSun aria-hidden size={18} />
      <div><strong>내 매너온도</strong><span>거래와 나눔으로 쌓인 신뢰도를 확인해요.</span></div>
      <ArrowRight aria-hidden size={17} />
    </Link>
    <Link className="profile-service-entry" to="/my/rewards">
      <Gift aria-hidden size={18} />
      <div><strong>순환 리워드</strong><span>옷을 잘 순환한 기록과 포인트를 확인해요.</span></div>
      <ArrowRight aria-hidden size={17} />
    </Link>

    <button className="primary-button profile-submit" type="button">
      추천 시작하기
      <ArrowRight aria-hidden size={18} />
    </button>
  </main>
);

export default UserProfilePage;
