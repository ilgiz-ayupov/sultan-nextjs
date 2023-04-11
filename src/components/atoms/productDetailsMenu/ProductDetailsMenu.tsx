import React from "react";
import cn from "classnames";

import styles from "./ProductDetailsMenu.module.scss";

type Item = {
  key: string;
  value: string;
};

type Props = {
  items: Item[];
  className?: string;
};

const ProductDetailsMenu: React.FC<Props> = ({ items, className }) => {
  const menuClasses = cn(styles.menu, className);

  return (
    <ul className={menuClasses}>
      {items.map((item) => (
        <li key={item.key} className={styles.menu__item}>
          <div className={styles.card}>
            <span className={styles.card__key}>{item.key}:</span>
            <span className={styles.card__value}>{item.value}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductDetailsMenu;
