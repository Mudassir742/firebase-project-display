import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import { authAction } from "../../store/actions/authAction";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();

    this.props.login(this.state);
  };

  render() {

    const {loginTrue} = this.props

    if(loginTrue.uid) return <Redirect to="/"/>

    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>

          <div className="input-field">
            <button className="btn pink ligthen-1 z-depth-0">Login</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth.authError,
    loginTrue:state.firebase.auth
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (credential) => dispatch(authAction(credential)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
