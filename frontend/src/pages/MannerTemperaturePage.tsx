import { ArrowLeft } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  MannerActionButtons,
  MannerGuideCard,
  MannerTemperatureCard,
  ReviewList,
  TrustMetricGrid,
} from "../components/manner/MannerComponents";
import { mannerProfile } from "../data/circularServicesMock";

const MannerTemperaturePage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isSelf = location.pathname.startsWith("/my/");

  return (
    <main className="screen service-screen manner-screen">
      <header className="service-page-header">
        <button onClick={() => navigate(-1)} title="뒤로가기" type="button"><ArrowLeft size={19} /></button>
        <div><span>의류 순환 신뢰도</span><h1>매너온도</h1><p>거래와 나눔 활동을 바탕으로 신뢰도를 보여줘요.</p></div>
      </header>
      <MannerTemperatureCard {...mannerProfile} />
      <TrustMetricGrid {...mannerProfile} reviews={mannerProfile.reviews.length} />
      <ReviewList reviews={mannerProfile.reviews} />
      <MannerGuideCard reports={mannerProfile.reports} />
      <MannerActionButtons isSelf={isSelf} />
    </main>
  );
};

export default MannerTemperaturePage;
