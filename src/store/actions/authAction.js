export const signInAction = (credential) => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signInWithEmailAndPassword(credential.email, credential.password)
      .then(() => {
        dispatch({ type: "LOGIN_SUCCESS" });
      })
      .catch((err) => dispatch({ type: "LOGIN_ERROR", payload: err }));
  };
};

export const logout = () => {
  return (dispatch, getState, { getFirebase }) => {
    const firebase = getFirebase();

    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOG_OUT" });
      })
      .catch((err) => {
        dispatch({ type: "LOG_OUT_ERR", payload: err.message });
      });
  };
};

export const register = (newUser) => {
  return(dispatch,getState,{getFirebase,getFirestore}) => {
    const firebase = getFirebase();
    const firestore = getFirestore()

    firebase.auth().createUserWithEmailAndPassword(
      newUser.email,
      newUser.password  
    ).then((res)=>{
      return firestore.collection('users').doc(res.user.uid).set({
        authFirstName:newUser.firstName,
        authLastName:newUser.lastName,
        initials:newUser.firstName[0] + newUser.lastName[0]
      })
    }).then(()=>{
      dispatch({type:"SIGNUP_SUCCESS"})
    }).catch((err)=>{
      dispatch({type:"SIGNUP_ERROR",payload:err.message})
    })
  }
}