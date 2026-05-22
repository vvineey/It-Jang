import type { ClothingItem } from "../../types";

type ClothingCardProps = {
  item: ClothingItem;
  compact?: boolean;
};

const ClothingCard = ({ item, compact = false }: ClothingCardProps) => (
  <article className={`clothing-card${compact ? " clothing-card--compact" : ""}`}>
    <div className="clothing-card__image">
      <img alt={item.name} src={item.imageUrl} />
    </div>
    <div className="clothing-card__body">
      <span className="source-badge">내 옷장</span>
      <h3>{item.name}</h3>
      <p>
        {item.brand} · {item.color}
      </p>
      {!compact ? (
        <div className="clothing-card__meta">
          <span>{item.wearCount}회 착용</span>
          <span>{item.lastWornAt}</span>
        </div>
      ) : null}
    </div>
  </article>
);

export default ClothingCard;
