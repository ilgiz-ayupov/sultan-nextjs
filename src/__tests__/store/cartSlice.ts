import cartReducer, {
  addToCart,
  removeFromCart,
  changeCartProductQty,
} from "@/store/slices/cartSlice/cartSlice";

import { ProductType, CartProductType } from "@/types";

describe("Cart Reducer", () => {
  const initialState = {
    totalAmount: 0,
    totalQty: 0,
    cartProducts: [] as CartProductType[],
  };

  const product: ProductType = {
    id: 1,
    categoryId: 1,
    name: "Ср-во для мытья посуды Апельсин+мята",
    brand: "AOS",
    status: "isPopular",
    producerName: "Нэфис",
    barcode: "4604049097548",
    price: 48.75,
    img: "/assets/images/products/product-1.png",
    volume: {
      qty: "450",
      unit: "мл",
    },
  };

  const cartProduct: CartProductType = {
    ...product,
    qty: 10,
    totalAmount: product.price * 10,
  };

  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "" })).toEqual(initialState);
  });

  it("should handle adding a product to the cart", () => {
    const qty = 10;
    const totalAmount = product.price * qty;
    const cartProduct: CartProductType = { ...product, qty, totalAmount };

    const newState = cartReducer(initialState, addToCart({ product, qty }));

    expect(newState.cartProducts).toHaveLength(1);
    expect(newState.cartProducts[0]).toEqual(cartProduct);
    expect(newState.totalQty).toEqual(qty);
    expect(newState.totalAmount).toEqual(totalAmount);
  });

  it("should handle adding existing product to the cart", () => {
    const state = {
      totalQty: cartProduct.qty,
      totalAmount: cartProduct.totalAmount,
      cartProducts: [cartProduct],
    };

    const addQty = 3;

    const newState = cartReducer(state, addToCart({ product, qty: addQty }));

    expect(newState.cartProducts).toHaveLength(1);
    expect(newState.cartProducts[0]).toEqual({
      ...cartProduct,
      qty: cartProduct.qty + addQty,
      totalAmount: cartProduct.totalAmount + cartProduct.price * addQty,
    });
    expect(newState.totalQty).toEqual(cartProduct.qty + addQty);

    expect(newState.totalAmount).toEqual(
      cartProduct.totalAmount + cartProduct.price * addQty
    );
  });

  it("should handle remove product from the cart", () => {
    const state = {
      totalQty: cartProduct.qty,
      totalAmount: cartProduct.totalAmount,
      cartProducts: [cartProduct],
    };

    const newState = cartReducer(
      state,
      removeFromCart({ productId: product.id })
    );

    expect(newState.cartProducts).toHaveLength(0);
    expect(newState.totalQty).toEqual(0);
    expect(newState.totalAmount).toEqual(0);
  });

  it("should handle remove non-existent product from the cart", () => {
    const state = {
      totalQty: cartProduct.qty,
      totalAmount: cartProduct.totalAmount,
      cartProducts: [cartProduct],
    };

    const newState = cartReducer(state, removeFromCart({ productId: 99999 }));
    const expectedState = {
      totalQty: cartProduct.qty,
      totalAmount: cartProduct.totalAmount,
      cartProducts: [cartProduct],
    };

    expect(newState.cartProducts).toHaveLength(1);
    expect(newState.cartProducts[0]).toEqual(expectedState.cartProducts[0]);
    expect(newState.totalQty).toEqual(expectedState.totalQty);
    expect(newState.totalAmount).toEqual(expectedState.totalAmount);
  });

  it("should handle update quantity product in the cart", () => {
    const state = {
      totalQty: cartProduct.qty,
      totalAmount: cartProduct.totalAmount,
      cartProducts: [cartProduct],
    };

    const changeQty = 5;
    const newState = cartReducer(
      state,
      changeCartProductQty({ productId: product.id, qty: changeQty })
    );
    const expectedState = {
      totalQty: changeQty,
      totalAmount: cartProduct.price * changeQty,
      cartProducts: [
        {
          ...cartProduct,
          qty: changeQty,
          totalAmount: cartProduct.price * changeQty,
        },
      ],
    };

    expect(newState.cartProducts).toHaveLength(1);
    expect(newState.cartProducts[0]).toEqual(expectedState.cartProducts[0]);
    expect(newState.totalQty).toEqual(expectedState.totalQty);
    expect(newState.totalAmount).toEqual(expectedState.totalAmount);
  });

  it("should handle update quantity non-existent product in the cart", () => {
    const state = {
      totalQty: cartProduct.qty,
      totalAmount: cartProduct.totalAmount,
      cartProducts: [cartProduct],
    };

    const changeQty = 5;
    const newState = cartReducer(
      state,
      changeCartProductQty({ productId: 99999, qty: changeQty })
    );
    const expectedState = {
      totalQty: cartProduct.qty,
      totalAmount: cartProduct.totalAmount,
      cartProducts: [cartProduct],
    };

    expect(newState.cartProducts).toHaveLength(1);
    expect(newState.cartProducts[0]).toEqual(expectedState.cartProducts[0]);
    expect(newState.totalQty).toEqual(expectedState.totalQty);
    expect(newState.totalAmount).toEqual(expectedState.totalAmount);
  });

  it("should handle remove product if product quantity < 0", () => {
    const state = {
      totalQty: cartProduct.qty,
      totalAmount: cartProduct.totalAmount,
      cartProducts: [cartProduct],
    };

    const changeQty = -1;
    const actualState = cartReducer(
      state,
      changeCartProductQty({ productId: product.id, qty: changeQty })
    );
    const expectedState = {
      totalQty: 0,
      totalAmount: 0,
      cartProducts: [],
    };

    expect(actualState.cartProducts).toHaveLength(expectedState.cartProducts.length);
    expect(actualState.totalQty).toEqual(expectedState.totalQty);
    expect(actualState.totalAmount).toEqual(expectedState.totalAmount);
  });
});
