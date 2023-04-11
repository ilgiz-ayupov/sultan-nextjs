import { NextApiRequest, NextApiResponse } from "next";

import { ProductType } from "@/types";

import { PRODUCTS } from "@/data";

function handler(req: NextApiRequest, res: NextApiResponse<ProductType | {}>) {
  const id = parseInt(req.query.id as string, 10);

  const product = PRODUCTS.find((product) => product.id === id) ?? {};
  return res.status(200).json(product);
}

export default handler;
