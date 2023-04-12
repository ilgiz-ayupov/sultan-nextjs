import type { NextApiRequest, NextApiResponse } from "next";
import type { ProductType } from "@/types";

import { PRODUCTS } from "@/data";

function handler(req: NextApiRequest, res: NextApiResponse<ProductType[]>) {
  const { limit } = req.query;

  if (limit) {
    res.status(200).json(PRODUCTS.slice(0, parseInt(limit as string, 10)));
  } else {
    return res.status(200).json(PRODUCTS);
  }
}

export default handler;
