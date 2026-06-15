import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  MonthlyCircularReportCard,
  RewardActivityList,
  RewardHistoryList,
  RewardLevelCard,
  RewardSummaryCard,
  RewardUseSection,
} from "../components/rewards/RewardComponents";
import { rewardData, rewardPolicy } from "../data/circularServicesMock";

const RewardsPage = () => {
  const navigate = useNavigate();
  return <main className="screen service-screen rewards-screen">
    <header className="service-page-header"><button onClick={() => navigate(-1)} title="뒤로가기" type="button"><ArrowLeft size={19} /></button><div><span>나의 순환 기록</span><h1>리워드</h1><p>옷을 오래 입고 순환한 만큼 포인트가 쌓여요.</p></div></header>
    <RewardSummaryCard {...rewardData} />
    <RewardLevelCard {...rewardData} />
    <MonthlyCircularReportCard report={rewardData.monthlyReport} />
    <RewardActivityList policies={rewardPolicy} />
    <RewardHistoryList histories={rewardData.histories} />
    <RewardUseSection uses={rewardData.availableUses} />
  </main>;
};

export default RewardsPage;
