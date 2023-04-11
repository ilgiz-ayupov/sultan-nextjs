import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { ProductType, CartProductType } from "@/types";
import type { RootState } from "../..";

export type CartStateType = {
  totalAmount: number;
  totalQty: number;
  cartProducts: CartProductType[];
};

const initialState: CartStateType = {
  totalAmount: 0,
  totalQty: 0,
  cartProducts: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state,
      payload: PayloadAction<{ product: ProductType; qty: number }>
    ) {
      const { product, qty } = payload.payload;
      const calcTotalAmount = product.price * qty;

      const foundCartProductIndex = state.cartProducts.findIndex(
        (stateProduct) => stateProduct.id === product.id
      );
      if (foundCartProductIndex !== -1) {
        const foundCartProduct = state.cartProducts[foundCartProductIndex];

        state.cartProducts.splice(foundCartProductIndex, 1, {
          ...foundCartProduct,
          qty: foundCartProduct.qty + qty,
          totalAmount: calcTotalAmount,
        });
      } else {
        state.cartProducts.push({
          ...product,
          qty,
          totalAmount: calcTotalAmount,
        });
      }

      state.totalAmount += calcTotalAmount;
      state.totalQty += qty;
    },
    removeFromCart(state, payload: PayloadAction<{ productId: number }>) {
      const { productId } = payload.payload;

      const foundCartProductIndex = state.cartProducts.findIndex(
        (stateProduct) => stateProduct.id === productId
      );
      if (foundCartProductIndex !== -1) {
        const foundCartProduct = state.cartProducts[foundCartProductIndex];

        state.cartProducts.splice(foundCartProductIndex, 1);

        state.totalAmount -= foundCartProduct.totalAmount;
        state.totalQty -= foundCartProduct.qty;
      } else {
        return state;
      }
    },
    changeCartProductQty(
      state,
      payload: PayloadAction<{
        productId: number;
        qty: number;
      }>
    ) {
      const { productId, qty } = payload.payload;
      const foundCartProductIndex = state.cartProducts.findIndex(
        (stateProduct) => stateProduct.id === productId
      );

      if (foundCartProductIndex !== -1) {
        const foundCartProduct = state.cartProducts[foundCartProductIndex];
        const calcTotalAmount = foundCartProduct.price * qty;

        if (qty > 0) {
          state.cartProducts.splice(foundCartProductIndex, 1, {
            ...foundCartProduct,
            totalAmount: calcTotalAmount,
            qty,
          });
        } else {
          state.cartProducts.splice(foundCartProductIndex, 1);
        }

        state.totalAmount +=
          (qty - foundCartProduct.qty) * foundCartProduct.price;
        state.totalQty += qty - foundCartProduct.qty;
      }

      return state;
    },
  },
});

// Selectors
export const selectCart = (state: RootState) => {
  return state.cart;
};

export const selectCartProduct = (id: number) => {
  return (state: RootState) => {
    return state.cart.cartProducts.find((cartProduct) => cartProduct.id === id);
  };
};

// Actions
export const { addToCart, removeFromCart, changeCartProductQty } =
  cartSlice.actions;

export default cartSlice.reducer;
