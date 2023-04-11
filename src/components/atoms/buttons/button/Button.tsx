import React from "react";
import Link from "next/link";
import cn from "classnames";

import { ButtonProps } from "../types";

import styles from "./Button.module.scss";

const Button: React.FC<ButtonProps> = ({
  tag,
  variant,
  className,
  children,
  href,
  type,
  onClick,
}) => {
  const btnClasses = cn(styles.btn, className, {
    [styles["btn--primary"]]: variant === "primary",
    [styles["btn--secondary"]]: variant === "secondary",
  });

  if (tag === "link" && href) {
    return (
      <Link className={btnClasses} href={href} onClick={onClick}>
        {children}
      </Link>
    );
  } else if (tag === "button" && type) {
    return (
      <button className={btnClasses} type={type} onClick={onClick}>
        {children}
      </button>
    );
  } else {
    return null;
  }
};

export default Button;
