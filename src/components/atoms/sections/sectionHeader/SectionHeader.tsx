import React from "react";
import cn from "classnames";

import styles from "./SectionHeader.module.scss";

interface SectionHeaderProps {
  className?: string;
  children: React.ReactNode;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({
  className,
  children,
}) => {
  const headerClasses = cn(styles.header, className);
  return <div className={headerClasses}>{children}</div>;
};

export default SectionHeader;
