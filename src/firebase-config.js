import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCZghluebhQYqIkaz31GsFyO2QPn-UjNDQ",
    authDomain: "music-9ae9f.firebaseapp.com",
    databaseURL: "https://music-9ae9f-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "music-9ae9f",
    storageBucket: "music-9ae9f.appspot.com",
    messagingSenderId: "1026836909562",
    appId: "1:1026836909562:web:6295ec23b36eaa2c942843",
    measurementId: "G-HMJYR5JZPR"
  };

  export const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app);
  export const database = getDatabase();
  export const auth = getAuth(app);