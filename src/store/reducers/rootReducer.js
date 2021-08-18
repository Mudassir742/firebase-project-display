import { combineReducers } from "redux";
import authReducer from "./authReducer";
import ProjectReducer from "./projectReducer";

const rootReducer = combineReducers({
    auth:authReducer,
    project:ProjectReducer
})

export default rootReducer