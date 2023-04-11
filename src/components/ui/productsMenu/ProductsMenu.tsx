import React from "react";
import cn from "classnames";

import { ProductType } from "@/types";

import ProductCard from "../productCard/ProductCard";

import styles from "./ProductsMenu.module.scss";

type Props = {
  products: ProductType[];
  className?: string;
};

const ProductsMenu: React.FC<Props> = ({ products, className }) => {
  const menuClasses = cn(styles.menu, className);

  return (
    <div className={menuClasses}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsMenu;
