import React from "react";

import styles from "./SectionDesc.module.scss";

interface SectionDescProps {
  children: React.ReactNode;
}

const SectionDesc: React.FC<SectionDescProps> = ({ children }) => {
  return <p className={styles.text}>{children}</p>;
};

export default SectionDesc;
