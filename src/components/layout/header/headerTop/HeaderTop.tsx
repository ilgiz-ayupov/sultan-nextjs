import React from "react";
import cn from "classnames";
import Link from "next/link";

import { Divider } from "@/components/atoms";

import LocationIcon from "@/assets/svg/location.svg";
import MailIcon from "@/assets/svg/mail.svg";
import styles from "./HeaderTop.module.scss";

const HeaderTop = () => {
  return (
    <div className={styles.headerTop}>
      <div className="container">
        <div className={styles.headerTop__row}>
          <ul className={styles.addresses}>
            <li className={styles.addresses__item}>
              <LocationIcon />
              <div className={styles.addresses__box}>
                <div className={styles.addresses__address}>
                  г. Кокчетав, ул. Ж. Ташенова 129Б
                </div>
                <div className={styles.addresses__desc}>(Рынок Восточный)</div>
              </div>
            </li>

            <Divider
              className={cn(
                styles.headerTop__divider,
                styles.addresses__divider
              )}
              variant="vertical"
            />

            <li className={styles.addresses__item}>
              <MailIcon />
              <div className={styles.addresses__box}>
                <div className={styles.addresses__address}>
                  opt.sultan@mail.ru
                </div>
                <div className={styles.addresses__desc}>
                  На связи в любое время
                </div>
              </div>
            </li>
          </ul>

          <nav>
            <ul className={styles.nav}>
              <li className={styles.nav__item}>
                <Link className={styles.nav__link} href="/about-us">
                  О компании
                </Link>
              </li>
              <Divider
                className={cn(styles.headerTop__divider, styles.nav__divider)}
                variant="vertical"
              />
              <li className={styles.nav__item}>
                <Link className={styles.nav__link} href="/about-us">
                  Доставка и оплата
                </Link>
              </li>
              <Divider
                className={cn(styles.headerTop__divider, styles.nav__divider)}
                variant="vertical"
              />
              <li className={styles.nav__item}>
                <Link className={styles.nav__link} href="/about-us">
                  Возврат
                </Link>
              </li>
              <Divider
                className={cn(styles.headerTop__divider, styles.nav__divider)}
                variant="vertical"
              />
              <li className={styles.nav__item}>
                <Link className={styles.nav__link} href="/about-us">
                  Контакты
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
