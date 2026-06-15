import { Bookmark, ChevronRight, Heart, PlusCircle, Shirt, Store } from "lucide-react";
import { Link } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import { outfitPosts } from "../data/mockData";

const filters = ["인기", "최신", "날씨별", "상황별", "아이템별"];

const CommunityPage = () => (
  <main className="screen community-screen">
    <PageHeader
      title="코디 둘러보기"
      description="다른 사람들의 코디에서 오늘의 힌트를 찾아보세요."
      action={
        <button className="community-upload-button" title="코디 업로드" type="button">
          <PlusCircle aria-hidden size={20} />
        </button>
      }
    />

    <div className="community-filter-tabs" role="tablist" aria-label="코디 필터">
      {filters.map((filter, index) => (
        <button
          aria-selected={index === 0}
          className={index === 0 ? "is-active" : ""}
          key={filter}
          role="tab"
          type="button"
        >
          {filter}
        </button>
      ))}
    </div>

    <Link className="circulation-entry-card" to="/circulation">
      <div>
        <strong>입지 않는 옷이 있다면</strong>
        <span>순환 옷장에서 필요한 사람에게 이어주세요.</span>
      </div>
      <ChevronRight aria-hidden size={18} />
    </Link>
    <Link className="circulation-entry-card" to="/community/flea-market">
      <div>
        <strong>순환 플리마켓 참가 모집 중</strong>
        <span>입지 않는 옷을 직접 판매하거나 교환해요.</span>
      </div>
      <Store aria-hidden size={18} />
    </Link>

    <section className="outfit-post-grid" aria-label="코디 게시글">
      {outfitPosts.map((post) => (
        <article className="outfit-post-card" key={post.id}>
          <img alt={post.title} src={post.imageUrl} />
          <div>
            <div className="outfit-post-meta">
              <p>{post.author}</p>
              <span>{post.visibility === "PUBLIC" ? "공개" : "친구공개"}</span>
            </div>
            <h2>{post.title}</h2>
            <div className="outfit-tags">
              {post.tags.map((tag) => (
                <span key={tag}>#{tag}</span>
              ))}
            </div>
            <div className="outfit-post-stats">
              <span>
                <Heart aria-hidden size={14} />
                {post.likes}
              </span>
              <span>
                <Bookmark aria-hidden size={14} />
                {post.saves}
              </span>
            </div>
            <Link className="outfit-copy-link" to={`/outfits/${post.id}/copy`}>
              <Shirt aria-hidden size={14} />
              내 옷장으로 따라입기
            </Link>
          </div>
        </article>
      ))}
    </section>
  </main>
);

export default CommunityPage;
