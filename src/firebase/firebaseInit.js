import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCEcuVztqNX98u7R-HEaWtuOt2ZvfOyOOY",
  authDomain: "eyublog-1679d.firebaseapp.com",
  projectId: "eyublog-1679d",
  storageBucket: "eyublog-1679d.appspot.com",
  messagingSenderId: "731347582788",
  appId: "1:731347582788:web:465ecdec1cf5a17ed82111",
};

const firebaseApp = firebase.initialize(firebaseConfig);
const timestamp = firebase.firestore.fieldvalue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
