import { create } from "zustand";

const useStore = create((set) => ({
  dataFilters: { search: "", stone: [] },
  setDataFilters: (newFilters) =>
    set((state) => ({
      dataFilters: { ...state.dataFilters, ...newFilters },
    })),

  selectOreModal: false,
  setSelectOreModal: (isOpen) => set(() => ({ selectOreModal: isOpen })),

  productModal: { view: false, edit: false, productId: null },
  setProductModal: (modalState) => set(() => ({ productModal: modalState })),
}));

export default useStore;
