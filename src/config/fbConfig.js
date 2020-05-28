import "firebase/firestore";
import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
	apiKey: "AIzaSyDHUHjtfoZr7IbsbKRN4rixcro0UAUpd-I",
	authDomain: "salma-badr-projects-plan.firebaseapp.com",
	databaseURL: "https://salma-badr-projects-plan.firebaseio.com",
	projectId: "salma-badr-projects-plan",
	storageBucket: "salma-badr-projects-plan.appspot.com",
	messagingSenderId: "105762067881",
	appId: "1:105762067881:web:3b97e8843ccef39d95e0b8",
	measurementId: "G-T3NMHPK54M",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
