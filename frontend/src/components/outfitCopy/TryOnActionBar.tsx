import { Check, Loader2, Save, Search, Sparkles } from "lucide-react";

type TryOnActionBarProps = {
  isLoading: boolean;
  isSaved: boolean;
  onSave: () => void;
  onShowMissing: () => void;
  onTryOn: () => void;
};

const TryOnActionBar = ({
  isLoading,
  isSaved,
  onSave,
  onShowMissing,
  onTryOn,
}: TryOnActionBarProps) => (
  <section className="copy-action-bar">
    <button className="copy-primary-action" disabled={isLoading} onClick={onTryOn} type="button">
      {isLoading ? (
        <>
          <Loader2 aria-hidden className="tryon-spin" size={18} />
          내 아바타에 입히는 중
        </>
      ) : (
        <>
          <Sparkles aria-hidden size={18} />
          내 아바타로 입어보기
        </>
      )}
    </button>
    <div>
      <button className={isSaved ? "is-saved" : ""} onClick={onSave} type="button">
        {isSaved ? <Check aria-hidden size={16} /> : <Save aria-hidden size={16} />}
        {isSaved ? "저장했어요" : "이 조합 저장하기"}
      </button>
      <button onClick={onShowMissing} type="button">
        <Search aria-hidden size={16} />
        부족한 아이템 보기
      </button>
    </div>
  </section>
);

export default TryOnActionBar;
