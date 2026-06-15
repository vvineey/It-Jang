type ScoreCriterion = {
  label: string;
  score: number;
  maxScore: number;
};

type CopyScoreCardProps = {
  criteria: ScoreCriterion[];
  overallMatchScore: number;
};

const CopyScoreCard = ({ criteria, overallMatchScore }: CopyScoreCardProps) => {
  const percentage = Math.round(overallMatchScore * 100);

  return (
    <section className="copy-score-card">
      <div className="copy-score-card__summary">
        <div>
          <span>내 옷장 재현도</span>
          <strong>{percentage}%</strong>
        </div>
        <div className="copy-score-ring" style={{ "--copy-score": `${percentage}%` } as CSSProperties}>
          <span>{percentage}</span>
        </div>
      </div>
      <p>원본 분위기는 유지하면서 가지고 있는 옷을 가장 먼저 활용했어요.</p>
      <div className="copy-score-list">
        {criteria.map((criterion) => (
          <div key={criterion.label}>
            <span>{criterion.label}</span>
            <div>
              <i style={{ width: `${(criterion.score / criterion.maxScore) * 100}%` }} />
            </div>
            <strong>
              {criterion.score}/{criterion.maxScore}
            </strong>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CopyScoreCard;
import type { CSSProperties } from "react";
