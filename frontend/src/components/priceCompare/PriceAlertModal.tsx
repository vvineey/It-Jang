import { Bell, Mail, X } from "lucide-react";
import { formatWon } from "./priceUtils";

type PriceAlertModalProps = {
  currentPrice: number;
  onClose: () => void;
};

const PriceAlertModal = ({ currentPrice, onClose }: PriceAlertModalProps) => (
  <div className="price-alert-backdrop" role="presentation">
    <section className="price-alert-modal" aria-modal="true" role="dialog">
      <header>
        <div>
          <span>가격 알림 설정</span>
          <h2>원하는 가격 이하가 되면 알려드릴게요.</h2>
        </div>
        <button onClick={onClose} title="닫기" type="button">
          <X aria-hidden size={18} />
        </button>
      </header>
      <div className="price-alert-current">
        <span>현재 최종가</span>
        <strong>{formatWon(currentPrice)}</strong>
      </div>
      <label className="price-alert-input">
        목표 가격
        <input defaultValue="30000" inputMode="numeric" type="text" />
      </label>
      <div className="price-alert-options" aria-label="알림 방식">
        <button className="is-active" type="button">
          <Bell aria-hidden size={16} />
          앱 푸시
        </button>
        <button type="button">
          <Mail aria-hidden size={16} />
          이메일
        </button>
      </div>
      <button className="primary-button" onClick={onClose} type="button">
        알림 설정하기
      </button>
    </section>
  </div>
);

export default PriceAlertModal;
