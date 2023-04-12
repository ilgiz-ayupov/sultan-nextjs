import type { NextApiRequest, NextApiResponse } from "next";
import type { CategoryType } from "@/types/CategoryType";

import { CATEGORIES } from "@/data";

function handler(req: NextApiRequest, res: NextApiResponse<CategoryType[]>) {
  res.status(200).json(CATEGORIES);
}

export default handler;
