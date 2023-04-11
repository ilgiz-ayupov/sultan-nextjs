import React from "react";
import cn from "classnames";

import styles from "./Badge.module.scss";

type Props = {
  content: string | number;
  rounded: "small" | "full";
  variant: "accent" | "popular" | "discount" | "new" | "cashback" | "best";
  className?: string;
};

const Badge: React.FC<Props> = ({ content, className, rounded, variant }) => {
  const badgeClasses = cn(styles.badge, className, {
    // Rounded
    [styles["badge--rounded-small"]]: rounded === "small",
    [styles["badge--rounded-full"]]: rounded === "full",

    // Variants
    [styles["badge--accent"]]: variant === "accent",
    [styles["badge--popular"]]: variant === "popular",
    [styles["badge--discount"]]: variant === "discount",
    [styles["badge--new"]]: variant === "new",
    [styles["badge--cashback"]]: variant === "cashback",
    [styles["badge--best"]]: variant === "best",
  });

  return <div className={badgeClasses}>{content}</div>;
};

export default Badge;
