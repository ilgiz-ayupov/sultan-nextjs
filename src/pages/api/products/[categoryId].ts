import { NextApiHandler, NextApiResponse } from "next";

import { ProductType } from "@/types";
import { PRODUCTS } from "@/data";

const handler: NextApiHandler = (req, res: NextApiResponse<ProductType[]>) => {
  const categoryId = parseInt(req.query.categoryId as string, 10);

  const products = PRODUCTS.filter(
    (product) => product.categoryId === categoryId
  );
  return res.status(200).json(products);
};

export default handler;
