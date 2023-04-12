import { NextApiHandler, NextApiResponse } from "next";

import { ProductType } from "@/types";
import { PRODUCTS } from "@/data";

const handler: NextApiHandler = (
  req,
  res: NextApiResponse<ProductType[] | []>
) => {
  const { categoryId, limit } = req.query;

  let products: ProductType[];
  if (categoryId) {
    products = PRODUCTS.filter(
      (product) => product.categoryId === Number(categoryId)
    );
  } else {
    products = [];
  }

  if (limit) {
    products = products.slice(0, Number(limit));
  }

  return res.status(200).json(products);
};

export default handler;
