import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBlnDO6q09U6v0oaNU9zCncJaOsK3k9F6Y",
  authDomain: "react-auth-demo-32b6b.firebaseapp.com",
  projectId: "react-auth-demo-32b6b",
  storageBucket: "react-auth-demo-32b6b.appspot.com",
  messagingSenderId: "806097889485",
  appId: "1:806097889485:web:e033661eb1779f5d3de184",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
