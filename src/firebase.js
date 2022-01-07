import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCutYzjLU3NyJ0L_4akZTzOR48WBQHtZTM",
  authDomain: "firechat-9f760.firebaseapp.com",
  projectId: "firechat-9f760",
  storageBucket: "firechat-9f760.appspot.com",
  messagingSenderId: "300968729365",
  appId: "1:300968729365:web:345f9d825f25d7c039a71c",
  measurementId: "G-YZMGQPWVTP",
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
