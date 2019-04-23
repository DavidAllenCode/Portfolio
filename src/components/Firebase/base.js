import rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: ""
});

const base = rebase.createClass(firebaseApp.database());

// this is a name export
export { firebaseApp };

// this is a default export
export default base;
