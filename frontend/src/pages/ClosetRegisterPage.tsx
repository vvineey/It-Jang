import { Camera, Link as LinkIcon, ReceiptText, UploadCloud } from "lucide-react";
import { useState } from "react";
import PageHeader from "../components/common/PageHeader";

const platforms = ["무신사", "29CM", "네이버쇼핑"];

const ClosetRegisterPage = () => {
  const [mode, setMode] = useState<"manual" | "import">("manual");

  return (
    <main className="screen register-screen">
      <PageHeader
        eyebrow="add clothes"
        title="옷장 등록"
        description="직접 등록하거나 구매내역을 가져와 옷장 데이터를 만들어요."
      />

      <div className="segmented-control" aria-label="옷 등록 방식">
        <button
          className={mode === "manual" ? "is-active" : ""}
          onClick={() => setMode("manual")}
          type="button"
        >
          직접 등록
        </button>
        <button
          className={mode === "import" ? "is-active" : ""}
          onClick={() => setMode("import")}
          type="button"
        >
          구매내역 가져오기
        </button>
      </div>

      {mode === "manual" ? (
        <section className="register-panel panel">
          <button className="upload-box" type="button">
            <Camera aria-hidden size={28} />
            <span>옷 사진 추가</span>
          </button>
          <div className="form-grid">
            <label className="field">
              <span>옷 이름</span>
              <input placeholder="예: 세이지 린넨 셔츠" type="text" />
            </label>
            <div className="field-row">
              <label className="field">
                <span>카테고리</span>
                <select defaultValue="top">
                  <option value="top">상의</option>
                  <option value="bottom">하의</option>
                  <option value="outer">아우터</option>
                  <option value="shoes">신발</option>
                  <option value="bag">가방</option>
                </select>
              </label>
              <label className="field">
                <span>색상</span>
                <input placeholder="올리브" type="text" />
              </label>
            </div>
            <label className="field">
              <span>스타일 태그</span>
              <input placeholder="심플, 빈티지, 데이트" type="text" />
            </label>
          </div>
          <button className="primary-button" type="button">
            옷 등록하기
          </button>
        </section>
      ) : (
        <section className="register-panel panel">
          <div className="platform-grid">
            {platforms.map((platform) => (
              <button className="platform-card" key={platform} type="button">
                <ReceiptText aria-hidden size={22} />
                <span>{platform}</span>
              </button>
            ))}
          </div>
          <button className="upload-box upload-box--small" type="button">
            <UploadCloud aria-hidden size={24} />
            <span>주문내역 캡처 업로드</span>
          </button>
          <label className="field url-field">
            <span>상품 URL</span>
            <div>
              <LinkIcon aria-hidden size={18} />
              <input placeholder="https://..." type="url" />
            </div>
          </label>
          <button className="primary-button" type="button">
            구매내역 분석하기
          </button>
        </section>
      )}
    </main>
  );
};

export default ClosetRegisterPage;
