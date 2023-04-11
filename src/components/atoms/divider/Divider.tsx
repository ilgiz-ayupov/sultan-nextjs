import React from "react";
import cn from "classnames";

import styles from "./Divider.module.scss";

type Props = {
  variant: "horizontal" | "vertical";
  className?: string;
};

const Divider: React.FC<Props> = ({ variant, className }) => {
  const dividerClasses = cn(styles.divider, className, {
    [styles["divider--horizontal"]]: variant === "horizontal",
    [styles["divider--vertical"]]: variant === "vertical",
  });
  return <div className={dividerClasses} />;
};

export default Divider;
