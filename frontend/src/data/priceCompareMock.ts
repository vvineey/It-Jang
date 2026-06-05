export type PriceCompareProduct = {
  id: number;
  name: string;
  brand: string;
  category: string;
  color: string;
  imageUrl: string;
  closetMatchScore: number;
  isTracked: boolean;
};

export type PriceOffer = {
  id: number;
  platform: string;
  seller: string;
  title: string;
  imageUrl: string;
  price: number;
  shippingFee: number;
  couponAmount: number;
  finalPrice: number;
  couponAvailable: boolean;
  freeShipping: boolean;
  stock: string[];
  delivery: string;
  url: string;
  isLowest: boolean;
};

export type PriceHistoryPoint = {
  date: string;
  price: number;
};

export type ClosetMatchItem = {
  id: number;
  name: string;
  category: string;
  source: string;
  imageUrl: string;
};

export type SimilarProduct = {
  id: number;
  name: string;
  platform: string;
  imageUrl: string;
  finalPrice: number;
  badge: string;
};

export const priceCompareProduct: PriceCompareProduct = {
  id: 1,
  name: "오버핏 코튼 셔츠",
  brand: "MUSINSA STANDARD",
  category: "상의 / 셔츠",
  color: "화이트",
  imageUrl:
    "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
  closetMatchScore: 86,
  isTracked: false,
};

export const priceFilterGroups = {
  platforms: ["전체", "무신사", "29CM", "네이버쇼핑", "지그재그", "에이블리"],
  filters: ["가격대", "화이트", "M 사이즈", "배송비 포함", "무료배송", "새 상품", "중고 상품"],
  sorts: ["최종가 낮은 순", "판매가 낮은 순", "배송 빠른 순", "인기순"],
};

export const priceOffers: PriceOffer[] = [
  {
    id: 1,
    platform: "네이버쇼핑",
    seller: "그린스토어",
    title: "오버핏 코튼 셔츠 화이트",
    imageUrl:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=900&q=80",
    price: 32900,
    shippingFee: 3000,
    couponAmount: 0,
    finalPrice: 35900,
    couponAvailable: false,
    freeShipping: false,
    stock: ["S", "M", "L"],
    delivery: "2일 내 도착",
    url: "#",
    isLowest: true,
  },
  {
    id: 2,
    platform: "무신사",
    seller: "MUSINSA",
    title: "오버핏 코튼 셔츠",
    imageUrl:
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=900&q=80",
    price: 42900,
    shippingFee: 0,
    couponAmount: 3000,
    finalPrice: 39900,
    couponAvailable: true,
    freeShipping: true,
    stock: ["M", "L"],
    delivery: "내일 도착",
    url: "#",
    isLowest: false,
  },
  {
    id: 3,
    platform: "29CM",
    seller: "29CM",
    title: "Basic Cotton Shirt White",
    imageUrl:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=900&q=80",
    price: 42000,
    shippingFee: 3000,
    couponAmount: 0,
    finalPrice: 45000,
    couponAvailable: true,
    freeShipping: false,
    stock: ["S", "M"],
    delivery: "3일 내 도착",
    url: "#",
    isLowest: false,
  },
];

export const priceHistory: PriceHistoryPoint[] = [
  { date: "5/01", price: 42000 },
  { date: "5/05", price: 39900 },
  { date: "5/10", price: 37900 },
  { date: "5/18", price: 35900 },
  { date: "5/24", price: 35900 },
];

export const closetMatches: ClosetMatchItem[] = [
  {
    id: 1,
    name: "연청 데님",
    category: "하의",
    source: "내 옷장",
    imageUrl:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "검정 로퍼",
    category: "신발",
    source: "내 옷장",
    imageUrl:
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "네이비 가디건",
    category: "아우터",
    source: "내 옷장",
    imageUrl:
      "https://images.unsplash.com/photo-1615397587950-3cbb55f95f82?auto=format&fit=crop&w=900&q=80",
  },
];

export const similarProducts: SimilarProduct[] = [
  {
    id: 1,
    name: "화이트 셔츠 교환 가능",
    platform: "순환 옷장",
    imageUrl:
      "https://images.unsplash.com/photo-1603252110485-7ba873bf42ab?auto=format&fit=crop&w=900&q=80",
    finalPrice: 0,
    badge: "교환 가능",
  },
  {
    id: 2,
    name: "코튼 셔츠 중고",
    platform: "네이버쇼핑",
    imageUrl:
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=900&q=80",
    finalPrice: 24900,
    badge: "중고 추천",
  },
  {
    id: 3,
    name: "베이직 화이트 셔츠",
    platform: "무신사",
    imageUrl:
      "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=900&q=80",
    finalPrice: 31900,
    badge: "더 저렴해요",
  },
];
