import { ArrowRight, Leaf, Plus, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import ClothingCard from "../components/closet/ClothingCard";
import { clothingItems } from "../data/mockData";

const HomePage = () => (
  <main className="screen app-home-screen">
    <section className="home-top">
      <div>
        <p>오늘의 옷장</p>
        <h1>있는 옷으로 충분해요</h1>
      </div>
      <img alt="잇장" src="/assets/itjang-logo.png" />
    </section>

    <section className="home-main-card">
      <div>
        <span>추천 준비 완료</span>
        <h2>오늘 코디를 바로 골라볼까요?</h2>
        <p>날씨와 상황에 맞춰 내 옷장 아이템을 먼저 보여드려요.</p>
      </div>
      <Link className="primary-button home-cta" to="/recommend">
        코디 추천 받기
        <ArrowRight aria-hidden size={18} />
      </Link>
    </section>

    <section className="home-stats" aria-label="옷장 요약">
      <div>
        <Leaf aria-hidden size={18} />
        <strong>{clothingItems.length}</strong>
        <span>등록한 옷</span>
      </div>
      <div>
        <TrendingUp aria-hidden size={18} />
        <strong>86%</strong>
        <span>활용률</span>
      </div>
      <div>
        <Sparkles aria-hidden size={18} />
        <strong>6</strong>
        <span>추천 후보</span>
      </div>
    </section>

    <section className="home-section">
      <div className="home-section__header">
        <h2>다시 입어볼 옷</h2>
        <Link to="/closet">전체보기</Link>
      </div>
      <div className="home-item-row">
        {clothingItems.slice(8, 10).map((item) => (
          <ClothingCard compact item={item} key={item.id} />
        ))}
      </div>
    </section>

    <section className="home-quick-actions" aria-label="빠른 실행">
      <Link to="/closet/register">
        <Plus aria-hidden size={18} />
        옷 등록
      </Link>
      <Link to="/community">
        <Leaf aria-hidden size={18} />
        나눔 장터
      </Link>
    </section>
  </main>
);

export default HomePage;
