import React from "react";
import cn from "classnames";

import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  className?: string;
  children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ className, children }) => {
  const titleClasses = cn(styles.title, className);
  return <h2 className={titleClasses}>{children}</h2>;
};

export default SectionTitle;
