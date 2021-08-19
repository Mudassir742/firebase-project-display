import firebase from "firebase/app";
import "firebase/firestore"
import "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAjl6zaf7y6BaV6gU7v6iSanv9joqv9JdE",
    authDomain: "coder-mario-40d23.firebaseapp.com",
    projectId: "coder-mario-40d23",
    storageBucket: "coder-mario-40d23.appspot.com",
    messagingSenderId: "168271619595",
    appId: "1:168271619595:web:8b5266f444bd8e2fb3890e",
    measurementId: "G-WQ236NWTWB"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestmapsInSnapshots:true})

export default firebase;