import type { NextApiHandler, NextApiResponse } from "next";
import type { CategoryType } from "@/types";

import { CATEGORIES } from "@/data";

const handler: NextApiHandler = (
  req,
  res: NextApiResponse<CategoryType | {}>
) => {
  const { slug } = req.query;
  const category = CATEGORIES.find((category) => category.slug === slug) ?? {};

  return res.status(200).json(category);
};

export default handler;
