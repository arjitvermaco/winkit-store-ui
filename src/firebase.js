// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA6973eudcmHjtq_W9NvMvmy-DyJLOLn2c",
  authDomain: "winkit-66c51.firebaseapp.com",
  projectId: "winkit-66c51",
  storageBucket: "winkit-66c51.appspot.com",
  messagingSenderId: "888039309981",
  appId: "1:888039309981:web:c41dff69856c781b7d8a74"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

