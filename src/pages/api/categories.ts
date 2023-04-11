import type { NextApiRequest, NextApiResponse } from "next";
import type { CategoryType } from "@/types/CategoryType";

function handler(req: NextApiRequest, res: NextApiResponse<CategoryType[]>) {
  res.status(200).json([
    {
      id: 1,
      name: "Бытовая химия",
      img: "/assets/images/categories/category-1.png",
      slug: "household-chemicals",
    },
    {
      id: 2,
      name: "Косметика и гигиена",
      img: "/assets/images/categories/category-2.png",
      slug: "cosmetics&hygiene",
    },
    {
      id: 3,
      name: "Товары для дома",
      img: "/assets/images/categories/category-3.png",
      slug: "household-goods",
    },
    {
      id: 4,
      name: "Товары для детей и мам",
      img: "/assets/images/categories/category-4.png",
      slug: "goods-children&mothers",
    },
    {
      id: 5,
      name: "Товары для дома",
      img: "/assets/images/categories/category-5.png",
      slug: "household-goods",
    },
  ]);
}

export default handler;
