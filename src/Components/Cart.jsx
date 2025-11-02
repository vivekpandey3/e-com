import React, { useContext } from "react";
import { CartContext } from "./Context/CartContext";
import { SignedIn, SignedOut, RedirectToSignIn } from "@clerk/clerk-react";

function Cart() {
  const { cartItems, removeFromCart, clearCart } = useContext(CartContext);

  const handleBuyNow = (item) => {
    alert(`You purchased "${item.title}" for ₹${item.price}`);
    removeFromCart(item.id);
  };

  return (
    <div className="p-5">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>


      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>

     
      <SignedIn>
        {cartItems.length === 0 ? (
          <p className="text-gray-600 text-lg">🛒 Cart is empty!</p>
        ) : (
          <>
            <button
              onClick={clearCart}
              className="bg-fuchsia-600 hover:bg-fuchsia-700 text-white px-4 py-2 rounded-md mb-4 transition cursor-pointer  hover:border-megenda-400 hover:shadow-[0_0_12px_#60a5fa]"
            >
              🗑️ Clear Cart
            </button>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="border border-gray-300 rounded-xl mb-3 p-3 flex items-center gap-4 shadow-sm"
              >
                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />

                <div className="flex-grow">
                  <h4 className="text-lg font-medium">{item.title}</h4>
                  <p className="text-gray-700 font-semibold">₹{item.price}</p>
                </div>

                <button
                  onClick={() => handleBuyNow(item)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition cursor-pointer  hover:border-magenda-400 hover:shadow-[0_0_12px_#60a5fa]"
                >
                  🛒 Buy Now
                </button>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-purple-700 hover:bg-purple-800 text-white px-4 py-2 rounded-md transition cursor-pointer  hover:border-megenda-400 hover:shadow-[0_0_12px_#60a5fa]"
                >
                  Remove
                </button>
              </div>
            ))}
          </>
        )}
      </SignedIn>
    </div>
  );
}

export default Cart;
