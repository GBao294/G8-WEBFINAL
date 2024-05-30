import { getFirestore } from "firebase/firestore";
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


  const adminConfig = {
    apiKey: "AIzaSyCNqxr8wYRW1B0DE-xTozEvdTeTYjb7jzg",
    authDomain: "adminbaomatweb.firebaseapp.com",
    projectId: "adminbaomatweb",
    storageBucket: "adminbaomatweb.appspot.com",
    messagingSenderId: "382173757870",
    appId: "1:382173757870:web:6076879faaf1b7d374483f"
  };

  export const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app);
  export const database = getDatabase(app);
  export const auth = getAuth(app);


  export const adminApp = initializeApp(adminConfig, 'adminApp')
  export const adminDb = getFirestore(adminApp);
  export const adminDatabase = getDatabase(adminApp);
  export const adminAuth = getAuth(adminApp);