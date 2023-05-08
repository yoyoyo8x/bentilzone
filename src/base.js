import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_Auth_Domain",
  databaseURL: "YOUR_Database_URL",
});

const base = Rebase.createClass(firebase.database());

export { firebaseApp };
export default base;
