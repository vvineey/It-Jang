import { profileBasics } from "../../data/mockData";

const BasicInfoSection = () => (
  <section className="profile-section panel" aria-labelledby="basic-info-title">
    <div className="section-heading">
      <h2 id="basic-info-title">기본 정보</h2>
      <p>사이즈에 맞는 옷을 먼저 추천할게요.</p>
    </div>

    <div className="form-grid">
      <label className="field">
        <span>닉네임</span>
        <input placeholder="초록옷장" type="text" />
      </label>
      <div className="field-row">
        <label className="field">
          <span>키</span>
          <input inputMode="numeric" placeholder="165cm" type="text" />
        </label>
        <label className="field">
          <span>몸무게</span>
          <input inputMode="numeric" placeholder="55kg" type="text" />
        </label>
      </div>
      <div className="field-row">
        <label className="field">
          <span>발 사이즈</span>
          <input inputMode="numeric" placeholder="240mm" type="text" />
        </label>
        <label className="field">
          <span>선호 핏</span>
          <select defaultValue="regular">
            {profileBasics.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>
      </div>
    </div>
  </section>
);

export default BasicInfoSection;
