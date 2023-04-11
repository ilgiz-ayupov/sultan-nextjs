import React from "react";
import cn from "classnames";

import { ButtonProps } from "../types";
import Button from "../button/Button";

import styles from "./ButtonWithIcon.module.scss";

type Props = {
  icon: React.ReactNode;
};

const ButtonWithIcon: React.FC<Props & ButtonProps> = ({
  tag,
  variant,
  children,
  icon,
  className,
  href,
  type,
  onClick,
}) => {
  const btnClasses = cn(styles.btnWithIcon, className);

  return (
    <Button
      className={btnClasses}
      tag={tag}
      variant={variant}
      href={href}
      type={type}
      onClick={onClick}
    >
      <span className={styles.btnWithIcon__text}>{children}</span>
      {icon}
    </Button>
  );
};

export default ButtonWithIcon;
