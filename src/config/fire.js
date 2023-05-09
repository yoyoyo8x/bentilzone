import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBD-6f6OMt9bB1SMhgwx0100nimVbheHCA",
  authDomain: "bentilzone-7ed12.firebaseapp.com",
  projectId: "bentilzone-7ed12",
  storageBucket: "bentilzone-7ed12.appspot.com",
  messagingSenderId: "818406269814",
  appId: "1:818406269814:web:09cd8fc609dd21082e9057",
  measurementId: "G-KY1Y7J277R"
};

initializeApp(firebaseConfig);
export const auth = getAuth()
export const google = new GoogleAuthProvider()
export const github = new GithubAuthProvider()