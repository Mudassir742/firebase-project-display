import React from "react";
import { Link } from "react-router-dom";
import {connect} from "react-redux"

import SignOutLinks from "./SignOutLinks";
import SignInLinks from "./SignInLinks";


const Navbar = (props) => {
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

const mapStateToProps = (state) =>{
  console.log(state)
  return{

  }
}

export default connect(mapStateToProps)(Navbar);
