import { ArrowRight, CircleOff, Shirt } from "lucide-react";
import type { OutfitCopyItem, OutfitMatchStatus } from "../../data/outfitCopyMock";

type OutfitItemMatchCardProps = {
  item: OutfitCopyItem;
};

const statusLabels: Record<OutfitMatchStatus, string> = {
  original: "원본 그대로",
  closet: "내 옷장 대체",
  similar: "유사 상품 대체",
  unavailable: "대체 불가",
};

const OutfitItemMatchCard = ({ item }: OutfitItemMatchCardProps) => (
  <article className={`copy-item-card copy-item-card--${item.matchStatus}`}>
    <header className="copy-item-card__header">
      <span>{item.categoryLabel}</span>
      <strong className={`copy-match-badge copy-match-badge--${item.matchStatus}`}>
        {statusLabels[item.matchStatus]}
      </strong>
    </header>

    <div className="copy-item-match">
      <div className="copy-item-option">
        <img alt={item.original.name} src={item.original.imageUrl} />
        <span>원본</span>
        <strong>{item.original.name}</strong>
        <small>{item.original.color}</small>
      </div>

      <ArrowRight aria-hidden className="copy-item-arrow" size={17} />

      {item.replacement ? (
        <div className="copy-item-option copy-item-option--replacement">
          <img alt={item.replacement.name} src={item.replacement.imageUrl} />
          <span>{item.replacement.source}</span>
          <strong>{item.replacement.name}</strong>
          <small>
            {item.replacement.color} · 유사도 {item.replacement.similarity}%
          </small>
        </div>
      ) : (
        <div className="copy-item-empty">
          <CircleOff aria-hidden size={20} />
          <strong>비슷한 아이템이 없어요</strong>
          <span>이 아이템은 빼고 입어볼게요.</span>
        </div>
      )}
    </div>

    <p className="copy-item-card__note">
      <Shirt aria-hidden size={14} />
      {item.matchStatus === "closet"
        ? "이미 가지고 있는 옷을 먼저 골랐어요."
        : item.matchStatus === "similar"
          ? "내 옷장에 없어 비슷한 상품으로 보여드려요."
          : item.matchStatus === "unavailable"
            ? "원본 조합의 분위기를 유지하며 생략해요."
            : "공개된 원본 아이템을 그대로 활용해요."}
    </p>
  </article>
);

export default OutfitItemMatchCard;
