// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
console.log(process.env.REACT_FIREBASE_API_KEY);
const firebaseConfig = {
  apiKey: process.env.REACT_FIREBASE_API_KEY,
  authDomain: "blog-app-add24.firebaseapp.com",
  projectId: "blog-app-add24",
  storageBucket: "blog-app-add24.appspot.com",
  messagingSenderId: "724812184068",
  appId: "1:724812184068:web:3d97618cfbae0d4e961351"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app;