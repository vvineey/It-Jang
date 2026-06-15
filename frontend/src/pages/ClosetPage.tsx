import { Plus, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import ClothingCard from "../components/closet/ClothingCard";
import PageHeader from "../components/common/PageHeader";
import { categoryTabs, clothingItems } from "../data/mockData";
import type { ClothingCategory } from "../types";

const ClosetPage = () => {
  const [activeCategory, setActiveCategory] = useState<ClothingCategory>("top");

  const filteredItems = useMemo(
    () => clothingItems.filter((item) => item.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className="screen closet-screen">
      <PageHeader
        title="내 옷장"
        description="가지고 있는 옷을 모아보고 코디에 활용해요."
        action={
          <Link className="closet-add-button" title="옷 등록" to="/closet/register">
            <Plus aria-hidden size={20} />
          </Link>
        }
      />

      <div className="closet-summary">
        <div>
          <strong>{clothingItems.length}</strong>
          <span>등록한 옷</span>
        </div>
        <div>
          <strong>2</strong>
          <span>안 입은 옷</span>
        </div>
        <div>
          <strong>86%</strong>
          <span>옷장 활용률</span>
        </div>
      </div>

      <Link className="closet-service-entry" to="/closet/privacy">
        <ShieldCheck aria-hidden size={18} />
        <div><strong>옷장 공개 설정</strong><span>공개할 옷만 골라 안전하게 공유해요.</span></div>
      </Link>

      <div className="category-tabs" role="tablist" aria-label="옷 카테고리">
        {categoryTabs.map((tab) => (
          <button
            aria-selected={activeCategory === tab.key}
            className={`category-tab${activeCategory === tab.key ? " is-active" : ""}`}
            key={tab.key}
            onClick={() => setActiveCategory(tab.key)}
            role="tab"
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>

      <section className="closet-grid" aria-label="옷 목록">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => <ClothingCard item={item} key={item.id} />)
        ) : (
          <div className="empty-panel panel">
            <p>아직 등록된 옷이 없어요. 첫 옷을 등록해볼까요?</p>
            <Link className="secondary-button" to="/closet/register">
              옷 등록하기
            </Link>
          </div>
        )}
      </section>
    </main>
  );
};

export default ClosetPage;
