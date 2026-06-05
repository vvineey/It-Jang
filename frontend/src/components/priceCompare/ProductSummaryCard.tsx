import { Heart, SearchCheck } from "lucide-react";
import type { PriceCompareProduct } from "../../data/priceCompareMock";

type ProductSummaryCardProps = {
  product: PriceCompareProduct;
  onTrackClick: () => void;
};

const ProductSummaryCard = ({ product, onTrackClick }: ProductSummaryCardProps) => (
  <section className="price-product-card" aria-label="상품 요약">
    <img alt={product.name} src={product.imageUrl} />
    <div className="price-product-card__body">
      <div className="price-product-card__top">
        <span>{product.brand}</span>
        <button title="관심 상품 저장" type="button">
          <Heart aria-hidden size={17} />
        </button>
      </div>
      <h2>{product.name}</h2>
      <p>
        {product.category} · {product.color}
      </p>
      <div className="price-badge-row">
        <span className="is-strong">
          <SearchCheck aria-hidden size={13} />
          내 옷장과 잘 어울림
        </span>
        <button onClick={onTrackClick} type="button">
          가격 추적
        </button>
      </div>
    </div>
  </section>
);

export default ProductSummaryCard;
