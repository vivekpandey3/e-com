import React, { createContext, useState, useEffect } from "react";


export const CartContext = createContext();


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




  const addToCart = (product) => {
    setCartItems((prevItems) =>{
      const exists =prevItems.find((item) => item.id===product.id)
    if (exists) {
      
      return prevItems;
    }
              

            
      
     
      return  [...prevItems, product];
    })
      
  }
  


  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));// match krega id match ki to remove kr dega..
  };

  
  

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart,clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
