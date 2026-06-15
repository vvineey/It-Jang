import type { ClothingCategory } from "../types";
import { outfitPosts } from "./mockData";

export type OutfitMatchStatus = "original" | "closet" | "similar" | "unavailable";
export type OutfitCopyStatus = "idle" | "loading" | "success" | "partial" | "missing-avatar";

export type OutfitCopyItem = {
  id: number;
  category: ClothingCategory;
  categoryLabel: string;
  original: {
    name: string;
    color: string;
    imageUrl: string;
  };
  matchStatus: OutfitMatchStatus;
  replacement?: {
    name: string;
    color: string;
    imageUrl: string;
    source: "내 옷장" | "동일 상품" | "유사 상품";
    similarity: number;
  };
};

export const outfitCopyItems: OutfitCopyItem[] = [
  {
    id: 1,
    category: "top",
    categoryLabel: "상의",
    original: {
      name: "화이트 오버핏 셔츠",
      color: "화이트",
      imageUrl:
        "https://images.unsplash.com/photo-1603252110485-7ba873bf42ab?auto=format&fit=crop&w=600&q=80",
    },
    matchStatus: "closet",
    replacement: {
      name: "크림 코튼 셔츠",
      color: "크림",
      imageUrl:
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=600&q=80",
      source: "내 옷장",
      similarity: 88,
    },
  },
  {
    id: 2,
    category: "bottom",
    categoryLabel: "하의",
    original: {
      name: "연청 스트레이트 데님",
      color: "라이트 블루",
      imageUrl:
        "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80",
    },
    matchStatus: "closet",
    replacement: {
      name: "워싱 데님 팬츠",
      color: "연청",
      imageUrl:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=600&q=80",
      source: "내 옷장",
      similarity: 91,
    },
  },
  {
    id: 3,
    category: "shoes",
    categoryLabel: "신발",
    original: {
      name: "빈티지 브라운 로퍼",
      color: "브라운",
      imageUrl:
        "https://images.unsplash.com/photo-1614252369475-531eba835eb1?auto=format&fit=crop&w=600&q=80",
    },
    matchStatus: "similar",
    replacement: {
      name: "클래식 블랙 로퍼",
      color: "블랙",
      imageUrl:
        "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=600&q=80",
      source: "유사 상품",
      similarity: 76,
    },
  },
  {
    id: 4,
    category: "bag",
    categoryLabel: "가방",
    original: {
      name: "올리브 미니 크로스백",
      color: "올리브",
      imageUrl:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=600&q=80",
    },
    matchStatus: "unavailable",
  },
];

export const copyScore = {
  overallMatchScore: 0.82,
  criteria: [
    { label: "내 옷장 대체", score: 20, maxScore: 20 },
    { label: "색상·스타일 유사도", score: 18, maxScore: 20 },
    { label: "빠진 아이템", score: 16, maxScore: 20 },
    { label: "계절·날씨 적합", score: 8, maxScore: 10 },
    { label: "원본 조합 유지", score: 20, maxScore: 30 },
  ],
};

export const getOutfitCopyPost = (postId?: string) => {
  const requestedPost = outfitPosts.find((post) => post.id === Number(postId));
  return requestedPost ?? outfitPosts[1];
};

export const copyPolicyNotice =
  "작성자의 얼굴, 체형, 비공개 옷장 정보는 사용하지 않고 내 아바타와 내 옷장만 활용해요.";

