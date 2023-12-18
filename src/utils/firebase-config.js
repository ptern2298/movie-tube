
import { initializeApp} from'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from "firebase/auth";

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


const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { auth };
export default db;