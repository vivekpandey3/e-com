import { create } from "zustand";
import axios from "axios";

const useProductStore = create((set) => ({
  data: [],
  filteredData: [],
  category: "All",
  search: "",
  sortOption: "",

  getProductData: async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      set({
        data: res.data.products,
        filteredData: res.data.products,
      });
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  },


  setCategory: (value) => set({ category: value }),


  setSearch: (value) => set({ search: value }),

  setSortOption: (value) => set({ sortOption: value }),


  applyFilters: () =>
    set((state) => {
      let filtered = state.data;


      if (state.category !== "All") {
        filtered = filtered.filter((item) => item.category === state.category);
      }

  
      if (state.search.trim() !== "") {
        filtered = filtered.filter((item) =>
          item.title.toLowerCase().includes(state.search.toLowerCase())
        );
      }

  
      if (state.sortOption === "priceLowHigh") {
        filtered = [...filtered].sort((a, b) => a.price - b.price);
      } else if (state.sortOption === "priceHighLow") {
        filtered = [...filtered].sort((a, b) => b.price - a.price);
      } else if (state.sortOption === "nameAZ") {
        filtered = [...filtered].sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      } else if (state.sortOption === "nameZA") {
        filtered = [...filtered].sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      }

      return { filteredData: filtered };
    }),
}));

export default useProductStore;
