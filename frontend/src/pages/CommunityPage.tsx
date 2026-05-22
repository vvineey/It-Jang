import { MapPin, Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import PageHeader from "../components/common/PageHeader";
import { categoryTabs, communityPosts } from "../data/mockData";
import type { ClothingCategory } from "../types";

const CommunityPage = () => {
  const [activeCategory, setActiveCategory] = useState<ClothingCategory | "all">("all");

  const posts = useMemo(
    () =>
      activeCategory === "all"
        ? communityPosts
        : communityPosts.filter((post) => post.category === activeCategory),
    [activeCategory],
  );

  return (
    <main className="screen community-screen">
      <PageHeader
        eyebrow="community"
        title="옷 나누는 장터"
        description="안 입는 옷을 카테고리별로 사고 팔거나 교환해요."
        action={
          <button className="icon-button" title="필터" type="button">
            <SlidersHorizontal aria-hidden size={19} />
          </button>
        }
      />

      <label className="community-search">
        <Search aria-hidden size={18} />
        <input placeholder="찾고 싶은 옷을 검색해보세요" type="search" />
      </label>

      <div className="category-tabs" role="tablist" aria-label="거래 카테고리">
        <button
          aria-selected={activeCategory === "all"}
          className={`category-tab${activeCategory === "all" ? " is-active" : ""}`}
          onClick={() => setActiveCategory("all")}
          role="tab"
          type="button"
        >
          전체
        </button>
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

      <section className="trade-feed" aria-label="중고거래 게시글">
        {posts.map((post) => (
          <article className="trade-card panel" key={post.id}>
            <div className="trade-card__image">
              <img alt={post.title} src={post.imageUrl} />
            </div>
            <div className="trade-card__body">
              <div className="trade-card__top">
                <h2>{post.title}</h2>
                <span>{post.status}</span>
              </div>
              <p className="trade-region">
                <MapPin aria-hidden size={14} />
                {post.region}
              </p>
              <strong>{post.price}</strong>
              <div className="trade-tags">
                {post.tags.map((tag) => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
};

export default CommunityPage;
