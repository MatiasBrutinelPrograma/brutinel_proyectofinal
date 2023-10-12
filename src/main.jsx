import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgoEtNpqHWPmkBCNd5xT4qwvWL4YGZGhU",
  authDomain: "tienda-de-muebles-938e3.firebaseapp.com",
  projectId: "tienda-de-muebles-938e3",
  storageBucket: "tienda-de-muebles-938e3.appspot.com",
  messagingSenderId: "640617866755",
  appId: "1:640617866755:web:3f9c9c5eccae516ddf9036",
  measurementId: "G-FXHZ6YWFSL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
