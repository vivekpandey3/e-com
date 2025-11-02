import React from "react";

import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  UserButton,
  SignInButton,
  SignUpButton,
} from "@clerk/clerk-react";

function Navbar() {
  const baseLink =
    "text-white font-medium px-4 py-2 rounded-md transition-all duration-300";
  const activeLink = "bg-white/20 border-b-2 border-white";

  return (
    <nav className="bg-blue-500 px-6 py-3 flex justify-between items-center shadow-md">
      <h2 className="text-white text-xl font-semibold m-0">🛍️ E-com</h2>

      <div className="flex gap-4 ">
        <NavLink 
          to="/"
          className={({ isActive }) =>
            isActive ? `${baseLink} ${activeLink}` : baseLink
          }
        >
          Products
        </NavLink>

        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? `${baseLink} ${activeLink}` : baseLink
          }
        >
          Cart 🛒
        </NavLink>
      </div>

      <div className="flex gap-3 items-center">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>

        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-white text-blue-500 px-4 py-2 rounded-md cursor-pointer hover:bg-blue-50">
              Login
            </button>
          </SignInButton>

          <SignUpButton mode="modal">
            <button className="bg-blue-700 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-blue-800">
              Signup
            </button>
          </SignUpButton>
        </SignedOut>
      </div>
    </nav>
  );
}

export default Navbar;
