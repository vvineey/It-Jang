const FACE_PREVIEW_SIZE = 1024;

const loadImage = (file: File) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);
      resolve(image);
    };
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("사진을 불러오지 못했어요."));
    };
    image.src = objectUrl;
  });

export const createFacePreviewDataUrl = async (file: File) => {
  const image = await loadImage(file);
  const sourceSize = Math.min(image.naturalWidth, image.naturalHeight);
  const sourceX = (image.naturalWidth - sourceSize) / 2;
  const sourceY = Math.max(0, (image.naturalHeight - sourceSize) / 2 - sourceSize * 0.04);
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d", { alpha: false });

  if (!context) {
    throw new Error("사진을 처리하지 못했어요.");
  }

  canvas.width = FACE_PREVIEW_SIZE;
  canvas.height = FACE_PREVIEW_SIZE;
  context.imageSmoothingEnabled = true;
  context.imageSmoothingQuality = "high";
  context.drawImage(
    image,
    sourceX,
    sourceY,
    sourceSize,
    sourceSize,
    0,
    0,
    FACE_PREVIEW_SIZE,
    FACE_PREVIEW_SIZE,
  );

  return canvas.toDataURL("image/jpeg", 0.94);
};
