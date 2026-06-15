import { CheckCircle2 } from "lucide-react";
import type { OutfitCopyItem } from "../../data/outfitCopyMock";

type ClosetReplacementSectionProps = {
  items: OutfitCopyItem[];
};

const ClosetReplacementSection = ({ items }: ClosetReplacementSectionProps) => {
  const closetItems = items.filter((item) => item.matchStatus === "closet" && item.replacement);

  return (
    <section className="copy-replacement-section">
      <header className="copy-section-heading">
        <div>
          <span>내 옷장 우선</span>
          <h2>내 옷장으로 맞춰봤어요</h2>
        </div>
        <strong>{closetItems.length}개 발견</strong>
      </header>
      <p className="copy-section-description">
        없는 아이템은 비슷한 색상과 스타일의 내 옷으로 바꿨어요.
      </p>
      <div className="copy-replacement-list">
        {closetItems.map((item) => (
          <article key={item.id}>
            <CheckCircle2 aria-hidden size={18} />
            <div>
              <span>
                {item.categoryLabel} · 원본 {item.original.name}
              </span>
              <strong>{item.replacement?.name}</strong>
            </div>
            <b>{item.replacement?.similarity}%</b>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ClosetReplacementSection;
