import { Check, Eye, LockKeyhole, ShieldCheck, UsersRound } from "lucide-react";
import type { ClosetVisibility, VisibilityClosetItem } from "../../data/circularServicesMock";

export const visibilityLabels: Record<ClosetVisibility, string> = {
  PRIVATE: "나만 보기",
  FRIENDS: "친구공개",
  PUBLIC: "전체공개",
};

export const ClosetVisibilitySummary = ({ items }: { items: VisibilityClosetItem[] }) => (
  <section className="privacy-summary service-card">
    {[
      ["등록된 옷", items.length],
      ["공개", items.filter((item) => item.visibility === "PUBLIC").length],
      ["친구공개", items.filter((item) => item.visibility === "FRIENDS").length],
      ["비공개", items.filter((item) => item.visibility === "PRIVATE").length],
    ].map(([label, value]) => (
      <div key={label}>
        <strong>{value}</strong>
        <span>{label}</span>
      </div>
    ))}
  </section>
);

export const VisibilityGuideCard = () => (
  <section className="visibility-guide service-card">
    <div><LockKeyhole size={17} /><span><strong>비공개</strong> 나만 볼 수 있어요.</span></div>
    <div><UsersRound size={17} /><span><strong>친구공개</strong> 친구만 볼 수 있어요.</span></div>
    <div><Eye size={17} /><span><strong>공개</strong> 누구나 코디에서 참고할 수 있어요.</span></div>
    <p><ShieldCheck size={16} />얼굴, 체형, 아바타, 구매 상세, 개인 메모는 공개되지 않아요.</p>
  </section>
);

export const ClosetVisibilityFilter = ({
  active,
  categories,
  onChange,
}: {
  active: string;
  categories: string[];
  onChange: (category: string) => void;
}) => (
  <div className="service-chip-row" role="tablist" aria-label="옷 카테고리">
    {categories.map((category) => (
      <button
        aria-selected={active === category}
        className={active === category ? "is-active" : ""}
        key={category}
        onClick={() => onChange(category)}
        role="tab"
        type="button"
      >
        {category}
      </button>
    ))}
  </div>
);

export const ClosetVisibilityItemCard = ({
  item,
  onSelect,
  onVisibilityChange,
}: {
  item: VisibilityClosetItem;
  onSelect: () => void;
  onVisibilityChange: (visibility: ClosetVisibility) => void;
}) => (
  <article className={`visibility-item service-card${item.isSelected ? " is-selected" : ""}`}>
    <button
      aria-label={`${item.name} 선택`}
      className="visibility-item__check"
      onClick={onSelect}
      type="button"
    >
      {item.isSelected ? <Check size={15} /> : null}
    </button>
    <img alt={item.name} src={item.imageUrl} />
    <div className="visibility-item__body">
      <div>
        <span>{item.categoryLabel} · {item.color}</span>
        <strong>{item.name}</strong>
        <small>{item.tags.join(" · ")} · {item.wearCount}회 착용</small>
      </div>
      <div className="visibility-options" aria-label={`${item.name} 공개 범위`}>
        {(["PRIVATE", "FRIENDS", "PUBLIC"] as ClosetVisibility[]).map((visibility) => (
          <button
            className={item.visibility === visibility ? "is-active" : ""}
            key={visibility}
            onClick={() => onVisibilityChange(visibility)}
            type="button"
          >
            {visibilityLabels[visibility]}
          </button>
        ))}
      </div>
    </div>
  </article>
);

export const BulkVisibilityActionBar = ({
  count,
  onChange,
}: {
  count: number;
  onChange: (visibility: ClosetVisibility) => void;
}) => (
  <section className="bulk-visibility service-card">
    <div><strong>{count}개 선택</strong><span>선택한 옷의 공개 범위를 한 번에 바꿔요.</span></div>
    <div>
      <button disabled={!count} onClick={() => onChange("PUBLIC")} type="button">전체공개</button>
      <button disabled={!count} onClick={() => onChange("FRIENDS")} type="button">친구공개</button>
      <button disabled={!count} onClick={() => onChange("PRIVATE")} type="button">비공개</button>
    </div>
  </section>
);

export const PublicPreviewCard = ({ item }: { item?: VisibilityClosetItem }) => (
  <section className="public-preview service-card">
    <header>
      <div><span>공개 미리보기</span><h2>다른 사용자에게는 이렇게 보여요</h2></div>
      <Eye size={18} />
    </header>
    {item ? (
      <article>
        <img alt={item.name} src={item.imageUrl} />
        <div><span>{item.categoryLabel}</span><strong>{item.name}</strong><small>#{item.tags.join(" #")}</small></div>
      </article>
    ) : <p>전체공개로 설정한 옷이 아직 없어요.</p>}
    <small>구매가, 착용 기록, 개인 메모는 다른 사용자에게 보이지 않아요.</small>
  </section>
);
