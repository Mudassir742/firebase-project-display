import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore"
import { firebaseReducer } from "react-redux-firebase";
import authReducer from "./authReducer";
import ProjectReducer from "./projectReducer";


const rootReducer = combineReducers({
    auth:authReducer,
    project:ProjectReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
})

export default rootReducer