
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDkCxaCRYMSvz95tTqiNhBBNbftpv6Mrp4",
  authDomain: "loginbuyer-1ec8d.firebaseapp.com",
  projectId: "loginbuyer-1ec8d",
  storageBucket: "loginbuyer-1ec8d.appspot.com",
  messagingSenderId: "620846995571",
  appId: "1:620846995571:web:0813c8ad4c40da7e82b206",
  measurementId: "G-ZQNT0DGCMZ"
};


export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth =getAuth(app);