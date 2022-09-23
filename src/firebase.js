// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getStorage} from 'firebase/storage'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyDLgp1lANbSbkLEPBl3JOp6lPNXpVuoVFg",
  authDomain: "cproject-f77e6.firebaseapp.com",
  projectId: "cproject-f77e6",
  storageBucket: "cproject-f77e6.appspot.com",
  messagingSenderId: "325354001827",
  appId: "1:325354001827:web:9a417e2b0b5d74ce4af616"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore()