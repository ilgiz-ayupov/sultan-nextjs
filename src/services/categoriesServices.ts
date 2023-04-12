import { CategoryType } from "@/types";

export const getCategories = async (limit?: number) => {
  const url = new URL(`${process.env.API_HOST}/categories`);
  if (limit) {
    url.searchParams.set("limit", String(limit));
  }

  try {
    const response = await fetch(url);
    const categories: CategoryType[] = await response.json();

    return categories;
  } catch {
    return [];
  }
};

export const getCategory = async (slug: string) => {
  try {
    const response = await fetch(`${process.env.API_HOST}/category/${slug}`);
    const category: CategoryType = await response.json();

    return category;
  } catch {
    return undefined;
  }
};
