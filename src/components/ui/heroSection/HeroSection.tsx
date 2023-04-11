import React from "react";
import cn from "classnames";
import Image from "next/image";

import { useMediaQuery } from "@/hooks";

import { Section, Button } from "@/components/atoms";

import heroMobileBg from "@/assets/images/hero-section__mobile-bg.jpg";
import heroBg from "@/assets/images/hero-section__bg.jpg";
import styles from "./HeroSection.module.scss";

type Props = {
  id: string;
  className?: string;
};

const HeroSection: React.FC<Props> = ({ id, className }) => {
  const isTableScreen = useMediaQuery({ minWidth: 768 });

  const heroClasses = cn(styles.hero, className);

  return (
    <Section className={styles.heroSection} id={id}>
      <div className={heroClasses}>
        {!isTableScreen ? (
          <Image
            className={styles.hero__bg}
            src={heroMobileBg}
            width={768}
            height={504}
            alt="hero bg"
          />
        ) : (
          <Image
            className={styles.hero__bg}
            src={heroBg}
            width={1920}
            height={796}
            alt="hero bg"
          />
        )}

        <div className="container">
          <div className={styles.hero__content}>
            <h1 className={styles.hero__title}>
              Бытовая химия, <br /> косметика <br /> и хозтовары
            </h1>
            <p className={styles.hero__desc}>оптом по кокчетаву и области</p>

            {isTableScreen && (
              <Button
                className={styles.hero__catalogBtn}
                variant="primary"
                tag="link"
                href="/link"
              >
                В каталог
              </Button>
            )}
          </div>
        </div>
      </div>

      {!isTableScreen && (
        <div className="container">
          <ul className={styles.benefits}>
            <li className={styles.benefits__item}>
              <div className={styles.benefits__marker}>+</div>
              <div className={styles.benefits__text}>
                Только самые выгодные предложения
              </div>
            </li>
            <li className={styles.benefits__item}>
              <div className={styles.benefits__marker}>+</div>
              <div className={styles.benefits__text}>
                Бесплатная доставка по{" "}
                <strong>
                  Кокчетаву от <span className="price">10 тыс ₸</span>
                </strong>
              </div>
            </li>
          </ul>
        </div>
      )}
    </Section>
  );
};

export default HeroSection;
