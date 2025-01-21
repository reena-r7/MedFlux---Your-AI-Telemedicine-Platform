// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/*const firebaseConfig = {
  apiKey: "AIzaSyC6I7IIq8vgyOYfcpiUaxXrWl0Q0_Q2zzo",
  authDomain: "medflux-86878.firebaseapp.com",
  databaseURL: "https://medflux-86878-default-rtdb.firebaseio.com",
  projectId: "medflux-86878",
  storageBucket: "medflux-86878.firebasestorage.app",
  messagingSenderId: "608034255001",
  appId: "1:608034255001:web:e4e21b268208f5ce8d0808",
  measurementId: "G-BG2RVTKXDC"
};*/
const firebaseConfig = {
  apiKey: "AIzaSyCNTekUek53g8dWgMQ1OCkB4H3PnTvGVx0",
  authDomain: "med-flux-1.firebaseapp.com",
  projectId: "med-flux-1",
  storageBucket: "med-flux-1.firebasestorage.app",
  messagingSenderId: "814766949787",
  appId: "1:814766949787:web:d54a4a6e5af7219ba70d3e",
  measurementId: "G-YBQZS46JE6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
 export {db};