import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBirOCoUYTZAd47PI51Bomx807nwwjWc2w",
  authDomain: "netflix-viewer-d2a57.firebaseapp.com",
  projectId: "netflix-viewer-d2a57",
  storageBucket: "netflix-viewer-d2a57.appspot.com",
  messagingSenderId: "974903284724",
  appId: "1:974903284724:web:64ceec932e13f3a3f81fa1",
  measurementId: "G-HM9Q57XLDB"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
