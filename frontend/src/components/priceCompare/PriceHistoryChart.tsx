import type { PriceHistoryPoint } from "../../data/priceCompareMock";
import { formatWon } from "./priceUtils";

type PriceHistoryChartProps = {
  history: PriceHistoryPoint[];
};

const PriceHistoryChart = ({ history }: PriceHistoryChartProps) => {
  const prices = history.map((point) => point.price);
  const minPrice = Math.min(...prices);
  const maxPrice = Math.max(...prices);
  const currentPrice = prices[prices.length - 1];

  return (
    <section className="price-history-card" aria-label="가격 변동">
      <div className="price-section-heading">
        <div>
          <span>가격 변동</span>
          <h2>최근 30일 흐름</h2>
        </div>
      </div>
      <p>최근 30일 동안의 최종가 변화를 보여줘요.</p>
      <div className="price-chart">
        {history.map((point) => {
          const height = 38 + ((maxPrice - point.price) / (maxPrice - minPrice || 1)) * 74;

          return (
            <div className="price-chart__bar" key={point.date}>
              <strong>{formatWon(point.price)}</strong>
              <span style={{ height }} />
              <small>{point.date}</small>
            </div>
          );
        })}
      </div>
      <div className="price-history-summary">
        <div>
          <span>최근 최저가</span>
          <strong>{formatWon(minPrice)}</strong>
        </div>
        <div>
          <span>최고가 대비</span>
          <strong>{formatWon(maxPrice - minPrice)} 낮아요</strong>
        </div>
        <div>
          <span>현재가</span>
          <strong>{formatWon(currentPrice)}</strong>
        </div>
      </div>
    </section>
  );
};

export default PriceHistoryChart;
