
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {

    apiKey: "AIzaSyDIcnnMWPq7vXdNyMjEdyxFBWuK41JLHzs",

    authDomain: "movie-tube-75cac.firebaseapp.com",

    projectId: "movie-tube-75cac",

    storageBucket: "movie-tube-75cac.appspot.com",

    messagingSenderId: "919989815412",

    appId: "1:919989815412:web:17b3639374ab6569d36921",

    measurementId: "G-ZDDX2QNS7B"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);