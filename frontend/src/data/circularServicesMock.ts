import type { ClothingCategory } from "../types";

export type ClosetVisibility = "PRIVATE" | "FRIENDS" | "PUBLIC";

export type VisibilityClosetItem = {
  id: number;
  name: string;
  category: ClothingCategory;
  categoryLabel: string;
  color: string;
  tags: string[];
  imageUrl: string;
  wearCount: number;
  visibility: ClosetVisibility;
  isSelected: boolean;
};

export const visibilityClosetItems: VisibilityClosetItem[] = [
  {
    id: 1,
    name: "크림 코튼 셔츠",
    category: "top",
    categoryLabel: "상의",
    color: "크림",
    tags: ["심플", "데일리"],
    imageUrl: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=500&q=80",
    wearCount: 12,
    visibility: "PUBLIC",
    isSelected: false,
  },
  {
    id: 2,
    name: "세이지 가디건",
    category: "outer",
    categoryLabel: "아우터",
    color: "세이지",
    tags: ["차분한", "봄"],
    imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&w=500&q=80",
    wearCount: 8,
    visibility: "FRIENDS",
    isSelected: false,
  },
  {
    id: 3,
    name: "연청 데님 팬츠",
    category: "bottom",
    categoryLabel: "하의",
    color: "연청",
    tags: ["캐주얼", "데일리"],
    imageUrl: "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80",
    wearCount: 21,
    visibility: "PUBLIC",
    isSelected: false,
  },
  {
    id: 4,
    name: "블랙 클래식 로퍼",
    category: "shoes",
    categoryLabel: "신발",
    color: "블랙",
    tags: ["클래식", "단정한"],
    imageUrl: "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=500&q=80",
    wearCount: 15,
    visibility: "FRIENDS",
    isSelected: false,
  },
  {
    id: 5,
    name: "올리브 크로스백",
    category: "bag",
    categoryLabel: "가방",
    color: "올리브",
    tags: ["빈티지", "포인트"],
    imageUrl: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=500&q=80",
    wearCount: 6,
    visibility: "PRIVATE",
    isSelected: false,
  },
  {
    id: 6,
    name: "체크 울 스커트",
    category: "bottom",
    categoryLabel: "하의",
    color: "브라운",
    tags: ["빈티지", "가을"],
    imageUrl: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=500&q=80",
    wearCount: 4,
    visibility: "PRIVATE",
    isSelected: false,
  },
  {
    id: 7,
    name: "실버 체인 목걸이",
    category: "accessory",
    categoryLabel: "악세서리",
    color: "실버",
    tags: ["미니멀", "포인트"],
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=500&q=80",
    wearCount: 9,
    visibility: "PRIVATE",
    isSelected: false,
  },
  {
    id: 8,
    name: "브라운 워크 재킷",
    category: "outer",
    categoryLabel: "아우터",
    color: "브라운",
    tags: ["워크웨어", "빈티지"],
    imageUrl: "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80",
    wearCount: 3,
    visibility: "PRIVATE",
    isSelected: false,
  },
];

export const mannerProfile = {
  nickname: "느린옷장",
  profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  temperature: 37.8,
  completedTrades: 12,
  responseRate: 92,
  promiseRate: 100,
  reports: 0,
  reviews: [
    { id: 1, text: "약속 시간에 맞춰 와주셨어요.", date: "2026.06.12", type: "교환" },
    { id: 2, text: "옷 상태가 설명과 같았어요.", date: "2026.05.28", type: "중고거래" },
    { id: 3, text: "응답이 빨라서 거래가 편했어요.", date: "2026.05.10", type: "플리마켓" },
  ],
};

export type CollectionItem = {
  id: number;
  name: string;
  category: string;
  imageUrl: string;
  lastWorn: string;
  daysUnworn: number;
  condition: "좋음" | "보통" | "손상 있음";
  selected: boolean;
};

export const unwornItems: CollectionItem[] = [
  ["베이지 셔츠", "상의", "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80", "2026.02.02", 134],
  ["네이비 슬랙스", "하의", "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=500&q=80", "2026.03.08", 100],
  ["브라운 재킷", "아우터", "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=500&q=80", "2026.01.12", 155],
  ["화이트 스니커즈", "신발", "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=500&q=80", "2026.03.22", 86],
  ["캔버스 토트백", "가방", "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=500&q=80", "2026.02.18", 118],
  ["그레이 후드", "상의", "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80", "2026.03.01", 107],
].map(([name, category, imageUrl, lastWorn, daysUnworn], index) => ({
  id: index + 1,
  name: String(name),
  category: String(category),
  imageUrl: String(imageUrl),
  lastWorn: String(lastWorn),
  daysUnworn: Number(daysUnworn),
  condition: index === 2 ? "손상 있음" : index === 3 ? "보통" : "좋음",
  selected: index < 5,
}));

export const fleaMarketEvent = {
  title: "초여름 순환 플리마켓",
  date: "2026.06.28 토요일",
  place: "서울 성수동 커뮤니티홀",
  capacity: 20,
  remaining: 6,
  fee: "무료",
  status: "모집 중",
  imageUrl: "https://images.unsplash.com/photo-1528698827591-e19ccd7bc23d?auto=format&fit=crop&w=1000&q=80",
};

export const fleaParticipationTypes = [
  { id: "seller", label: "판매자로 참여", description: "입지 않는 옷을 직접 판매해요." },
  { id: "exchange", label: "교환 부스로 참여", description: "옷을 가져와 서로 교환해요." },
  { id: "visitor", label: "방문자로 참여", description: "둘러보고 필요한 옷을 찾아요." },
] as const;

export const rewardPolicy = [
  { activity: "안 입는 옷 수거 완료", points: 500 },
  { activity: "중고거래 완료", points: 300 },
  { activity: "코디 게시글 작성", points: 100 },
  { activity: "플리마켓 참여", points: 700 },
  { activity: "내 옷으로 코디 추천 사용", points: 50 },
  { activity: "옷장 등록 5개 완료", points: 100 },
];

export const rewardData = {
  currentPoints: 3250,
  monthlyEarned: 850,
  availablePoints: 3250,
  expiringPoints: 300,
  level: "새싹",
  nextLevel: "나무",
  nextLevelPoint: 4000,
  histories: [
    { id: 1, date: "06.14", activity: "의류 수거 신청 완료", points: 500, status: "적립" },
    { id: 2, date: "06.11", activity: "코디 게시글 작성", points: 100, status: "적립" },
    { id: 3, date: "06.08", activity: "AI 착용 미리보기 사용", points: -300, status: "사용" },
    { id: 4, date: "06.04", activity: "중고거래 완료", points: 300, status: "적립" },
    { id: 5, date: "06.01", activity: "내 옷으로 코디 추천", points: 50, status: "적립" },
  ],
  availableUses: ["AI 착용 크레딧 교환", "플리마켓 참가 혜택", "수거 배송비 할인", "친환경 상품 할인"],
  monthlyReport: [
    ["다시 입은 옷", "12벌"],
    ["수거 신청", "1회"],
    ["중고거래", "2회"],
    ["새 옷 없는 코디", "8개"],
  ],
};

