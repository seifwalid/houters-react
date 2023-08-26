// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getStorage} from "firebase/storage";
// Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDhJMW38uNF0zXiV06lawTiYyFajGBkfew",
  authDomain: "hounters-ed13a.firebaseapp.com",
  projectId: "hounters-ed13a",
  storageBucket: "hounters-ed13a.appspot.com",
  messagingSenderId: "688667257298",
  appId: "1:688667257298:web:511d748cba6f61f45a800b",
  measurementId: "G-CQBM7NN25T",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
