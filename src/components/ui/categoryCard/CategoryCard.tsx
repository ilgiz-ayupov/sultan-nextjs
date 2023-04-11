import React from "react";
import cn from "classnames";
import Image from "next/image";
import Link from "next/link";

import { useMediaQuery } from "@/hooks";

import styles from "./CategoryCard.module.scss";
import { CategoryType } from "@/types/CategoryType";

type Props = {
  category: CategoryType;
  className?: string;
};

const CategoryCard: React.FC<Props> = ({ category, className }) => {
  const cardClasses = cn(styles.card, className);
  const isTableScreen = useMediaQuery({ minWidth: 768 });

  return (
    <div className={cardClasses}>
      <div className={styles.card__imgBox}>
        <Image
          className={styles.card__img}
          src={category.img}
          width={isTableScreen ? 190 : 130}
          height={isTableScreen ? 190 : 130}
          alt={category.name}
        />
      </div>
      <h3 className={styles.card__name}>
        <Link href={`/catalog/${category.slug}`}>{category.name}</Link>
      </h3>
    </div>
  );
};

export default CategoryCard;
