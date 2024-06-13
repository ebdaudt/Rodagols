import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants";
// Configuração firebase
const firebaseConfig = {
  apiKey: "AIzaSyCZe0ByhuglrlHEpvZBVVWOC1KSak30tC4",
  authDomain: "rodagols.firebaseapp.com",
  projectId: "rodagols",
  storageBucket: "rodagols.appspot.com",
  messagingSenderId: "234229292487",
  appId: "1:234229292487:web:ce9d6a10707f10537b0de2"
};
// Iniciar firebase
initializeApp(firebaseConfig);
export const auth = getAuth();
export const database = getFirestore();
