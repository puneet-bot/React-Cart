import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBFhvFOsCy_OuoeLCIIZzSjrH-ae72sUro",
  authDomain: "cart-425ba.firebaseapp.com",
  projectId: "cart-425ba",
  storageBucket: "cart-425ba.appspot.com",
  messagingSenderId: "546453887927",
  appId: "1:546453887927:web:386851dfc59f25d91c2632"
};

const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);