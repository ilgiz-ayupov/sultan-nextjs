import cartReducer, {
  addToCart,
  removeFromCart,
  changeCartProductQty,
} from "@/store/slices/cartSlice/cartSlice";

import { ProductType, CartProductType } from "@/types";

describe("Cart Reducer", () => {
  const INITIAL_STATE = {
    totalAmount: 0,
    totalQty: 0,
    cartProducts: [] as CartProductType[],
  };

  const PRODUCT: ProductType = {
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

  const CART_PRODUCT: CartProductType = {
    ...PRODUCT,
    qty: 10,
    totalAmount: PRODUCT.price * 10,
  };

  it("should handle initial state", () => {
    expect(cartReducer(undefined, { type: "" })).toEqual(INITIAL_STATE);
  });

  it("should handle adding a product to the cart", () => {
    const qty = CART_PRODUCT.qty;

    const actualState = cartReducer(
      INITIAL_STATE,
      addToCart({ product: PRODUCT, qty })
    );
    const expectedState = {
      totalQty: qty,
      totalAmount: PRODUCT.price * qty,
      cartProducts: [CART_PRODUCT],
    };

    expect(actualState.cartProducts).toHaveLength(
      expectedState.cartProducts.length
    );
    expect(actualState.cartProducts[0]).toEqual(expectedState.cartProducts[0]);
    expect(actualState.totalQty).toEqual(expectedState.totalQty);
    expect(actualState.totalAmount).toEqual(expectedState.totalAmount);
  });

  it("should handle adding existing product to the cart", () => {
    const state = {
      totalQty: CART_PRODUCT.qty,
      totalAmount: CART_PRODUCT.totalAmount,
      cartProducts: [CART_PRODUCT],
    };

    const addQty = 3;

    const actualState = cartReducer(
      state,
      addToCart({ product: PRODUCT, qty: addQty })
    );
    const expectedState = {
      totalQty: CART_PRODUCT.qty + addQty,
      totalAmount: CART_PRODUCT.totalAmount + addQty * CART_PRODUCT.price,
      cartProducts: [
        {
          ...CART_PRODUCT,
          qty: CART_PRODUCT.qty + addQty,
          totalAmount: CART_PRODUCT.totalAmount + addQty * CART_PRODUCT.price,
        },
      ],
    };

    expect(actualState.cartProducts).toHaveLength(
      expectedState.cartProducts.length
    );
    expect(actualState.cartProducts[0]).toEqual(expectedState.cartProducts[0]);
    expect(actualState.totalQty).toEqual(expectedState.totalQty);
    expect(actualState.totalAmount).toEqual(expectedState.totalAmount);
  });

  it("should handle remove product from the cart", () => {
    const state = {
      totalQty: CART_PRODUCT.qty,
      totalAmount: CART_PRODUCT.totalAmount,
      cartProducts: [CART_PRODUCT],
    };

    const actualState = cartReducer(
      state,
      removeFromCart({ productId: PRODUCT.id })
    );

    expect(actualState.cartProducts).toHaveLength(0);
    expect(actualState.totalQty).toEqual(0);
    expect(actualState.totalAmount).toEqual(0);
  });

  it("should handle remove non-existent product from the cart", () => {
    const state = {
      totalQty: CART_PRODUCT.qty,
      totalAmount: CART_PRODUCT.totalAmount,
      cartProducts: [CART_PRODUCT],
    };

    const actualState = cartReducer(
      state,
      removeFromCart({ productId: 99999 })
    );
    const expectedState = {
      totalQty: CART_PRODUCT.qty,
      totalAmount: CART_PRODUCT.totalAmount,
      cartProducts: [CART_PRODUCT],
    };

    expect(actualState.cartProducts).toHaveLength(1);
    expect(actualState.cartProducts[0]).toEqual(expectedState.cartProducts[0]);
    expect(actualState.totalQty).toEqual(expectedState.totalQty);
    expect(actualState.totalAmount).toEqual(expectedState.totalAmount);
  });

  it("should handle update quantity product in the cart", () => {
    const state = {
      totalQty: CART_PRODUCT.qty,
      totalAmount: CART_PRODUCT.totalAmount,
      cartProducts: [CART_PRODUCT],
    };

    const changeQty = 5;
    const actualState = cartReducer(
      state,
      changeCartProductQty({ productId: PRODUCT.id, qty: changeQty })
    );
    const expectedState = {
      totalQty: changeQty,
      totalAmount: CART_PRODUCT.price * changeQty,
      cartProducts: [
        {
          ...CART_PRODUCT,
          qty: changeQty,
          totalAmount: CART_PRODUCT.price * changeQty,
        },
      ],
    };

    expect(actualState.cartProducts).toHaveLength(
      expectedState.cartProducts.length
    );
    expect(actualState.cartProducts[0]).toEqual(expectedState.cartProducts[0]);
    expect(actualState.totalQty).toEqual(expectedState.totalQty);
    expect(actualState.totalAmount).toEqual(expectedState.totalAmount);
  });

  it("should handle update quantity non-existent product in the cart", () => {
    const state = {
      totalQty: CART_PRODUCT.qty,
      totalAmount: CART_PRODUCT.totalAmount,
      cartProducts: [CART_PRODUCT],
    };

    const changeQty = 5;
    const actualState = cartReducer(
      state,
      changeCartProductQty({ productId: 99999, qty: changeQty })
    );
    const expectedState = {
      totalQty: CART_PRODUCT.qty,
      totalAmount: CART_PRODUCT.totalAmount,
      cartProducts: [CART_PRODUCT],
    };

    expect(actualState.cartProducts).toHaveLength(
      expectedState.cartProducts.length
    );
    expect(actualState.cartProducts[0]).toEqual(expectedState.cartProducts[0]);
    expect(actualState.totalQty).toEqual(expectedState.totalQty);
    expect(actualState.totalAmount).toEqual(expectedState.totalAmount);
  });

  it("should handle remove product if product quantity < 0", () => {
    const state = {
      totalQty: CART_PRODUCT.qty,
      totalAmount: CART_PRODUCT.totalAmount,
      cartProducts: [CART_PRODUCT],
    };

    const changeQty = -1;
    const actualState = cartReducer(
      state,
      changeCartProductQty({ productId: PRODUCT.id, qty: changeQty })
    );
    const expectedState = {
      totalQty: 0,
      totalAmount: 0,
      cartProducts: [],
    };

    expect(actualState.cartProducts).toHaveLength(
      expectedState.cartProducts.length
    );
    expect(actualState.totalQty).toEqual(expectedState.totalQty);
    expect(actualState.totalAmount).toEqual(expectedState.totalAmount);
  });
});
