
import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAvnmsFOQz7A331Q7V2L2x7zWS6gOKGbeM",
  authDomain: "react-practicofinal.firebaseapp.com",
  projectId: "react-practicofinal",
  storageBucket: "react-practicofinal.appspot.com",
  messagingSenderId: "769298704570",
  appId: "1:769298704570:web:f1077e7da8f09ff6007a83"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

setPersistence(auth, browserLocalPersistence);