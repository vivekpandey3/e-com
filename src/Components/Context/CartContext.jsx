import React, { createContext, useState, useEffect } from "react";

// Step 1: Context create kar rahe hain
export const CartContext = createContext();

// Step 2: Provider Component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(()=>{;
const savedCart = localStorage.getItem("cartItems")
return savedCart ? JSON.parse(savedCart) :[];
})

const clearCart =()=>{
  setCartItems([])
  localStorage.removeItem("cartItems")
}
useEffect (()=>{
  localStorage.setItem("cartItems", JSON.stringify(cartItems))}, [cartItems])



  //  Add to cart
  const addToCart = (product) => {
    setCartItems((prevItems) =>{
      const exists =prevItems.find((item) => item.id===product.id)
    if (exists) {
      
      return prevItems;
    }
              

            
      
     
      return  [...prevItems, product];
    })
      
  }
  

  //  Remove from cart
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));// match krega id match ki to remove kr dega..
  };

  
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
