// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import * as firebase from "firebase"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAox_cardMoTjX7dPz2ysP4yhmb9nPgagM",
  authDomain: "react-native-study-de4b1.firebaseapp.com",
  databaseURL: "https://react-native-study-de4b1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "react-native-study-de4b1",
  storageBucket: "react-native-study-de4b1.appspot.com",
  messagingSenderId: "422005060824",
  appId: "1:422005060824:web:c27e0a492b170c2533d3ad",
  measurementId: "G-25V4JX7P0Y"
};

// Initialize Firebase
export const db = initializeApp(firebaseConfig);
// const db = getFirestore(app);
export const auth = getAuth(db)
// const analytics = getAnalytics(db);

