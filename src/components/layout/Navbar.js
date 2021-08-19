import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignOutLinks from "./SignOutLinks";
import SignInLinks from "./SignInLinks";

const Navbar = (props) => {
  console.log(props.auth);

  const { auth } = props;

  const showLinks = auth.uid ? <SignInLinks /> : <SignOutLinks />;

  return (
    <nav className="nav-wrpapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          Coder
        </Link>
        {showLinks}
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

export default connect(mapStateToProps)(Navbar);
