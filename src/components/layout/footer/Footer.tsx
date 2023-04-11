import React from "react";
import Link from "next/link";

import { useMediaQuery } from "@/hooks";

import { ButtonWithIcon, Logo } from "@/components/atoms";
import { SubscribeForm, CallCenterCard } from "@/components/ui";

import BankCardsMenu from "./bankCardsMenu/BankCardsMenu";

import CatalogIcon from "@/assets/svg/catalog.svg";
import styles from "./Footer.module.scss";

const Footer: React.FC = () => {
  const isTableScreen = useMediaQuery({ minWidth: 768 });

  return (
    <footer>
      <div className={styles.footer}>
        <div className="container">
          <div className={styles.footer__row}>
            <div className={styles.firstCol}>
              <div className={styles.firstCol__header}>
                <Logo className={styles.firstCol__logo} />
                {!isTableScreen && (
                  <ButtonWithIcon
                    className={styles.firstCol__catalogBtn}
                    variant="primary"
                    tag="link"
                    href="/catalog"
                    icon={<CatalogIcon />}
                  >
                    Каталог
                  </ButtonWithIcon>
                )}
              </div>

              <p className={styles.firstCol__desc}>
                Компания «Султан» — снабжаем
                <br />
                розничные магазины товарами
                <br />
                &quot;под ключ&quot; в Кокчетаве и Акмолинской
                <br />
                области
              </p>

              <SubscribeForm />
            </div>

            <div className={styles.col}>
              <h4 className={styles.col__title}>Меню сайта:</h4>
              <ul className={styles.col__menu}>
                <li className={styles.col__item}>
                  <Link className={styles.col__link} href="/about-us">
                    О компании
                  </Link>
                </li>
                <li className={styles.col__item}>
                  <Link className={styles.col__link} href="/delivery">
                    Доставка и оплата
                  </Link>
                </li>
                <li className={styles.col__item}>
                  <Link className={styles.col__link} href="/return">
                    Возврат
                  </Link>
                </li>
                <li className={styles.col__item}>
                  <Link className={styles.col__link} href="/contacts">
                    Контакты
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.col__title}>Категории:</h4>
              <ul className={styles.col__menu}>
                <li className={styles.col__item}>
                  <Link className={styles.col__link} href="/">
                    Бытовая химия
                  </Link>
                </li>
                <li className={styles.col__item}>
                  <Link className={styles.col__link} href="/">
                    Косметика и гигиена
                  </Link>
                </li>
                <li className={styles.col__item}>
                  <Link className={styles.col__link} href="/">
                    Товары для дома
                  </Link>
                </li>
                <li className={styles.col__item}>
                  <Link className={styles.col__link} href="/">
                    Товары для детей и мам
                  </Link>
                </li>
                <li className={styles.col__item}>
                  <Link className={styles.col__link} href="/">
                    Посуда
                  </Link>
                </li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.col__title}>Контакты:</h4>
              <ul className={styles.col__menu}>
                <li className={styles.col__item}>
                  <CallCenterCard className={styles.footer__callCenterCard} />
                </li>
                <li className={styles.col__item}>
                  <div className={styles.col__email}>
                    <strong>opt.sultan@mail.ru</strong>
                    <p>На связи в любое время</p>
                  </div>
                </li>
                <li className={styles.col__item}>
                  <BankCardsMenu />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
