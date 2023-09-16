import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyATBUOdVBsS07C5_jV_sTJLbCLm4oZ98O4",
  authDomain: "playground-962ee.firebaseapp.com",
  databaseURL:
    "https://playground-962ee-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "playground-962ee",
  storageBucket: "playground-962ee.appspot.com",
  messagingSenderId: "871829807893",
  appId: "1:871829807893:web:cd36cbce16594ac3eebf1c",
};
const app = initializeApp(firebaseConfig);
//makes it connect firebase and app

export const db = getFirestore(app);
//getting to firestore
