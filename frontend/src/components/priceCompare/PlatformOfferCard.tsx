import { ExternalLink, Truck } from "lucide-react";
import type { PriceOffer } from "../../data/priceCompareMock";
import { formatShippingFee, formatWon } from "./priceUtils";

type PlatformOfferCardProps = {
  offer: PriceOffer;
};

const PlatformOfferCard = ({ offer }: PlatformOfferCardProps) => (
  <article className={`platform-offer-card${offer.isLowest ? " is-lowest" : ""}`}>
    <img alt={offer.title} src={offer.imageUrl} />
    <div className="platform-offer-card__body">
      <div className="platform-offer-card__top">
        <span>{offer.platform}</span>
        <div>
          {offer.isLowest ? <strong>최저가</strong> : null}
          {offer.freeShipping ? <strong>무료배송</strong> : null}
          {offer.couponAvailable ? <strong>쿠폰 가능</strong> : null}
        </div>
      </div>
      <h3>{offer.title}</h3>
      <p>{offer.seller}</p>
      <dl>
        <div>
          <dt>판매가</dt>
          <dd>{formatWon(offer.price)}</dd>
        </div>
        <div>
          <dt>배송비</dt>
          <dd>{formatShippingFee(offer.shippingFee)}</dd>
        </div>
        <div>
          <dt>최종가</dt>
          <dd>{formatWon(offer.finalPrice)}</dd>
        </div>
      </dl>
      <div className="offer-sub-info">
        <span>사이즈 {offer.stock.join(" / ")}</span>
        <span>
          <Truck aria-hidden size={13} />
          {offer.delivery}
        </span>
      </div>
      <a href={offer.url}>
        보러가기
        <ExternalLink aria-hidden size={14} />
      </a>
    </div>
  </article>
);

export default PlatformOfferCard;
