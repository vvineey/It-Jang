import type { SimilarProduct } from "../../data/priceCompareMock";
import { formatWon } from "./priceUtils";

type SimilarProductSectionProps = {
  products: SimilarProduct[];
};

const SimilarProductSection = ({ products }: SimilarProductSectionProps) => (
  <section className="similar-product-section" aria-label="비슷한 상품도 있어요">
    <div className="price-section-heading">
      <div>
        <span>비슷한 상품도 있어요</span>
        <h2>중고와 교환도 함께 봐요</h2>
      </div>
    </div>
    <div className="similar-product-scroll">
      {products.map((product) => (
        <article className="similar-product-card" key={product.id}>
          <img alt={product.name} src={product.imageUrl} />
          <div>
            <span>{product.badge}</span>
            <h3>{product.name}</h3>
            <p>{product.platform}</p>
            <strong>{product.finalPrice === 0 ? "교환" : formatWon(product.finalPrice)}</strong>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default SimilarProductSection;
