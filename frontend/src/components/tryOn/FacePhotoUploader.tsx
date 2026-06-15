import { Camera, ImagePlus, Loader2, RotateCcw, Trash2 } from "lucide-react";
import { useRef, useState } from "react";
import { createFacePreviewDataUrl } from "./facePhotoUtils";

type FacePhotoUploaderProps = {
  autoRotate: boolean;
  facePhotoUrl: string | null;
  onAutoRotateChange: (nextValue: boolean) => void;
  onPhotoChange: (photoUrl: string | null) => void;
};

const MAX_FILE_SIZE = 8 * 1024 * 1024;

const FacePhotoUploader = ({
  autoRotate,
  facePhotoUrl,
  onAutoRotateChange,
  onPhotoChange,
}: FacePhotoUploaderProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [error, setError] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePhotoChange = async (file?: File) => {
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("이미지 파일만 선택할 수 있어요.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError("8MB 이하 사진을 선택해주세요.");
      return;
    }

    setError("");
    setIsProcessing(true);

    try {
      onPhotoChange(await createFacePreviewDataUrl(file));
    } catch (photoError) {
      setError(photoError instanceof Error ? photoError.message : "사진을 불러오지 못했어요.");
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <section className="face-photo-control">
      <div className="face-photo-control__copy">
        {facePhotoUrl ? <img alt="아바타에 적용할 얼굴 사진" src={facePhotoUrl} /> : null}
        <div>
          <span>내 얼굴로 미리보기</span>
          <p>{facePhotoUrl ? "사진을 선명하게 다듬어 아바타에 적용했어요." : "정면 사진을 넣으면 3D 아바타 얼굴에 바로 반영돼요."}</p>
        </div>
      </div>
      <div className="face-photo-control__actions">
        <button
          className="face-photo-button"
          disabled={isProcessing}
          onClick={() => inputRef.current?.click()}
          type="button"
        >
          {isProcessing ? (
            <Loader2 aria-hidden className="tryon-spin" size={16} />
          ) : facePhotoUrl ? (
            <Camera aria-hidden size={16} />
          ) : (
            <ImagePlus aria-hidden size={16} />
          )}
          {isProcessing ? "사진 다듬는 중" : facePhotoUrl ? "사진 바꾸기" : "얼굴 사진 추가"}
        </button>
        {facePhotoUrl ? (
          <button
            aria-label="얼굴 사진 제거"
            className="face-photo-icon-button"
            onClick={() => {
              setError("");
              onPhotoChange(null);
            }}
            title="얼굴 사진 제거"
            type="button"
          >
            <Trash2 aria-hidden size={16} />
          </button>
        ) : null}
        <button
          aria-pressed={autoRotate}
          className={`face-photo-icon-button${autoRotate ? " is-active" : ""}`}
          onClick={() => onAutoRotateChange(!autoRotate)}
          title={autoRotate ? "자동 회전 멈추기" : "자동 회전 시작"}
          type="button"
        >
          <RotateCcw aria-hidden size={16} />
        </button>
      </div>
      <input
        accept="image/png,image/jpeg,image/webp"
        aria-label="얼굴 사진 선택"
        className="face-photo-input"
        onChange={async (event) => {
          await handlePhotoChange(event.target.files?.[0]);
          event.target.value = "";
        }}
        ref={inputRef}
        type="file"
      />
      <small className={error ? "is-error" : ""}>{error || "사진은 이 기기에서만 미리보기에 사용돼요."}</small>
    </section>
  );
};

export default FacePhotoUploader;
