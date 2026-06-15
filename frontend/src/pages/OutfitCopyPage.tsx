import { ArrowLeft, LockKeyhole, ShieldCheck } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClosetReplacementSection from "../components/outfitCopy/ClosetReplacementSection";
import CopyScoreCard from "../components/outfitCopy/CopyScoreCard";
import OriginalOutfitCard from "../components/outfitCopy/OriginalOutfitCard";
import OutfitItemMatchCard from "../components/outfitCopy/OutfitItemMatchCard";
import TryOnActionBar from "../components/outfitCopy/TryOnActionBar";
import TryOnResultPreview from "../components/outfitCopy/TryOnResultPreview";
import {
  copyPolicyNotice,
  copyScore,
  getOutfitCopyPost,
  outfitCopyItems,
  type OutfitCopyStatus,
} from "../data/outfitCopyMock";

const demoStatuses: Array<{ label: string; value: OutfitCopyStatus }> = [
  { label: "성공", value: "success" },
  { label: "부분 성공", value: "partial" },
  { label: "아바타 없음", value: "missing-avatar" },
];

const OutfitCopyPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const post = getOutfitCopyPost(postId);
  const [status, setStatus] = useState<OutfitCopyStatus>("idle");
  const [isSaved, setIsSaved] = useState(false);
  const timerRef = useRef<number | null>(null);
  const missingSectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    },
    [],
  );

  const handleTryOn = () => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
    }
    setStatus("loading");
    timerRef.current = window.setTimeout(() => {
      setStatus("partial");
      timerRef.current = null;
    }, 1300);
  };

  const handleDemoStatus = (nextStatus: OutfitCopyStatus) => {
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    setStatus(nextStatus);
  };

  return (
    <main className="screen copy-screen">
      <header className="copy-page-header">
        <button onClick={() => navigate(-1)} title="뒤로가기" type="button">
          <ArrowLeft aria-hidden size={19} />
        </button>
        <div>
          <span>공개 코디 재구성</span>
          <h1>코디 따라입기</h1>
          <p>공개된 코디를 내 옷장 기준으로 맞춰볼게요.</p>
        </div>
      </header>

      <section className="copy-policy-card">
        <ShieldCheck aria-hidden size={20} />
        <div>
          <strong>내 정보로 새로 입어봐요</strong>
          <p>{copyPolicyNotice}</p>
        </div>
      </section>

      <OriginalOutfitCard post={post} />

      <section className="copy-items-section">
        <header className="copy-section-heading">
          <div>
            <span>아이템별 비교</span>
            <h2>비슷한 조합을 찾았어요</h2>
          </div>
          <strong>4개 슬롯</strong>
        </header>
        <div className="copy-item-list">
          {outfitCopyItems.map((item) => (
            <div key={item.id} ref={item.matchStatus === "unavailable" ? missingSectionRef : undefined}>
              <OutfitItemMatchCard item={item} />
            </div>
          ))}
        </div>
      </section>

      <ClosetReplacementSection items={outfitCopyItems} />
      <CopyScoreCard {...copyScore} />

      <TryOnResultPreview status={status} onCreateAvatar={() => navigate("/try-on")} />

      <TryOnActionBar
        isLoading={status === "loading"}
        isSaved={isSaved}
        onSave={() => setIsSaved((current) => !current)}
        onShowMissing={() => missingSectionRef.current?.scrollIntoView({ behavior: "smooth", block: "center" })}
        onTryOn={handleTryOn}
      />

      <section className="copy-demo-controls" aria-label="시착 결과 데모 상태">
        <div>
          <LockKeyhole aria-hidden size={15} />
          <span>상태별 화면 확인</span>
        </div>
        <div>
          {demoStatuses.map((option) => (
            <button
              className={status === option.value ? "is-active" : ""}
              key={option.value}
              onClick={() => handleDemoStatus(option.value)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      </section>
    </main>
  );
};

export default OutfitCopyPage;
