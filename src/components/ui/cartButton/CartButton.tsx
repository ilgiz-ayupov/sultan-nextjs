import React from "react";
import cn from "classnames";
import Link from "next/link";

import { useMediaQuery, useAppSelector } from "@/hooks";
import { selectCart } from "@/store/slices/cartSlice/cartSlice";

import { Badge } from "@/components/atoms";

import CartIcon from "@/assets/svg/cart.svg";
import styles from "./CartButton.module.scss";

type Props = {
  className?: string;
};

const CartButton: React.FC<Props> = ({ className }) => {
  const isTableScreen = useMediaQuery({ minWidth: 768 });
  const cart = useAppSelector(selectCart);

  const btnClasses = cn(styles.cartBtn, className);

  return (
    <Link className={btnClasses} href="/cart">
      <div className={styles.cartBtn__iconBox}>
        <CartIcon />
        {cart.cartProducts.length > 0 && (
          <Badge
            className={styles.cartBtn__badge}
            content={cart.totalQty}
            variant="accent"
            rounded="full"
          />
        )}
      </div>
      {isTableScreen && cart.totalAmount > 0 && (
        <div className={styles.cartBtn__info}>
          <span>Корзина</span>
          <strong>{cart.totalAmount.toFixed(2)} ₸</strong>
        </div>
      )}
    </Link>
  );
};

export default CartButton;
