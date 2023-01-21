import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

export const firebaseConfig = {
  apiKey: "AIzaSyAzo3dGFKgtD60GdMulo7FwALIiIZ8neJw",
  authDomain: "blog-cb005.firebaseapp.com",
  projectId: "blog-cb005",
  storageBucket: "blog-cb005.appspot.com",
  messagingSenderId: "157232541478",
  appId: "1:157232541478:web:949494bc369db696e01be7",
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();
export const auth = getAuth(app);
