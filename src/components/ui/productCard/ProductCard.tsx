import React from "react";
import Image from "next/image";

import { useAppDispatch } from "@/hooks";
import { addToCart } from "@/store/slices/cartSlice/cartSlice";

import {
  Badge,
  ButtonWithIcon,
  ProductVolume,
  ProductDetailsMenu,
  ProductTitle,
} from "@/components/atoms";

import { ProductType } from "@/types";

import CartIcon from "@/assets/svg/cart.svg";
import styles from "./ProductCard.module.scss";

type Props = {
  product: ProductType;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useAppDispatch();

  function addToCartHandler(product: ProductType, qty: number) {
    dispatch(addToCart({ product, qty }));
  }

  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__badgesBox}>
          <Badge
            className={styles.card__badge}
            variant="popular"
            rounded="small"
            content="Популярное"
          />
        </div>
        <div className={styles.card__imgBox}>
          <Image
            src={product.img}
            width={180}
            height={220}
            alt={product.name}
          />
        </div>
      </div>

      <div className={styles.card__body}>
        <ProductVolume
          className={styles.card__volume}
          volume={product.volume}
        />

        <ProductTitle
          className={styles.card__title}
          id={product.id}
          name={product.name}
          brand={product.brand}
        />

        <ProductDetailsMenu
          items={[
            { key: "Штрихкод", value: product.barcode },
            { key: "Производитель", value: product.producerName },
            { key: "Бренд", value: product.brand },
          ]}
        />
      </div>

      <div className={styles.card__footer}>
        <div className={styles.card__price}>{product.price.toFixed(2)} ₸</div>
        <ButtonWithIcon
          className={styles.card__cartBtn}
          icon={<CartIcon />}
          variant="primary"
          tag="button"
          type="button"
          onClick={() => addToCartHandler(product, 1)}
        >
          В корзину
        </ButtonWithIcon>
      </div>
    </div>
  );
};

export default ProductCard;
