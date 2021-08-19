import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore"
import authReducer from "./authReducer";
import ProjectReducer from "./projectReducer";


const rootReducer = combineReducers({
    auth:authReducer,
    project:ProjectReducer,
    firestore:firestoreReducer
})

export default rootReducer