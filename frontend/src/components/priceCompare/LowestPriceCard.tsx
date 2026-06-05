import { ExternalLink, TrendingDown } from "lucide-react";
import type { PriceOffer } from "../../data/priceCompareMock";
import { formatShippingFee, formatWon } from "./priceUtils";

type LowestPriceCardProps = {
  offer: PriceOffer;
};

const LowestPriceCard = ({ offer }: LowestPriceCardProps) => (
  <section className="lowest-price-card" aria-label="현재 최저가">
    <div className="price-section-heading">
      <div>
        <span>현재 최저가</span>
        <h2>{offer.platform}</h2>
      </div>
      <strong>
        <TrendingDown aria-hidden size={15} />
        최종가 기준
      </strong>
    </div>
    <div className="lowest-price-main">
      <span>최종 예상가</span>
      <strong>{formatWon(offer.finalPrice)}</strong>
    </div>
    <dl className="price-detail-grid">
      <div>
        <dt>판매가</dt>
        <dd>{formatWon(offer.price)}</dd>
      </div>
      <div>
        <dt>배송비</dt>
        <dd>{formatShippingFee(offer.shippingFee)}</dd>
      </div>
      <div>
        <dt>쿠폰</dt>
        <dd>{offer.couponAmount > 0 ? `-${formatWon(offer.couponAmount)}` : "없음"}</dd>
      </div>
    </dl>
    <p>판매가보다 배송비와 쿠폰을 포함한 최종 예상가를 기준으로 비교했어요.</p>
    <a className="primary-button" href={offer.url}>
      최저가 보러가기
      <ExternalLink aria-hidden size={16} />
    </a>
  </section>
);

export default LowestPriceCard;
