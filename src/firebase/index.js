import firebase from "firebase/app";
import "@firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyD6HV6Ijqp6KLefl2gNSxh02UgzFJZ5X_U",
  authDomain: "penstore-cca5e.firebaseapp.com",
  projectId: "penstore-cca5e",
  storageBucket: "penstore-cca5e.appspot.com",
  messagingSenderId: "197864481250",
  appId: "1:197864481250:web:ae3ed8f1ef653c3f8c19bb",
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}
