import authReducer from "./authReducer";
import { combineReducers } from "redux";

// import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from "react-redux-firebase";
import surveyReducer from "./surveyReducer";

export default combineReducers({
    auth: authReducer,
    firebase: firebaseReducer,
    survey: surveyReducer,
});
