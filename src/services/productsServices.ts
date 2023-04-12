import { ProductType } from "@/types";

export const getProducts = async (limit?: number) => {
  const url = new URL(`${process.env.API_HOST}/products`);
  if (limit) {
    url.searchParams.set("limit", String(limit));
  }

  try {
    const response = await fetch(url);
    const products: ProductType[] = await response.json();
    return products;
  } catch {
    return [];
  }
};

export const getProduct = async (id: number) => {
  try {
    const response = await fetch(`${process.env.API_HOST}/product/${id}`);
    const product: ProductType = await response.json();
    return product;
  } catch {
    return undefined;
  }
};

export const getProductsByCategory = async (
  categoryId: number,
  limit?: number
) => {
  const url = new URL(`${process.env.API_HOST}/products/${categoryId}`);
  if (limit) {
    url.searchParams.set("limit", String(limit));
  }

  try {
    const response = await fetch(url);
    const products: ProductType[] = await response.json();
    return products;
  } catch {
    return [];
  }
};
