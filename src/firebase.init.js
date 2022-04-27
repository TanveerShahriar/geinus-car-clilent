// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLPxYxp4p9uTO8lDhfO26FoMXf_MrSVGY",
  authDomain: "genius-car-services-eb83b.firebaseapp.com",
  projectId: "genius-car-services-eb83b",
  storageBucket: "genius-car-services-eb83b.appspot.com",
  messagingSenderId: "84930105186",
  appId: "1:84930105186:web:f0ee8e52bbf15c4391663b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
