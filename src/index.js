import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAO9BTzTYCmby97lMEyooEl_LW_MXOvX0g",
  authDomain: "petshop-33f9c.firebaseapp.com",
  projectId: "petshop-33f9c",
  storageBucket: "petshop-33f9c.appspot.com",
  messagingSenderId: "536255877643",
  appId: "1:536255877643:web:5f61b0e9c210672e522d0e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


