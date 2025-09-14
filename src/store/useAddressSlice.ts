// store/useAddressStore.ts
import { create } from 'zustand';
import { addressDummyData } from '@/src/assets/assets';

type Address = typeof addressDummyData;

type AddressState = {
  list: Address[];
  addAddress: (newAddress: Address) => void;
};

export const useAddressStore = create<AddressState>((set) => ({
  list: [addressDummyData],
  addAddress: (newAddress) =>
    set((state) => ({
      list: [...state.list, newAddress],
    })),
}));
