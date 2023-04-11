import React from "react";
import Head from "next/head";

import { useAppSelector } from "@/hooks";
import { selectCart } from "@/store/slices/cartSlice/cartSlice";

import { PageTitle } from "@/components/atoms";
import { CartProductsMenu, CartResult } from "@/components/ui";
import { BaseLayout } from "@/components/layout";

const Cart = () => {
  const cart = useAppSelector(selectCart);

  return (
    <BaseLayout>
      <Head>
        <title>Sultan - Корзина</title>
        <meta name="description" content="Sultan e-shop" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container">
          <PageTitle>Корзина</PageTitle>
        </div>

        <div id="cart-products-menu">
          <div className="container">
            {cart.totalQty > 0 ? (
              <CartProductsMenu cartProducts={cart.cartProducts} />
            ) : (
              <p style={{ marginTop: "1rem" }}>Ваша корзина пуста</p>
            )}
          </div>
        </div>

        {cart.totalAmount > 0 && (
          <div id="cart-result">
            <div className="container">
              <CartResult totalAmount={cart.totalAmount} />
            </div>
          </div>
        )}
      </main>
    </BaseLayout>
  );
};

export default Cart;
