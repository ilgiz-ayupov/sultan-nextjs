import React from "react";
import cn from "classnames";
import Image from "next/image";

import { useAppDispatch } from "@/hooks";
import {
  changeCartProductQty,
  removeFromCart,
} from "@/store/slices/cartSlice/cartSlice";

import { CartProductType } from "@/types";

import {
  ProductVolume,
  ProductTitle,
  ProductCounter,
  IconButton,
  Divider,
} from "@/components/atoms";

import TrashIcon from "@/assets/svg/trash.svg";
import styles from "./CartProductCard.module.scss";

type Props = {
  cartProduct: CartProductType;
  className?: string;
};

const CartProductCard: React.FC<Props> = ({ cartProduct, className }) => {
  const dispatch = useAppDispatch();

  const changeQtyHandler = (productId: number, qty: number) => {
    dispatch(
      changeCartProductQty({
        productId,
        qty,
      })
    );
  };

  const removeFromCartHandler = (productId: number) => {
    dispatch(removeFromCart({ productId }));
  };

  const cardClasses = cn(styles.card, className);

  return (
    <div className={cardClasses}>
      <div className={styles.card__imgBox}>
        <Image
          src={cartProduct.img}
          width={180}
          height={220}
          alt={cartProduct.name}
        />
      </div>
      <div className={styles.card__body}>
        <ProductVolume volume={cartProduct.volume} />

        <ProductTitle
          className={styles.card__title}
          id={cartProduct.id}
          name={cartProduct.name}
          brand={cartProduct.brand}
        />

        <p className={styles.card__desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis
          vulputate feugiat massa vestibulum duis.
        </p>
      </div>
      <div className={styles.card__footer}>
        <ProductCounter
          productId={cartProduct.id}
          qty={cartProduct.qty}
          setQtyHandler={changeQtyHandler}
        />

        <Divider className={styles.card__divider} variant="vertical" />

        <div className={styles.card__price}>
          {cartProduct.price.toFixed(2)} ₸
        </div>

        <Divider className={styles.card__divider} variant="vertical" />

        <IconButton
          className={styles.card__trashBtn}
          variant="primary"
          tag="button"
          type="button"
          onClick={() => removeFromCartHandler(cartProduct.id)}
        >
          <TrashIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default CartProductCard;
