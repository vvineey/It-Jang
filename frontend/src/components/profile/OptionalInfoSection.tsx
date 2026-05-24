import TagPill from "../common/TagPill";
import { styleOptions } from "../../data/mockData";

const avoidOptions = ["네온", "과한 로고", "불편한 핏", "두꺼운 소재"];

const OptionalInfoSection = () => (
  <details className="profile-section profile-section--optional panel" open>
    <summary>
      <div>
      <h2 id="optional-info-title">선택 정보</h2>
        <p>취향을 고르면 추천이 더 자연스러워져요.</p>
      </div>
      <span>접기</span>
    </summary>

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
      <textarea placeholder="어깨가 좁아 보이지 않는 핏을 선호해요." rows={4} />
    </label>
  </details>
);

export default OptionalInfoSection;
