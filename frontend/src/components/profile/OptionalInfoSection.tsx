import TagPill from "../common/TagPill";
import { styleOptions } from "../../data/mockData";

const avoidOptions = ["네온", "과한 로고", "불편한 핏", "두꺼운 소재"];

const OptionalInfoSection = () => (
  <section className="profile-section panel" aria-labelledby="optional-info-title">
    <div className="section-heading">
      <p className="eyebrow">optional</p>
      <h2 id="optional-info-title">선택 정보</h2>
    </div>

    <div className="preference-block">
      <h3>선호 스타일</h3>
      <div className="tag-grid">
        {styleOptions.map((style, index) => (
          <TagPill active={index < 3} key={style} label={style} />
        ))}
      </div>
    </div>

    <div className="preference-block">
      <h3>피하고 싶은 조건</h3>
      <div className="tag-grid">
        {avoidOptions.map((style, index) => (
          <TagPill active={index === 2} key={style} label={style} />
        ))}
      </div>
    </div>

    <label className="field">
      <span>체형 특이사항</span>
      <textarea placeholder="예: 어깨가 좁아 보이지 않는 핏을 선호해요." rows={4} />
    </label>
  </section>
);

export default OptionalInfoSection;
