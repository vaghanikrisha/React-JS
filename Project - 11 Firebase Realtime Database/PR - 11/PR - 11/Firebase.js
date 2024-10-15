import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD-xm-NOHMg9078QF17dfuikLSl73g6CFM",
  authDomain: "crud-realtime-db-456e0.firebaseapp.com",
  databaseURL: "https://crud-realtime-db-456e0-default-rtdb.firebaseio.com",
  projectId: "crud-realtime-db-456e0",
  storageBucket: "crud-realtime-db-456e0.appspot.com",
  messagingSenderId: "791686204856",
  appId: "1:791686204856:web:73e905e6636e12a7b0134d",
  measurementId: "G-LRZ4DFXKY2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
