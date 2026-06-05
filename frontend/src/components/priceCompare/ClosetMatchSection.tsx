import type { ClosetMatchItem } from "../../data/priceCompareMock";

type ClosetMatchSectionProps = {
  items: ClosetMatchItem[];
  score: number;
};

const ClosetMatchSection = ({ items, score }: ClosetMatchSectionProps) => (
  <section className="closet-match-section" aria-label="내 옷장과 잘 어울려요">
    <div className="price-section-heading">
      <div>
        <span>내 옷장과 잘 어울려요</span>
        <h2>코디 가능성 {score}%</h2>
      </div>
      <strong>구매 전 확인</strong>
    </div>
    <p>이미 가지고 있는 하의와 신발로 코디가 완성돼요.</p>
    <div className="closet-match-scroll">
      {items.map((item) => (
        <article className="closet-match-card" key={item.id}>
          <img alt={item.name} src={item.imageUrl} />
          <div>
            <span>{item.category}</span>
            <h3>{item.name}</h3>
            <strong>{item.source}</strong>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default ClosetMatchSection;
