import React from "react";
import cn from "classnames";

import { CategoryType } from "@/types";

import CategoryCard from "../categoryCard/CategoryCard";

import styles from "./CategoriesMenu.module.scss";

type Props = {
  categories: CategoryType[];
  className?: string;
};

const CategoriesMenu: React.FC<Props> = ({ categories, className }) => {
  const menuClasses = cn(styles.menu, className);

  return (
    <div className={menuClasses}>
      {categories.map((category) => (
        <CategoryCard key={category.id} category={category} />
      ))}
    </div>
  );
};

export default CategoriesMenu;
