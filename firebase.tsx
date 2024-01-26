// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD0ReytWgXwobget1lDfekS_U6FzIVLqQI",
  authDomain: "vita-209cf.firebaseapp.com",
  projectId: "vita-209cf",
  storageBucket: "vita-209cf.appspot.com",
  messagingSenderId: "488090561628",
  appId: "1:488090561628:web:4f962a3ef50aa6496e4a99",
  measurementId: "G-1DS6W92MSQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const google_provider = new GoogleAuthProvider()