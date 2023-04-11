import React from "react";
import Link from "next/link";

import { Divider } from "@/components/atoms";

import CatalogIcon from "@/assets/svg/catalog.svg";
import SearchIcon from "@/assets/svg/search.svg";

import styles from "./HeaderBottom.module.scss";

const HeaderBottom = () => {
  return (
    <div className={styles.headerBottom}>
      <div className={styles.headerBottom__row}>
        <Link className={styles.headerBottom__btn} href="/catalog">
          <CatalogIcon />
          <span>Каталог</span>
        </Link>
        <Divider className={styles.headerBottom__divider} variant="vertical" />
        <button className={styles.headerBottom__btn}>
          <SearchIcon />
          <span>Поиск</span>
        </button>
      </div>
    </div>
  );
};

export default HeaderBottom;
