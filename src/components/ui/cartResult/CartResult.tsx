import React from "react";
import cn from "classnames";

import { Button } from "@/components/atoms";

import styles from "./CartResult.module.scss";

type Props = {
  totalAmount: number;
  className?: string;
};

const CartResult: React.FC<Props> = ({ totalAmount, className }) => {
  const resultClasses = cn(styles.cartResult, className);

  return (
    <div className={resultClasses}>
      <Button
        className={styles.cartResult__orderBtn}
        variant="primary"
        tag="link"
        href="/make-order"
      >
        Оформить заказ
      </Button>

      <div className={styles.cartResult__totalAmount}>
        {totalAmount.toFixed(2)} ₸
      </div>
    </div>
  );
};

export default CartResult;
