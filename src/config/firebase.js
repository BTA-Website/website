// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDx_5-pi87QIBHDm3Y2hyANpkb-EJQxeWc",
  authDomain: "bta-website-5b13a.firebaseapp.com",
  projectId: "bta-website-5b13a",
  storageBucket: "bta-website-5b13a.appspot.com",
  messagingSenderId: "159414328659",
  appId: "1:159414328659:web:823d1fa50cc72f652015a6",
  measurementId: "G-SZ9XCMM75F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);
export const googleProvider = new GoogleAuthProvider();