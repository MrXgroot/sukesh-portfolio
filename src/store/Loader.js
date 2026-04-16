import { create } from "zustand";

export const useLoaderStore = create((set) => ({
  isLoading: true,
  setIsLoading: (value) => set({ isLoading: value }),
}));
