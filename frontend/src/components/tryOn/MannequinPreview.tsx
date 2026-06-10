import { Loader2, Move3D, Sparkles } from "lucide-react";
import { useState } from "react";
import Avatar3DScene from "./Avatar3DScene";
import FacePhotoUploader from "./FacePhotoUploader";

export type TryOnStatus = "idle" | "insufficient" | "generating" | "complete";

type MannequinPreviewProps = {
  status: TryOnStatus;
};

const previewCopy: Record<TryOnStatus, string> = {
  idle: "실제 생성 이미지는 크레딧 사용 후 확인할 수 있어요.",
  insufficient: "크레딧을 충전하면 내 체형에 맞춘 이미지를 만들 수 있어요.",
  generating: "선택한 코디를 내 체형에 맞춰 준비하고 있어요.",
  complete: "생성 완료 데모입니다. 실제 결과는 생성 이미지로 더 자세히 확인돼요.",
};

const shirtColors = [
  { color: "#fffaf0", label: "아이보리" },
  { color: "#dcebd2", label: "연두" },
  { color: "#214d37", label: "딥그린" },
];

const pantsColors = [
  { color: "#9ec6dc", label: "연청" },
  { color: "#416580", label: "진청" },
  { color: "#313936", label: "블랙" },
];

const MannequinPreview = ({ status }: MannequinPreviewProps) => {
  const [autoRotate, setAutoRotate] = useState(false);
  const [facePhotoUrl, setFacePhotoUrl] = useState<string | null>(null);
  const [pantsColor, setPantsColor] = useState(pantsColors[0].color);
  const [shirtColor, setShirtColor] = useState(shirtColors[0].color);

  return (
    <section className={`mannequin-preview is-${status}`} aria-label="3D 착용 미리보기">
      <div className="mannequin-preview__topline">
        <span>3D 아바타 미리보기</span>
        <strong>
          {status === "generating" ? (
            <Loader2 aria-hidden className="tryon-spin" size={15} />
          ) : status === "complete" ? (
            <Sparkles aria-hidden size={15} />
          ) : (
            <Move3D aria-hidden size={15} />
          )}
          {status === "complete" ? "완료" : "회전 가능"}
        </strong>
      </div>

      <FacePhotoUploader
        autoRotate={autoRotate}
        facePhotoUrl={facePhotoUrl}
        onAutoRotateChange={setAutoRotate}
        onPhotoChange={setFacePhotoUrl}
      />

      <div className="tryon-preview-frame">
        <Avatar3DScene
          autoRotate={autoRotate || status === "generating"}
          facePhotoUrl={facePhotoUrl}
          pantsColor={pantsColor}
          shirtColor={shirtColor}
          status={status}
        />
        {status === "generating" ? (
          <div className="avatar-generating-overlay">
            <Loader2 aria-hidden className="tryon-spin" size={22} />
            <span>아바타를 준비하고 있어요</span>
          </div>
        ) : null}
        <div className="avatar-gesture-hint">
          <Move3D aria-hidden size={14} />
          드래그해서 돌리고, 두 손가락으로 확대해보세요
        </div>
      </div>

      <div className="avatar-style-controls">
        <div>
          <span>상의 색상</span>
          <div className="avatar-swatch-row">
            {shirtColors.map(({ color, label }) => (
              <button
                aria-label={`상의 ${label}`}
                className={shirtColor === color ? "is-active" : ""}
                key={color}
                onClick={() => setShirtColor(color)}
                style={{ backgroundColor: color }}
                title={label}
                type="button"
              />
            ))}
          </div>
        </div>
        <div>
          <span>하의 색상</span>
          <div className="avatar-swatch-row">
            {pantsColors.map(({ color, label }) => (
              <button
                aria-label={`하의 ${label}`}
                className={pantsColor === color ? "is-active" : ""}
                key={color}
                onClick={() => setPantsColor(color)}
                style={{ backgroundColor: color }}
                title={label}
                type="button"
              />
            ))}
          </div>
        </div>
      </div>

      <p>{previewCopy[status]}</p>
      <small>현재는 체형과 옷 조합을 확인하는 3D 데모이며, 실제 핏은 생성 이미지와 다를 수 있어요.</small>
    </section>
  );
};

export default MannequinPreview;
