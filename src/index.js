import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider, useSelector } from "react-redux";
import thunk from "redux-thunk";
import { createFirestoreInstance, getFirestore } from "redux-firestore";
import {
  ReactReduxFirebaseProvider,
  isLoaded,
  getFirebase,
} from "react-redux-firebase";

import App from "./App";
import rootReducer from "./store/reducers/rootReducer";
import fbconfig from "./config/fbconfig";

const store = createStore(
  rootReducer,
  applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore }))
);

const rrfProps = {
  firebase: fbconfig,
  config: fbconfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

function AuthIsLoaded({ children }) {
  const auth = useSelector((state) => state.firebase.auth);
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
