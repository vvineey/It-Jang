import { ArrowLeft, Bell, Send } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FleaMarketApplyForm,
  FleaMarketClosetSelector,
  FleaMarketGuideCard,
  FleaMarketHero,
  FleaMarketStatusCard,
  FleaMarketSubmitResult,
  ParticipationTypeSelector,
} from "../components/fleaMarket/FleaMarketComponents";
import { fleaMarketEvent, fleaParticipationTypes, visibilityClosetItems } from "../data/circularServicesMock";

const FleaMarketPage = () => {
  const navigate = useNavigate();
  const [type, setType] = useState("seller");
  const [selectedIds, setSelectedIds] = useState<number[]>([1, 3]);
  const [submitted, setSubmitted] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const publicItems = visibilityClosetItems.filter((item) => item.visibility !== "PRIVATE");

  return <main className="screen service-screen flea-screen">
    <button className="floating-back-button" onClick={() => navigate(-1)} title="뒤로가기" type="button"><ArrowLeft size={19} /></button>
    <FleaMarketHero imageUrl={fleaMarketEvent.imageUrl} />
    <FleaMarketStatusCard event={{ ...fleaMarketEvent, status: isClosed ? "모집 마감" : fleaMarketEvent.status }} />
    {submitted ? <FleaMarketSubmitResult onReset={() => setSubmitted(false)} /> : <>
      <ParticipationTypeSelector onSelect={setType} selected={type} types={fleaParticipationTypes} />
      <FleaMarketApplyForm type={type} />
      {type !== "visitor" ? <FleaMarketClosetSelector items={publicItems} onToggle={(id) => setSelectedIds((current) => current.includes(id) ? current.filter((target) => target !== id) : [...current, id])} selectedIds={selectedIds} /> : null}
      <FleaMarketGuideCard />
      <button className="service-primary-button" disabled={isClosed} onClick={() => setSubmitted(true)} type="button">{isClosed ? <><Bell size={18} />다음 행사 알림받기</> : <><Send size={18} />참가 신청하기</>}</button>
      {isClosed ? <p className="service-error">이번 모집은 마감됐어요.</p> : null}
    </>}
    <button className="service-demo-toggle" onClick={() => setIsClosed((current) => !current)} type="button">{isClosed ? "모집 중 상태 보기" : "모집 마감 상태 보기"}</button>
  </main>;
};

export default FleaMarketPage;
