import React from "react";
import cn from "classnames";

import { IconButton } from "@/components/atoms";

import SearchIcon from "@/assets/svg/search.svg";
import styles from "./SearchForm.module.scss";

type Props = {
  className?: string;
};

const SearchForm: React.FC<Props> = ({ className }) => {
  const formClasses = cn(styles.form, className);

  return (
    <form className={formClasses}>
      <div className={styles.form__control}>
        <input
          className={styles.form__input}
          type="text"
          name="search"
          placeholder="Поиск..."
        />
        <IconButton
          className={styles.form__submitBtn}
          variant="primary"
          tag="button"
          type="submit"
        >
          <SearchIcon />
        </IconButton>
      </div>
    </form>
  );
};

export default SearchForm;
