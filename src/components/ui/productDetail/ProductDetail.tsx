import React from "react";
import cn from "classnames";
import Image from "next/image";

import { useAppSelector, useAppDispatch } from "@/hooks";
import {
  selectCartProduct,
  addToCart,
  changeCartProductQty,
} from "@/store/slices/cartSlice/cartSlice";

import { ProductType } from "@/types";

import {
  ProductTitle,
  ProductCounter,
  ProductDetailsMenu,
  ButtonWithIcon,
} from "@/components/atoms";

import CartIcon from "@/assets/svg/cart.svg";
import styles from "./ProductDetail.module.scss";

type Props = {
  product: ProductType;
  className?: string;
};

const ProductDetail: React.FC<Props> = ({ product, className }) => {
  const dispatch = useAppDispatch();
  const cartProduct = useAppSelector(selectCartProduct(product.id));

  const productClasses = cn(styles.product, className);

  const addToCartHandler = (product: ProductType) => {
    dispatch(
      addToCart({
        product,
        qty: 1,
      })
    );
  };

  const changeQtyHandler = (productId: number, qty: number) => {
    dispatch(
      changeCartProductQty({
        productId,
        qty,
      })
    );
  };

  return (
    <article id="product-detail" className={productClasses}>
      <div className={styles.product__imgBox}>
        <Image src={product.img} width={256} height={180} alt={product.name} />
      </div>
      <div className={styles.product__detail}>
        <div className={styles.product__stateStore}>В наличии</div>

        <ProductTitle
          className={styles.product__title}
          id={product.id}
          name={product.name}
          brand={product.brand}
        />

        <div className={styles.product__actions}>
          <div className={styles.product__price}>
            {product.price.toFixed(2)} ₸
          </div>
          {cartProduct ? (
            <ProductCounter
              productId={cartProduct.id}
              qty={cartProduct.qty}
              setQtyHandler={changeQtyHandler}
            />
          ) : (
            <ButtonWithIcon
              className={styles.product__cartBtn}
              icon={<CartIcon />}
              variant="primary"
              tag="button"
              type="button"
              onClick={() => addToCartHandler(product)}
            >
              В корзину
            </ButtonWithIcon>
          )}
        </div>
        <ProductDetailsMenu
          className={styles.product__detailsMenu}
          items={[
            { key: "Производитель", value: product.producerName },
            { key: "Бренд", value: product.brand },
            { key: "Штрихкод", value: product.barcode },
          ]}
        />
      </div>
    </article>
  );
};

export default ProductDetail;
