import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux"
import { logout } from "../../store/actions/authAction";

const SignInLinks = (props) => {

  const profileInitials = props.profile ? props.profile.initials : null

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
          {profileInitials}
        </NavLink>
      </li>
    </ul>
  );
};

const mapStateToProps =(state)=>{
  return{
    profile:state.firebase.profile
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{
    logOut: ()=> dispatch(logout())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignInLinks);
