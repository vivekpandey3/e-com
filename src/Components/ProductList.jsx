import React, { useEffect, useState } from "react";
// import axios from "axios";
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

  }= useProductStore()
  // const [data, setData] = useState([]);
  // const [filteredData, setFilteredData] = useState([]);
  // const [category, setCategory] = useState("All");
  // const [search, setSearch] = useState("");
  // const [sortOption, setSortOption] = useState("");

  // const Api = "https://dummyjson.com/products";

  // const getProductData = async () => {
  //   try {
  //     const res = await axios.get(Api);
  //     setData(res.data.products);
  //     setFilteredData(res.data.products);
  //     console.log(res.data.products);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  useEffect(() => {
    getProductData();
  }, [getProductData]);

  // useEffect(() => {
  //   let filtered = data;

  //   if (category !== "All") {
  //     filtered = filtered.filter((item) => item.category === category);
  //   }

  //   if (search.trim() !== "") {
  //     filtered = filtered.filter((item) =>
  //       item.title.toLowerCase().includes(search.toLowerCase())
  //     );
  //   }

  //    if (sortOption === "priceLowHigh") {
  //   filtered = [...filtered].sort((a, b) => a.price - b.price);
  // } else if (sortOption === "priceHighLow") {
  //   filtered = [...filtered].sort((a, b) => b.price - a.price);
  // } else if (sortOption === "nameAZ") {
  //   filtered = [...filtered].sort((a, b) => a.title.localeCompare(b.title));
  // } else if (sortOption === "nameZA") {
  //   filtered = [...filtered].sort((a, b) => b.title.localeCompare(a.title));
  // }

  //   setFilteredData(filtered);
  // }, [category, data, search,sortOption]);
  useEffect(()=>{
    applyFilters();
  },[ category, search, sortOption, data, applyFilters])
  return (
    <div style={{ padding: "20px" }}>
      <h2>🛍️ Product List</h2>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        style={{
          padding: "8px",
          marginLeft: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
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
        style={{
          padding: "8px",
          marginRight: "10px",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />

      {/*  Filter Dropdown */}
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "20px",
          borderRadius: "6px",
          border: "1px solid #ccc",
        }}
      >
        <option value="All">All Categories</option>
        <option value="fragrances">Fragrances</option>
        <option value="groceries">Groceries</option>
        <option value="beauty">Beauty</option>
        <option value="furniture">Furniture</option>
      </select>

      {/* Product Cards */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredData.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "10px",
              width: "200px",
            }}
          >
            <NavLink
              to={`/product/${item.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                style={{ width: "100%", height: "150px", objectFit: "cover" }}
              />
              <h4>{item.title}</h4>
              <p>₹{item.price}</p>
              <p style={{ fontSize: "12px", color: "gray" }}>{item.category}</p>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
