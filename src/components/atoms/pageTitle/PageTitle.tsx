import React from "react";
import cn from "classnames";

import styles from "./PageTitle.module.scss";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const PageTitle: React.FC<Props> = ({ className, children }) => {
  const titleClasses = cn(styles.title, className);

  return <h1 className={titleClasses}>{children}</h1>;
};

export default PageTitle;
