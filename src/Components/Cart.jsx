import React, { useContext } from 'react'
import { CartContext } from './Context/CartContext'
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

function Cart() {
  const {cartItems, removeFromCart,clearCart} = useContext(CartContext) 
  return (
    <div style={{padding:"20px"}}>
      <h2> Your Cart</h2>
      {cartItems.length===0 ?(
        <p>Cart is empty!!</p>
      ):(
           <>
            <SignedIn>
        <h1>Your Cart Items</h1>
        {/* cart code */}
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
           
        
          <button
            onClick={clearCart}
            style={{
              backgroundColor: "magenta",
              color: "white",
              border: "none",
              padding: "8px 12px",
              borderRadius: "5px",
              cursor: "pointer",
              marginBottom: "15px",
            }}
          >
            🗑️ Clear Cart
          </button>

       { cartItems.map((item)=>(
          <div
            key={item.id}
            style={{
                  border: "1px solid #ddd",
              marginBottom: "10px",
              padding: "10px",
              borderRadius: "10px",
            }}
            >
                <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
              <h4>{item.title}</h4>
            <p>₹{item.price}</p>

                 <button
              onClick={() => removeFromCart(item.id)}
              style={{
                backgroundColor: "purple",
                color: "white",
                border: "none",
                padding: "8px 12px",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
               Remove from here
            </button>

            </div>
        ))}
           </>
      )}
      
    </div>
  )
}

export default Cart