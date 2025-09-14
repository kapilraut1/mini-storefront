// store/useProductStore.ts
import { create } from 'zustand';
import { productDummyData } from '@/src/assets/assets';

type Product = (typeof productDummyData)[0]; // assuming it's an array
// or define manually:
// type Product = { id: string; name: string; price: number; ... }

type ProductState = {
  list: Product[];
  setProduct: (products: Product[]) => void;
  clearProduct: () => void;
};

export const useProductStore = create<ProductState>((set) => ({
  list: productDummyData,
  setProduct: (products) => set({ list: products }),
  clearProduct: () => set({ list: [] }),
}));
