import { ProductType } from "@/types";

export const PRODUCTS: ProductType[] = [
  {
    id: 1,
    categoryId: 1,
    name: "Ср-во для мытья посуды Апельсин+мята",
    brand: "AOS",
    status: "isPopular",
    producerName: "Нэфис",
    barcode: "4604049097548",
    price: 48.75,
    img: "/assets/images/products/product-1.png",
    volume: {
      qty: "450",
      unit: "мл",
    },
  },
  {
    id: 2,
    categoryId: 1,
    name: "Средство для мытья посуды Crystal",
    brand: "AOS",
    status: "isPopular",
    producerName: "Нэфис",
    barcode: "4604049097548",
    price: 48.75,
    img: "/assets/images/products/product-2.png",
    volume: {
      qty: "450",
      unit: "мл",
    },
  },
  {
    id: 3,
    categoryId: 1,
    name: "Автомат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник",
    brand: "ARIEL",
    status: "isPopular",
    producerName: "Нэфис",
    barcode: "4604049097548",
    price: 48.75,
    img: "/assets/images/products/product-3.png",
    volume: {
      qty: "15X28.8",
      unit: "г",
    },
  },
  {
    id: 4,
    categoryId: 1,
    name: "Порошок стиральный Автомат 100 пятен COMPACT",
    brand: "BIMAX",
    status: "isPopular",
    producerName: "Нэфис",
    barcode: "4604049097548",
    price: 48.75,
    img: "/assets/images/products/product-4.png",
    volume: {
      qty: "1500",
      unit: "г",
    },
  },
];
