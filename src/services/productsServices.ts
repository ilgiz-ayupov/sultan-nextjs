import { ProductType } from "@/types";

export const getProducts = async (limit?: number) => {
  try {
    const response = await fetch(`${process.env.API_HOST}/products`);
    const products: ProductType[] = await response.json();
    return limit ? products.slice(0, limit) : products;
  } catch {
    return [];
  }
};

export const getProduct = async (id: number) => {
  try {
    const response = await fetch(`${process.env.API_HOST}/product/${id}`);
    const product = await response.json();
    return product;
  } catch {
    return undefined;
  }
};
