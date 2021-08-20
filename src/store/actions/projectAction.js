export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {

    const firestore = getFirestore();

    const userInfo = getState().firebase.profile
    const userID = getState().firebase.auth.uid

    firestore
      .collection("projects")
      .add({
        ...project,
        authFirstName: userInfo.authFirstName,
        authLastName: userInfo.authLastName,
        authid: userID,
        createdAt: new Date(),
      })
      .then(() => {
        dispatch({ type: "CREATE_PROJECT", payload: project });
      })
      .catch((err) => {
        dispatch({ type: "CREATE_PROJECT_ERR", payload: err });
      });
  };
};
