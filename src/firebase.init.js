// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADXdKK9Vc1ZF-5zXHHOqW2hRBbiKxCq5g",
  authDomain: "volunteer-network-93112.firebaseapp.com",
  projectId: "volunteer-network-93112",
  storageBucket: "volunteer-network-93112.appspot.com",
  messagingSenderId: "242992575002",
  appId: "1:242992575002:web:f3a244fde92d88b28a57a3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;

