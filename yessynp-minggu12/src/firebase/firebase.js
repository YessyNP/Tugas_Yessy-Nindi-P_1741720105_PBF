import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore'

const firebaseConfig = {

        apiKey: "AIzaSyCYBz8CgK2Q-K2Y60-AXMxDM-CEQw4_z6U",
        authDomain: "minggu12-61776.firebaseapp.com",
        databaseURL: "https://minggu12-61776.firebaseio.com",
        projectId: "minggu12-61776",
        storageBucket: "minggu12-61776.appspot.com",
        messagingSenderId: "963225361933",
        appId: "1:963225361933:web:cd3eca990c09bc34f67f44",
        measurementId: "G-KW2GZDJZ86"
      };

export const myFirebase = firebase.initializeApp(firebaseConfig);
const baseDb = myFirebase.firestore();
export const db = baseDb;