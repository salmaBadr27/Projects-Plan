import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./store/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {
	reduxFirestore,
	getFirestore,
	createFirestoreInstance,
} from "redux-firestore";
import { ReactReduxFirebaseProvider, getFirebase } from "react-redux-firebase";
import firebaseConfig from "./config/fbConfig";
import firebase from "firebase/app";

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
		// reactReduxFirebase(firebaseConfig), // redux binding for firebase
		reduxFirestore(firebase, firebaseConfig) // redux bindings for firestore and firebase
	)
);

//react-redux-firebase property to pass to the provider so i can connect to firestore db and async data
const reactReduxFirebaseProps = {
	dispatch: store.dispatch,
	config: {
		//project collections
		projects: "projects",
	},
	firebase,
	createFirestoreInstance,
};
ReactDOM.render(
	<Provider store={store}>
		<ReactReduxFirebaseProvider {...reactReduxFirebaseProps}>
			<App />
		</ReactReduxFirebaseProvider>
	</Provider>,

	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
export default store;
