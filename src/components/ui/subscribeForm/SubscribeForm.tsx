import React from "react";
import cn from "classnames";

import { IconButton } from "@/components/atoms";

import ArrowRightIcon from "@/assets/svg/arrow-right.svg";
import styles from "./SubscribeForm.module.scss";

interface SubscribeFormProps {
  className?: string;
}

const SubscribeForm: React.FC<SubscribeFormProps> = ({ className }) => {
  const formClasses = cn(styles.form, className);

  return (
    <form className={formClasses}>
      <h5 className={styles.form__title}>Подпишись на скидки и акции</h5>
      <div className={styles.form__control}>
        <input
          className={styles.form__input}
          name="subscriber"
          type="email"
          placeholder="Введите ваш E-mail"
        />
        <IconButton
          className={styles.form__submitBtn}
          variant="primary"
          tag="button"
          type="submit"
        >
          <ArrowRightIcon />
        </IconButton>
      </div>
    </form>
  );
};

export default SubscribeForm;
