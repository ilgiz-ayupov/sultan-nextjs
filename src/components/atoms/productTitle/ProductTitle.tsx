import React from "react";
import cn from "classnames";
import Link from "next/link";

import styles from "./ProductTitle.module.scss";

type Props = {
  id: number;
  name: string;
  brand: string;
  className?: string;
};

const ProductTitle: React.FC<Props> = ({ id, name, brand, className }) => {
  const titleClasses = cn(styles.title, className);

  return (
    <h3 className={titleClasses}>
      <Link href={`/product/${id}`}>
        <strong className={styles.title__brand}>{brand}</strong>
        <span className={styles.title__name}>{name}</span>
      </Link>
    </h3>
  );
};

export default ProductTitle;
