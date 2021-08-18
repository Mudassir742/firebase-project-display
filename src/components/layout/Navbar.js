import React from "react";
import { Link } from "react-router-dom";

import SignOutLinks from "./SignOutLinks";
import SignInLinks from "./SignInLinks";


const Navbar = () => {
  return (
    <nav className="nav-wrpapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Coder
        </Link>
        <SignOutLinks/>
        <SignInLinks/>
      </div>
    </nav>
  );
};

export default Navbar;
