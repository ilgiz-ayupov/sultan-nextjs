import type { NextApiRequest, NextApiResponse } from "next";
import type { CategoryType } from "@/types/CategoryType";

import { CATEGORIES } from "@/data";

function handler(req: NextApiRequest, res: NextApiResponse<CategoryType[]>) {
  const { limit } = req.query;
  if (limit) {
    res.status(200).json(CATEGORIES.slice(0, parseInt(limit as string, 10)));
  } else {
    res.status(200).json(CATEGORIES);
  }
}

export default handler;
