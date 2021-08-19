const initialState = {
  authError: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR": {
      console.log("Login Error");
      return {
        ...state,
        authError: "Login Error",
      };
    }

    case "LOGIN_SUCCESS": {
      console.log("Login Success");
      return {
        ...state,
        authError: null,
      };
    }

    default:
      return state;
  }
};

export default authReducer;
