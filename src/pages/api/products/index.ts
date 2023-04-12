import type { NextApiRequest, NextApiResponse } from "next";
import type { ProductType } from "@/types";

import { PRODUCTS } from "@/data";

function handler(req: NextApiRequest, res: NextApiResponse<ProductType[]>) {
  return res.status(200).json(PRODUCTS);
}

export default handler;
