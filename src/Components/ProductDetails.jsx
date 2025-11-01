import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { CartContext } from './Context/CartContext'
function ProductDetails() {
  const {id} = useParams()

  const [product, setProduct] = useState(null)

const {addToCart} = useContext(CartContext)
const navigate =useNavigate()

  const getProductDetail= async()=>{
try{
  const res = await axios.get(`https://dummyjson.com/products/${id}`)
      setProduct(res.data)

}
catch(err){
  console.log(err)
}
  }

  useEffect(()=>{
   getProductDetail()
  },[id])
  

  if(!product) return <h3>Loading...</h3>

    const handleAdd = () => {
    addToCart(product);
    alert(`${product.title} added to cart`)
  
  };
 

  const gotoCart=()=>{
    navigate("/cart")
  }

  return (
    <div style={{padding:"20px"}}>
   <img src={product.thumbnail}alt={product.title}
   style={{
    width:'300px',
    height:'300px',
  objectFit:"cover",
  borderRadius:"10px",
    
   }}
   />
 <h2>{product.title}</h2>
      <p>{product.description}</p>
      <h3>Price: ₹{product.price}</h3>
      <p>Rating: ⭐ {product.rating}</p>
      <p>Brand: {product.brand}</p>
      <p>Category: {product.category}</p>


        <button onClick={handleAdd} style={{
          padding: "10px 16px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: 25,
          cursor: "pointer"
        }}>
          🛒 Add to Cart
        </button>
      
        

          <button
          onClick={gotoCart}
          style={{
            padding: "10px 18px  ",
            backgroundColor: "#28a745",
            color: "white",
            border: "none",
            borderRadius: 19,
            cursor: "pointer",
            margin:"10px",
          }}
        >
          🛍️ Go to Cart
        </button>

    </div>
  )
}

export default ProductDetails