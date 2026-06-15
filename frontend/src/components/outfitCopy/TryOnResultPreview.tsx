import { AlertCircle, CheckCircle2, Loader2, UserRoundPlus } from "lucide-react";
import type { OutfitCopyStatus } from "../../data/outfitCopyMock";

type TryOnResultPreviewProps = {
  status: OutfitCopyStatus;
  onCreateAvatar: () => void;
};

const TryOnResultPreview = ({ status, onCreateAvatar }: TryOnResultPreviewProps) => {
  if (status === "idle") {
    return null;
  }

  if (status === "loading") {
    return (
      <section className="copy-result-preview copy-result-preview--loading" aria-live="polite">
        <Loader2 aria-hidden className="tryon-spin" size={24} />
        <strong>내 아바타에 코디를 입히고 있어요</strong>
        <span>내 체형과 선택한 대체 아이템만 사용해요.</span>
      </section>
    );
  }

  if (status === "missing-avatar") {
    return (
      <section className="copy-result-preview copy-result-preview--missing" aria-live="polite">
        <UserRoundPlus aria-hidden size={27} />
        <strong>아바타를 먼저 만들어야 입어볼 수 있어요.</strong>
        <span>내 체형을 기준으로 안전하게 새 시착 세션을 만들어요.</span>
        <button onClick={onCreateAvatar} type="button">
          아바타 만들러 가기
        </button>
      </section>
    );
  }

  const isPartial = status === "partial";

  return (
    <section className={`copy-result-preview${isPartial ? " copy-result-preview--partial" : ""}`} aria-live="polite">
      <div className="copy-avatar-preview" aria-label="내 아바타 코디 미리보기">
        <div className="copy-avatar-preview__head" />
        <div className="copy-avatar-preview__shirt" />
        <div className="copy-avatar-preview__pants" />
        <div className="copy-avatar-preview__shoes" />
      </div>
      <div className="copy-result-preview__content">
        {isPartial ? <AlertCircle aria-hidden size={20} /> : <CheckCircle2 aria-hidden size={20} />}
        <strong>
          {isPartial ? "일부 아이템은 비슷한 옷으로 대체했어요." : "내 아바타에 코디를 입혀봤어요."}
        </strong>
        <div className="copy-result-counts">
          <span>정확 아이템 0개</span>
          <span>대체 아이템 3개</span>
          <span>생략 아이템 1개</span>
        </div>
      </div>
    </section>
  );
};

export default TryOnResultPreview;
