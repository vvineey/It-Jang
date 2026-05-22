export type ClothingCategory = "top" | "bottom" | "outer" | "shoes" | "bag" | "accessory";

export type ClothingSource = "owned" | "secondhand" | "new";

export type ClothingItem = {
  id: number;
  name: string;
  category: ClothingCategory;
  brand: string;
  color: string;
  season: string[];
  tags: string[];
  imageUrl: string;
  wearCount: number;
  lastWornAt: string;
  source: ClothingSource;
};

export type RecommendationGroup = {
  category: ClothingCategory;
  label: string;
  reason: string;
  items: ClothingItem[];
};

export type CommunityPost = {
  id: number;
  title: string;
  category: ClothingCategory;
  price: string;
  region: string;
  status: string;
  imageUrl: string;
  tags: string[];
};

export type SelectOption = {
  value: string;
  label: string;
};
