import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBciqmWvx3Y8iiR_IUqnmcfAVZIOztKRG0",
  authDomain: "proyectoreactjs-77912.firebaseapp.com",
  projectId: "proyectoreactjs-77912",
  storageBucket: "proyectoreactjs-77912.appspot.com",
  messagingSenderId: "238026982893",
  appId: "1:238026982893:web:f7eb38d3842639e48c13e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
