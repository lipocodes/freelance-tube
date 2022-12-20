
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDCQUFEA2gxPX13oJaQVND4kLXet2fLGBM",
  authDomain: "freelancetube-82da5.firebaseapp.com",
  projectId: "freelancetube-82da5",
  storageBucket: "freelancetube-82da5.appspot.com",
  messagingSenderId: "490960674948",
  appId: "1:490960674948:web:83c028fd4f858b8f06a2d1"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const provider = new GoogleAuthProvider();

export default app;