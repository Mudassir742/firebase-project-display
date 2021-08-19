export const createProject = (project) => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();

    firestore
      .collection("projects")
      .add({
        ...project,
        authFirstName: "Noob",
        authLastName: "coder",
        authid: 123,
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
