import { ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import PriceFilterChips from "../components/priceCompare/PriceFilterChips";
import ProductSummaryCard from "../components/priceCompare/ProductSummaryCard";
import { priceCompareProduct, priceFilterGroups } from "../data/priceCompareMock";

const recommendedKeywords = ["흰셔츠", "블랙로퍼", "와이드데님", "가디건", "린넨자켓"];

const PriceComparePage = () => {
  const navigate = useNavigate();

  return (
    <main className="screen price-screen">
      <header className="price-header">
        <button className="tryon-back-button" onClick={() => navigate(-1)} title="뒤로가기" type="button">
          <ArrowLeft aria-hidden size={19} />
        </button>
        <div>
          <h1>가격 비교</h1>
          <p>구매 전 최종 예상가와 내 옷장 조합을 먼저 확인해보세요.</p>
        </div>
      </header>

      <section className="price-search-card" aria-label="상품 검색">
        <label>
          <Search aria-hidden size={18} />
          <input defaultValue="흰 셔츠" placeholder="찾고 싶은 옷을 검색해보세요" type="search" />
        </label>
        <div className="price-keyword-row">
          {recommendedKeywords.map((keyword) => (
            <button key={keyword} type="button">
              #{keyword}
            </button>
          ))}
        </div>
      </section>

      <ProductSummaryCard product={priceCompareProduct} onTrackClick={() => undefined} />

      <PriceFilterChips
        activePlatform="전체"
        filters={priceFilterGroups.filters}
        platforms={priceFilterGroups.platforms}
        sorts={priceFilterGroups.sorts}
      />
    </main>
  );
};

export default PriceComparePage;
