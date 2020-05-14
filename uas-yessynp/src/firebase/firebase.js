import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

  const firebaseConfig = {
    apiKey: "AIzaSyDqAVpOLYpwjnta9pmvJWbLR5t-u5dSsy4",
    authDomain: "uasfbf.firebaseapp.com",
    databaseURL: "https://uasfbf.firebaseio.com",
    projectId: "uasfbf",
    storageBucket: "uasfbf.appspot.com",
    messagingSenderId: "408836161074",
    appId: "1:408836161074:web:4c298328c1975d679a062b",
    measurementId: "G-R1SC4EVTKC"
  };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;