import React from "react";

import VisaIcon from "@/assets/svg/visa.svg";
import MasterCardIcon from "@/assets/svg/master-card.svg";

import styles from "./BankCardsMenu.module.scss";

const BankCardsMenu = () => {
  return (
    <div className={styles.menu}>
      <div>
        <VisaIcon />
      </div>
      <div>
        <MasterCardIcon />
      </div>
    </div>
  );
};

export default BankCardsMenu;
