import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux"
import { logout } from "../../store/actions/authAction";

const SignInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/createproject">New Project</NavLink>
      </li>
      <li>
        <button onClick={props.logOut}>Log Out</button>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          CD
        </NavLink>
      </li>
    </ul>
  );
};


const mapDispatchToProps = (dispatch) =>{
  return{
    logOut: ()=> dispatch(logout())
  }
}

export default connect(null,mapDispatchToProps)(SignInLinks);
