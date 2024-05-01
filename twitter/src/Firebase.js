import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnCNNyWBYX07EkdOtycw-5XNt9_8cycIk",
  authDomain: "twitter-12827.firebaseapp.com",
  databaseURL: "https://twitter-12827-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "twitter-12827",
  storageBucket: "twitter-12827.appspot.com",
  messagingSenderId: "60845937602",
  appId: "1:60845937602:web:ac81665ed439465f68bc5b"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;