import React from "react";
import cn from "classnames";
import Link from "next/link";

import LogoIcon from "@/assets/svg/logo.svg";

import styles from "./Logo.module.scss";

type Props = {
  className?: string;
};

const Logo: React.FC<Props> = ({ className }) => {
  const linkClasses = cn(styles.link, className);

  return (
    <Link className={linkClasses} href="/">
      <LogoIcon />
    </Link>
  );
};

export default Logo;
