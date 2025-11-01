import React from "react";
import { NavLink } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/clerk-react";


function Navbar() {
  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "500",
    padding: "8px 16px",
    borderRadius: "6px",
    transition: "all 0.3s ease",
  };

  const activeStyle = {
    backgroundColor: "#ffffff33",
    borderBottom: "2px solid #fff",
  };

  return (
    <nav
      style={{
        backgroundColor: "#007bff",
        padding: "14px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      }}
    >
      {/* Logo / Brand Name */}
      <h2 style={{ color: "white", margin: 0 }}>🛍️ E-com</h2>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "16px" }}>
        <NavLink
          to="/"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          style={({ isActive }) =>
            isActive ? { ...linkStyle, ...activeStyle } : linkStyle
          }
        >
          Cart 🛒
        </NavLink>
      </div>

 <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
        {/* When user is signed in */}
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        {/* When user is signed out */}
        <SignedOut>
          <SignInButton mode="modal">
            <button
              style={{
                background: "white",
                color: "#007bff",
                border: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Login
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button
              style={{
                background: "#0056b3",
                color: "white",
                border: "none",
                padding: "8px 14px",
                borderRadius: "6px",
                cursor: "pointer",
              }}
            >
              Signup
            </button>
          </SignUpButton>
        </SignedOut>
      </div>

    </nav>
  );
}

export default Navbar;
