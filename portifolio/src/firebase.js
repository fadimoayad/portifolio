// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore,collection} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAWNWiT2S8jeV9T6gyvFxJxtyOaKFTa6mg",
  authDomain: "portfolio-e3b63.firebaseapp.com",
  projectId: "portfolio-e3b63",
  storageBucket: "portfolio-e3b63.appspot.com",
  messagingSenderId: "23976661583",
  appId: "1:23976661583:web:372c9df78f9e2e8679103a",
  measurementId: "G-WSE3WB7FM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);