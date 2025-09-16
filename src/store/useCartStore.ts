// store/useCartStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { productDummyData } from "@/src/assets/assets";

type CartItems = {
  [productId: string]: number;
};

type CartState = {
  total: number;
  cartItems: CartItems;
  addToCart: (productId: string) => void;
  removeFromCart: (productId: string) => void;
  deleteItemFromCart: (productId: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  // for storing in localstorage kaps-cart-storage
  persist(
    (set) => ({
      total: 0,
      cartItems: {},

      addToCart: (productId) =>
        set((state) => {
          const product = productDummyData.find((p) => p.id === productId);
          if (!product) return state;

          const currentQty = state.cartItems[productId] || 0;
          if (currentQty >= product.Stock) return state;

          return {
            cartItems: {
              ...state.cartItems,
              [productId]: currentQty + 1,
            },
            total: state.total + 1,
          };
        }),

      removeFromCart: (productId) =>
        set((state) => {
          const currentQty = state.cartItems[productId];
          if (!currentQty) return state;

          const updatedItems = { ...state.cartItems };
          if (currentQty === 1) {
            delete updatedItems[productId];
          } else {
            updatedItems[productId] = currentQty - 1;
          }

          return {
            cartItems: updatedItems,
            total: state.total - 1,
          };
        }),

      deleteItemFromCart: (productId) =>
        set((state) => {
          const qty = state.cartItems[productId] || 0;
          const updatedItems = { ...state.cartItems };
          delete updatedItems[productId];

          return {
            cartItems: updatedItems,
            total: state.total - qty,
          };
        }),

      clearCart: () => ({
        cartItems: {},
        total: 0,
      }),
    }),
    {
      name: "kaps-cart-storage", // key in localStorage
    }
  )
);
