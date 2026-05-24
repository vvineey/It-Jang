import { Send, WandSparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/common/PageHeader";
import TagPill from "../components/common/TagPill";

const tagGroups = [
  { title: "상황", tags: ["데이트", "등교", "면접", "피크닉"] },
  { title: "분위기", tags: ["심플", "러블리", "차분한", "편한"] },
  { title: "날씨", tags: ["비 오는 날", "따뜻한", "가벼운"] },
];

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
        title="오늘은 어떤 분위기로 입을까요?"
        description="상황을 적거나 태그를 골라 추천받아보세요."
      />

      <section className="prompt-panel panel" aria-label="추천 프롬프트">
        <label className="prompt-box">
          <span>어떤 옷을 입고 싶나요?</span>
          <textarea placeholder="데이트에 어울리지만 너무 꾸민 느낌은 싫어요." rows={4} />
        </label>
        <Link className="primary-button prompt-submit" to="/recommend/result">
          코디 추천받기
          <Send aria-hidden size={18} />
        </Link>
      </section>

      <section className="tag-select-panel" aria-label="추천 태그 선택">
        <div className="section-heading">
          <h2>상황과 분위기</h2>
        </div>
        {tagGroups.map((group) => (
          <div className="recommend-tag-group" key={group.title}>
            <h3>{group.title}</h3>
            <div className="recommend-tag-grid">
              {group.tags.map((tag) => (
                <TagPill
                  active={selectedTags.includes(tag)}
                  key={tag}
                  label={tag}
                  onClick={() => toggleTag(tag)}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="selected-summary panel">
        <WandSparkles aria-hidden size={20} />
        <div>
          <strong>선택한 조건</strong>
          <p>{selectedTags.length > 0 ? selectedTags.join(" · ") : "태그를 골라도 추천받을 수 있어요."}</p>
        </div>
      </section>
    </main>
  );
};

export default RecommendationSelectPage;
