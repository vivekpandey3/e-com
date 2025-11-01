import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { CartProvider } from "./Components/Context/CartContext.jsx";
import { ClerkProvider } from "@clerk/clerk-react";

// ✅ Import env key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key! Add it in .env file");
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <CartProvider>
        <App />
      </CartProvider>
    </ClerkProvider>
  </StrictMode>
);
