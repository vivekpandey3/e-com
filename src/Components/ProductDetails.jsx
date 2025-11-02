import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "./Context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const getProductDetail = async () => {
    try {
      const res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getProductDetail();
  }, [id]);

  if (!product) return <h3 className="text-center text-lg mt-10">Loading...</h3>;

  const handleAdd = () => {
    addToCart(product);
    alert(`${product.title} added to cart`);
  };

  const gotoCart = () => {
    navigate("/cart");
  };

  return (
    <div className="p-5 flex flex-col items-start">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-72 h-72 object-cover rounded-xl shadow-md mb-4"
      />

      <h2 className="text-2xl font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <h3 className="text-xl font-bold mb-1">Price: ₹{product.price}</h3>
      <p className="mb-1 text-yellow-600 font-medium">Rating: ⭐ {product.rating}</p>
      <p className="text-gray-700 mb-1">Brand: {product.brand}</p>
      <p className="text-gray-700 mb-4">Category: {product.category}</p>

      <div className="flex flex-wrap gap-3 mt-2">
        <button
          onClick={handleAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition cursor-pointer hover:border-voilet-400 hover:shadow-[0_0_12px_#60a5fa]"
        >
          🛒 Add to Cart
        </button>

        <button
          onClick={gotoCart}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-full transition cursor-pointer hover:border-voilet-400 hover:shadow-[0_0_12px_#60a5fa]"
        >
          🛍️ Go to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductDetails;
