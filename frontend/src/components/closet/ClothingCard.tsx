import type { ClothingItem } from "../../types";

type ClothingCardProps = {
  item: ClothingItem;
  compact?: boolean;
};

const getDaysSinceWorn = (lastWornAt: string) => {
  const lastWornDate = new Date(`${lastWornAt}T00:00:00+09:00`);
  const today = new Date("2026-05-24T00:00:00+09:00");
  const diff = today.getTime() - lastWornDate.getTime();

  return Math.max(0, Math.floor(diff / (1000 * 60 * 60 * 24)));
};

const ClothingCard = ({ item, compact = false }: ClothingCardProps) => {
  const daysSinceWorn = getDaysSinceWorn(item.lastWornAt);

  return (
    <article className={`clothing-card${compact ? " clothing-card--compact" : ""}`}>
      <div className="clothing-card__image">
        <img alt={item.name} src={item.imageUrl} />
        {daysSinceWorn >= 40 ? <span className="unworn-badge">{daysSinceWorn}일째 안 입음</span> : null}
      </div>
      <div className="clothing-card__body">
        <span className="source-badge">내 옷장</span>
        <h3>{item.name}</h3>
        <p>
          {item.brand} · {item.color}
        </p>
        {!compact ? (
          <div className="clothing-card__meta">
            <span>착용 {item.wearCount}회</span>
            <span>최근 {item.lastWornAt}</span>
          </div>
        ) : null}
      </div>
    </article>
  );
};

export default ClothingCard;
