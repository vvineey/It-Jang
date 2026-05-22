import type {
  ClothingCategory,
  ClothingItem,
  CommunityPost,
  RecommendationGroup,
  SelectOption,
} from "../types";

export const categoryTabs: Array<{ key: ClothingCategory; label: string }> = [
  { key: "top", label: "상의" },
  { key: "bottom", label: "하의" },
  { key: "outer", label: "아우터" },
  { key: "shoes", label: "신발" },
  { key: "bag", label: "가방" },
  { key: "accessory", label: "악세서리" },
];

export const clothingItems: ClothingItem[] = [
  {
    id: 1,
    name: "세이지 린넨 셔츠",
    category: "top",
    brand: "it vintage",
    color: "세이지",
    season: ["봄", "여름"],
    tags: ["심플", "데이트"],
    imageUrl:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    wearCount: 12,
    lastWornAt: "2026-05-03",
    source: "owned",
  },
  {
    id: 2,
    name: "워싱 데님 팬츠",
    category: "bottom",
    brand: "slow closet",
    color: "인디고",
    season: ["사계절"],
    tags: ["캐주얼", "등교"],
    imageUrl:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
    wearCount: 24,
    lastWornAt: "2026-05-19",
    source: "owned",
  },
  {
    id: 3,
    name: "브라운 로퍼",
    category: "shoes",
    brand: "mood walk",
    color: "브라운",
    season: ["봄", "가을"],
    tags: ["빈티지", "면접"],
    imageUrl:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80",
    wearCount: 4,
    lastWornAt: "2026-02-14",
    source: "owned",
  },
  {
    id: 4,
    name: "올리브 캔버스 백",
    category: "bag",
    brand: "old market",
    color: "올리브",
    season: ["사계절"],
    tags: ["빈티지", "피크닉"],
    imageUrl:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80",
    wearCount: 6,
    lastWornAt: "2026-04-02",
    source: "owned",
  },
  {
    id: 5,
    name: "크림 니트 가디건",
    category: "outer",
    brand: "29 mood",
    color: "아이보리",
    season: ["봄", "가을"],
    tags: ["러블리", "심플"],
    imageUrl:
      "https://images.unsplash.com/photo-1615397587950-3cbb55f95f82?auto=format&fit=crop&w=900&q=80",
    wearCount: 2,
    lastWornAt: "2025-11-28",
    source: "owned",
  },
];

export const recommendationTags = [
  "데이트",
  "심플",
  "러블리",
  "비오는날",
  "등교",
  "면접",
  "피크닉",
  "꾸안꾸",
  "빈티지",
  "차분한",
];

export const recommendationGroups: RecommendationGroup[] = [
  {
    category: "top",
    label: "상의",
    reason: "선택한 태그와 오늘 날씨에 맞는 밝은 셔츠를 먼저 골랐어요.",
    items: [clothingItems[0]],
  },
  {
    category: "bottom",
    label: "하의",
    reason: "가지고 있는 데님이 세이지 톤과 잘 어울립니다.",
    items: [clothingItems[1]],
  },
  {
    category: "shoes",
    label: "신발",
    reason: "오래 안 신은 로퍼를 활용하면 빈티지한 무드가 살아나요.",
    items: [clothingItems[2]],
  },
  {
    category: "outer",
    label: "아우터",
    reason: "아침 저녁 기온 차이를 고려해 가벼운 가디건을 추천합니다.",
    items: [clothingItems[4]],
  },
];

export const profileBasics: SelectOption[] = [
  { value: "regular", label: "레귤러 핏" },
  { value: "loose", label: "루즈 핏" },
  { value: "slim", label: "슬림 핏" },
];

export const styleOptions = ["심플", "빈티지", "러블리", "스트릿", "미니멀", "클래식"];

export const communityPosts: CommunityPost[] = [
  {
    id: 1,
    title: "올리브 셔츠 교환 구해요",
    category: "top",
    price: "교환",
    region: "성북구",
    status: "거래 가능",
    imageUrl:
      "https://images.unsplash.com/photo-1603252110485-7ba873bf42ab?auto=format&fit=crop&w=900&q=80",
    tags: ["상의", "빈티지"],
  },
  {
    id: 2,
    title: "가죽 로퍼 240 판매",
    category: "shoes",
    price: "32,000원",
    region: "마포구",
    status: "예약 중",
    imageUrl:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=900&q=80",
    tags: ["신발", "클래식"],
  },
  {
    id: 3,
    title: "캔버스 숄더백",
    category: "bag",
    price: "18,000원",
    region: "동대문구",
    status: "거래 가능",
    imageUrl:
      "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?auto=format&fit=crop&w=900&q=80",
    tags: ["가방", "데일리"],
  },
];
