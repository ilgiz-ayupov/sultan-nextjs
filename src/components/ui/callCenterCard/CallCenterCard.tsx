import React from "react";
import cn from "classnames";
import Link from "next/link";

import styles from "./CallCenterCard.module.scss";

type Props = {
  className?: string;
};

const CallCenterCard: React.FC<Props> = ({ className }) => {
  const cardClasses = cn(styles.card, className);

  return (
    <div className={cardClasses}>
      <div className={styles.card__phone}>+7 (777) 490-00-91</div>
      <div className={styles.card__worktime}>время работы: 9:00-20:00</div>
      <Link className={styles.card__call} href="tel:+7(777)490-00-91">
        Заказать звонок
      </Link>
    </div>
  );
};

export default CallCenterCard;
