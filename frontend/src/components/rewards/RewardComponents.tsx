import { Award, ChevronRight, Leaf, Recycle, Sparkles, Sprout } from "lucide-react";

export const RewardSummaryCard = ({ currentPoints, monthlyEarned, availablePoints, expiringPoints }: { currentPoints: number; monthlyEarned: number; availablePoints: number; expiringPoints: number }) => (
  <section className="reward-summary service-card"><span>현재 보유 포인트</span><strong>{currentPoints.toLocaleString()}P</strong><p>이번 달 {monthlyEarned.toLocaleString()}P를 순환 활동으로 쌓았어요.</p><dl><div><dt>사용 가능</dt><dd>{availablePoints.toLocaleString()}P</dd></div><div><dt>소멸 예정</dt><dd>{expiringPoints.toLocaleString()}P</dd></div></dl></section>
);

export const RewardLevelCard = ({ level, nextLevel, currentPoints, nextLevelPoint }: { level: string; nextLevel: string; currentPoints: number; nextLevelPoint: number }) => {
  const remain = nextLevelPoint - currentPoints;
  return <section className="reward-level service-card"><div><Sprout size={25} /><span>현재 등급</span><strong>{level}</strong></div><p>다음 등급 <b>{nextLevel}</b>까지 {remain.toLocaleString()}P 남았어요.</p><div><i style={{ width: `${(currentPoints / nextLevelPoint) * 100}%` }} /></div><small>씨앗 · 새싹 · 나무 · 숲</small></section>;
};

export const RewardActivityList = ({ policies }: { policies: Array<{ activity: string; points: number }> }) => (
  <section className="service-list-section"><header><div><span>순환 활동</span><h2>이렇게 포인트가 쌓여요</h2></div><Leaf size={19} /></header><div className="reward-activity-list">{policies.map((policy) => <article className="service-card" key={policy.activity}><Recycle size={17} /><strong>{policy.activity}</strong><span>+{policy.points}P</span></article>)}</div></section>
);

export const RewardHistoryList = ({ histories }: { histories: Array<{ id: number; date: string; activity: string; points: number; status: string }> }) => (
  <section className="service-list-section"><header><div><span>최근 기록</span><h2>리워드 내역</h2></div><strong>{histories.length}건</strong></header><div className="reward-history-list">{histories.map((history) => <article className="service-card" key={history.id}><span>{history.date}</span><div><strong>{history.activity}</strong><small>{history.status}</small></div><b className={history.points > 0 ? "is-earned" : ""}>{history.points > 0 ? "+" : ""}{history.points}P</b></article>)}</div></section>
);

export const RewardUseSection = ({ uses }: { uses: string[] }) => (
  <section className="service-list-section"><header><div><span>포인트 사용</span><h2>순환 활동에 다시 써요</h2></div><Sparkles size={19} /></header><div className="reward-use-grid">{uses.map((use) => <button className="service-card" key={use} type="button"><Award size={18} /><span>{use}</span><ChevronRight size={15} /></button>)}</div></section>
);

export const MonthlyCircularReportCard = ({ report }: { report: string[][] }) => (
  <section className="monthly-report service-card"><div><Leaf size={23} /><span>이번 달에도 옷장을 잘 순환하고 있어요.</span></div><dl>{report.map(([label, value]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl></section>
);
