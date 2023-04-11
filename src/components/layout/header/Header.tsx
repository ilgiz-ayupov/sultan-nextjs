import React from "react";

import { useMediaQuery } from "@/hooks";

import { Logo, IconButton, ButtonWithIcon } from "@/components/atoms";
import { CartButton, SearchForm, CallCenterCard } from "@/components/ui";

import HeaderTop from "./headerTop/HeaderTop";
import HeaderBottom from "./headerBottom/HeaderBottom";

import MenuIcon from "@/assets/svg/menu.svg";
import CatalogIcon from "@/assets/svg/catalog.svg";
import styles from "./Header.module.scss";

const Header = () => {
  const isTableScreen = useMediaQuery({ minWidth: 768 });
  const isLaptopScreen = useMediaQuery({ minWidth: 1024 });

  return (
    <header>
      {isLaptopScreen && <HeaderTop />}

      <div className={styles.header}>
        <div className="container">
          <div className={styles.header__row}>
            {!isTableScreen && (
              <IconButton
                className={styles.header__menuBtn}
                variant="primary"
                tag="button"
                type="button"
              >
                <MenuIcon />
              </IconButton>
            )}

            <Logo className={styles.header__logo} />

            {isLaptopScreen && (
              <ButtonWithIcon
                className={styles.header__catalogBtn}
                variant="primary"
                icon={<CatalogIcon />}
                tag="link"
                href="/catalog"
              >
                Каталог
              </ButtonWithIcon>
            )}

            {isTableScreen && (
              <SearchForm className={styles.header__searchForm} />
            )}

            {isLaptopScreen && (
              <CallCenterCard
                className={styles.header__callCenterCard}
              />
            )}

            <CartButton />
          </div>
        </div>
      </div>
      {!isTableScreen && <HeaderBottom />}
    </header>
  );
};

export default Header;
