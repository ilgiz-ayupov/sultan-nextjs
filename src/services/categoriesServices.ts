import { CategoryType } from "@/types";

export const getCategories = async (limit?: number) => {
  try {
    const response = await fetch(`${process.env.API_HOST}/categories`);
    const categories: CategoryType[] = await response.json();

    return limit ? categories.slice(0, limit) : categories;
  } catch {
    return [];
  }
};
