// store/useCartStore.ts
import { create } from 'zustand';

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

export const useCartStore = create<CartState>((set) => ({
  total: 0,
  cartItems: {},

  addToCart: (productId) =>
    set((state) => {
      const currentQty = state.cartItems[productId] || 0;
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
      if (!currentQty) return state; // item not in cart

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
}));
