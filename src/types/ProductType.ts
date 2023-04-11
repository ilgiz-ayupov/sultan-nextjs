export type ProductStatusType =
  | "isPopular"
  | "isNew"
  | "isDiscount"
  | "hasCashback"
  | "isBest"
  | null;

export type ProductVolumeType = {
  qty: string;
  unit: "мл" | "г";
};

export type ProductType = {
  id: number;
  categoryId: number;
  name: string;
  brand: string;
  status: ProductStatusType;
  producerName: string;
  barcode: string;
  price: number;
  img: string;
  volume: ProductVolumeType;
};
