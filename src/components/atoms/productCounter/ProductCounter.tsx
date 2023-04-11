import React from "react";

import styles from "./ProductCounter.module.scss";

type Props = {
  productId: number;
  qty: number;
  setQtyHandler: (productId: number, qty: number) => void;
};

const ProductCounter: React.FC<Props> = ({ productId, qty, setQtyHandler }) => {
  return (
    <div className={styles.counter}>
      <button
        className={styles.counter__btn}
        onClick={() => setQtyHandler(productId, qty - 1)}
      >
        -
      </button>
      <span className={styles.counter__output}>{qty}</span>
      <button
        className={styles.counter__btn}
        onClick={() => setQtyHandler(productId, qty + 1)}
      >
        +
      </button>
    </div>
  );
};

export default ProductCounter;
