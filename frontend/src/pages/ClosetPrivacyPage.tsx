import { ArrowLeft, Save, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  BulkVisibilityActionBar,
  ClosetVisibilityFilter,
  ClosetVisibilityItemCard,
  ClosetVisibilitySummary,
  PublicPreviewCard,
  VisibilityGuideCard,
} from "../components/closetPrivacy/ClosetPrivacyComponents";
import {
  visibilityClosetItems,
  type ClosetVisibility,
} from "../data/circularServicesMock";

const categories = ["전체", "상의", "하의", "아우터", "신발", "가방", "악세서리"];

const ClosetPrivacyPage = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState(visibilityClosetItems);
  const [activeCategory, setActiveCategory] = useState("전체");
  const [saved, setSaved] = useState(false);
  const filteredItems = useMemo(
    () => activeCategory === "전체" ? items : items.filter((item) => item.categoryLabel === activeCategory),
    [activeCategory, items],
  );
  const selectedCount = items.filter((item) => item.isSelected).length;

  const changeItemVisibility = (id: number, visibility: ClosetVisibility) => {
    setSaved(false);
    setItems((current) => current.map((item) => item.id === id ? { ...item, visibility } : item));
  };

  const changeSelectedVisibility = (visibility: ClosetVisibility) => {
    setSaved(false);
    setItems((current) => current.map((item) => item.isSelected ? { ...item, visibility, isSelected: false } : item));
  };

  return (
    <main className="screen service-screen privacy-screen">
      <header className="service-page-header">
        <button onClick={() => navigate(-1)} title="뒤로가기" type="button"><ArrowLeft size={19} /></button>
        <div><span>내 정보 보호</span><h1>옷장 공개 설정</h1><p>공개할 옷만 골라 다른 사람과 코디를 공유할 수 있어요.</p></div>
      </header>

      <ClosetVisibilitySummary items={items} />
      <VisibilityGuideCard />
      <ClosetVisibilityFilter active={activeCategory} categories={categories} onChange={setActiveCategory} />
      <BulkVisibilityActionBar count={selectedCount} onChange={changeSelectedVisibility} />

      <section className="service-list-section">
        <header><div><span>아이템별 설정</span><h2>공개할 옷을 골라주세요</h2></div><strong>기본 비공개</strong></header>
        <div className="visibility-item-list">
          {filteredItems.map((item) => (
            <ClosetVisibilityItemCard
              item={item}
              key={item.id}
              onSelect={() => setItems((current) => current.map((target) => target.id === item.id ? { ...target, isSelected: !target.isSelected } : target))}
              onVisibilityChange={(visibility) => changeItemVisibility(item.id, visibility)}
            />
          ))}
        </div>
      </section>

      <PublicPreviewCard item={items.find((item) => item.visibility === "PUBLIC")} />
      <button className="service-primary-button" onClick={() => setSaved(true)} type="button"><Save size={18} />설정 저장하기</button>
      {saved ? <div className="service-toast" role="status"><ShieldCheck size={17} />옷장 공개 설정을 저장했어요.</div> : null}
    </main>
  );
};

export default ClosetPrivacyPage;
