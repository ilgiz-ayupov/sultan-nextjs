import React from "react";
import cn from "classnames";

import Button from "../button/Button";
import { ButtonProps } from "../types";

import styles from "./IconButton.module.scss";

const IconButton: React.FC<ButtonProps> = ({
  tag,
  variant,
  children,
  className,
  href,
  type,
  onClick,
}) => {
  const btnClasses = cn(styles.iconBtn, className);
  
  return (
    <Button
      className={btnClasses}
      tag={tag}
      variant={variant}
      href={href}
      type={type}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default IconButton;
