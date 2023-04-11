import React from "react";
import cn from "classnames";

import type { CartProductType } from "@/types";

import CartProductCard from "../cartProductCard/CartProductCard";

import styles from "./CartProductsMenu.module.scss";

type Props = {
  cartProducts: CartProductType[];
  className?: string;
};

const CartProductsMenu: React.FC<Props> = ({ cartProducts, className }) => {
  const menuClasses = cn(styles.menu, className);

  return (
    <div className={menuClasses}>
      {cartProducts.map((cartProduct) => (
        <CartProductCard key={cartProduct.id} cartProduct={cartProduct} />
      ))}
    </div>
  );
};

export default CartProductsMenu;
