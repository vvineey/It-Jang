import { AlertTriangle, CalendarCheck, CheckCircle2, MessageCircle, ShieldCheck, Star, UsersRound } from "lucide-react";

export const TemperatureProgressBar = ({ temperature }: { temperature: number }) => (
  <div className="temperature-progress" aria-label={`매너온도 ${temperature}도`}>
    <div><i style={{ width: `${Math.min(100, (temperature / 50) * 100)}%` }} /><b style={{ left: `${Math.min(96, (temperature / 50) * 100)}%` }} /></div>
    <span>0°C</span><strong>차분하게 쌓이는 거래 신뢰도</strong><span>50°C</span>
  </div>
);

export const MannerTemperatureCard = ({
  nickname,
  profileImage,
  temperature,
}: {
  nickname: string;
  profileImage: string;
  temperature: number;
}) => (
  <section className="manner-main-card service-card">
    <div className="manner-profile-row">
      <img alt={`${nickname} 프로필`} src={profileImage} />
      <div><span>믿고 주고받는 옷장</span><strong>{nickname}</strong><small>따뜻한 옷장 온도예요.</small></div>
      <b>{temperature.toFixed(1)}°C</b>
    </div>
    <span className="manner-level-badge"><ShieldCheck size={14} />따뜻한 옷장</span>
    <TemperatureProgressBar temperature={temperature} />
  </section>
);

export const TrustMetricGrid = ({
  completedTrades,
  responseRate,
  promiseRate,
  reviews,
  reports,
}: {
  completedTrades: number;
  responseRate: number;
  promiseRate: number;
  reviews: number;
  reports: number;
}) => {
  const metrics = [
    [CheckCircle2, "거래 완료", `${completedTrades}회`],
    [MessageCircle, "응답 빠름", `${responseRate}%`],
    [CalendarCheck, "약속 지킴", `${promiseRate}%`],
    [Star, "받은 후기", `${reviews}개`],
    [AlertTriangle, "확인 내역", `${reports}건`],
  ] as const;
  return <section className="trust-metric-grid">{metrics.map(([Icon, label, value]) => <article className="service-card" key={label}><Icon size={18} /><strong>{value}</strong><span>{label}</span></article>)}</section>;
};

export const ReviewList = ({ reviews }: { reviews: Array<{ id: number; text: string; date: string; type: string }> }) => (
  <section className="service-list-section">
    <header><div><span>거래 후기</span><h2>받은 후기</h2></div><strong>{reviews.length}개</strong></header>
    {reviews.length ? <div className="review-list">{reviews.map((review) => <article className="service-card" key={review.id}><Star size={17} /><div><strong>{review.text}</strong><span>{review.type} · {review.date}</span></div></article>)}</div> : <div className="service-empty service-card"><p>아직 받은 후기가 없어요.</p><span>첫 거래를 완료하면 매너온도가 쌓여요.</span></div>}
  </section>
);

export const MannerGuideCard = ({ reports }: { reports: number }) => (
  <section className={`manner-guide service-card${reports ? " has-warning" : ""}`}>
    {reports ? <AlertTriangle size={19} /> : <UsersRound size={19} />}
    <div><strong>{reports ? "최근 거래에서 확인이 필요한 항목이 있어요." : "매너온도는 천천히 쌓여요."}</strong><p>거래 완료, 후기, 응답 속도, 약속 이행 여부를 바탕으로 변동돼요.</p></div>
  </section>
);

export const MannerActionButtons = ({ isSelf }: { isSelf: boolean }) => (
  <section className="manner-actions">
    {isSelf ? <>
      <button type="button">받은 후기 보기</button><button type="button">거래 내역 보기</button><button type="button">신고 내역 확인하기</button>
    </> : <>
      <button className="is-primary" type="button">거래 요청하기</button><button type="button">채팅하기</button>
    </>}
  </section>
);
