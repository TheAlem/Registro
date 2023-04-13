import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAGzhNe9KcViiOLbXRXurcsDoRVgJtdNAs",
    authDomain: "proyecto-estudiantes-web-ii.firebaseapp.com",
    databaseURL: "https://proyecto-estudiantes-web-ii-default-rtdb.firebaseio.com",
    projectId: "proyecto-estudiantes-web-ii",
    storageBucket: "proyecto-estudiantes-web-ii.appspot.com",
    messagingSenderId: "391459149425",
    appId: "1:391459149425:web:d0a13d39e3f201ab0aedd0",
    measurementId: "G-8PZFJCV22R"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };