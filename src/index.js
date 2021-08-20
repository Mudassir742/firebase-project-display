import React from "react";
import ReactDOM from "react-dom";
import { createStore,applyMiddleware } from "redux";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { createFirestoreInstance, getFirestore } from "redux-firestore";
import {
  ReactReduxFirebaseProvider,
  isLoaded,
  getFirebase,
} from "react-redux-firebase";

import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";

import App from "./App";
import rootReducer from "./store/reducers/rootReducer";
import firebaseConfig from "./config/fbconfig";

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestmapsInSnapshots: true, merge: true });

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);


const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  updateProfileOnLogin: false,
};

const rrfProps = {
  firebase,
  config: profileSpecificProps,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth );
  
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
  return children;
}

ReactDOM.render(
  <Provider store={store}>
    <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
    </ReactReduxFirebaseProvider>
  </Provider>,
  document.getElementById("root")
);
