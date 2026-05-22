import { Send, WandSparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import TagPill from "../components/common/TagPill";
import { recommendationTags } from "../data/mockData";

const RecommendationSelectPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(["데이트", "심플"]);

  const toggleTag = (tag: string) => {
    setSelectedTags((current) =>
      current.includes(tag) ? current.filter((item) => item !== tag) : [...current, tag],
    );
  };

  return (
    <main className="screen recommend-screen">
      <PageHeader
        eyebrow="recommend"
        title="오늘 입을 옷을 골라볼까요?"
        description="프롬프트를 쓰거나 태그를 여러 개 골라 코디 추천을 받을 수 있어요."
      />

      <section className="prompt-panel panel" aria-label="추천 프롬프트">
        <label className="prompt-box">
          <span>원하는 코디를 적어주세요</span>
          <textarea
            defaultValue="초록색 포인트가 있고 데이트에 어울리는 편한 코디"
            rows={4}
          />
        </label>
        <Link className="primary-button prompt-submit" to="/recommend/result">
          추천 받기
          <Send aria-hidden size={18} />
        </Link>
      </section>

      <section className="tag-select-panel" aria-label="추천 태그 선택">
        <div className="section-heading">
          <p className="eyebrow">tags</p>
          <h2>상황과 분위기</h2>
        </div>
        <div className="recommend-tag-grid">
          {recommendationTags.map((tag) => (
            <TagPill
              active={selectedTags.includes(tag)}
              key={tag}
              label={tag}
              onClick={() => toggleTag(tag)}
            />
          ))}
        </div>
      </section>

      <section className="selected-summary panel">
        <WandSparkles aria-hidden size={20} />
        <div>
          <strong>{selectedTags.length}개 태그 선택됨</strong>
          <p>{selectedTags.map((tag) => `#${tag}`).join(" ")}</p>
        </div>
      </section>
    </main>
  );
};

export default RecommendationSelectPage;
