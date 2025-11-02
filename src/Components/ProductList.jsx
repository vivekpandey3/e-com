import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import useProductStore from "../store/useProductStore";

function ProductList() {
  const {
    data,
    filteredData,
    category,
    search,
    sortOption,
    getProductData,
    setCategory,
    setSearch,
    setSortOption,
    applyFilters,
  } = useProductStore();

  useEffect(() => {
    getProductData();
  }, [getProductData]);

  useEffect(() => {
    applyFilters();
  }, [category, search, sortOption, data, applyFilters]);

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">🛍️ Product List</h2>

      <div className="flex flex-wrap gap-3 mb-6">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer  hover:border-indigo-400 hover:shadow-[0_0_12px_#60a5fa] hover:scale-105 "
        >
          <option value="">Sort By</option>
          <option value="priceLowHigh">Price: Low → High</option>
          <option value="priceHighLow">Price: High → Low</option>
          <option value="nameAZ">Name: A → Z</option>
          <option value="nameZA">Name: Z → A</option>
        </select>

        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-105  hover:border-indigo-400 hover:shadow-[0_0_12px_#60a5fa] cursor-pointer"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="p-2 rounded-md border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer hover:scale-105  hover:border-indigo-400 hover:shadow-[0_0_12px_#60a5fa]"
        >
          <option value="All">All Categories</option>
          <option value="fragrances">Fragrances</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
        </select>
      </div>

      <div className="flex flex-wrap gap-5">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="border border-gray-300 rounded-xl p-3 w-52 shadow-sm hover:shadow-md transition"
          >
            <NavLink
              to={`/product/${item.id}`}
              className="no-underline text-black"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-2  hover:border-blue-400 hover:shadow-[0_0_12px_#60a5fa] hover:scale-105 "
              />
              <h4 className="font-semibold text-base">{item.title}</h4>
              <p className="font-medium text-gray-700">₹{item.price}</p>
              <p className="text-sm text-gray-500">{item.category}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
