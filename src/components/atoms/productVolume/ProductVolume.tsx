import React from "react";
import cn from "classnames";

import { ProductVolumeType } from "@/types";

import UnitMlIcon from "@/assets/svg/unit-ml.svg";
import UnitGIcon from "@/assets/svg/unit-g.svg";
import styles from "./ProductVolume.module.scss";

type Props = {
  volume: ProductVolumeType;
  className?: string;
};

const ProductVolume: React.FC<Props> = ({ volume, className }) => {
  const volumeClasses = cn(styles.volume, className);

  const VolumeIcon: React.FC<Props> = ({ volume }) => {
    switch (volume.unit) {
      case "мл":
        return <UnitMlIcon />;
      case "г":
        return <UnitGIcon />;
      default:
        return null;
    }
  };

  return (
    <div className={volumeClasses}>
      <VolumeIcon volume={volume} />
      <span className={styles.volume__value}>
        {volume.qty} {volume.unit}
      </span>
    </div>
  );
};

export default ProductVolume;
