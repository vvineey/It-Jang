import { Plus } from "lucide-react";
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
        eyebrow="closet"
        title="내 옷장"
        description="가지고 있는 옷을 카테고리별로 보고 추천 후보로 관리해요."
        action={
          <Link className="icon-button" title="옷 등록" to="/closet/register">
            <Plus aria-hidden size={20} />
          </Link>
        }
      />

      <div className="closet-summary">
        <div>
          <strong>{clothingItems.length}</strong>
          <span>등록된 옷</span>
        </div>
        <div>
          <strong>2</strong>
          <span>오래 안 입은 옷</span>
        </div>
        <div>
          <strong>86%</strong>
          <span>내 옷 활용률</span>
        </div>
      </div>

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
            <p>아직 이 카테고리에 등록된 옷이 없어요.</p>
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
