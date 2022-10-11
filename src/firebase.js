import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA1_JTbALDRgb3LIR3qq3aFkEdEdEKObTA",
    authDomain: "instagram-clone-curso-a5bc4.firebaseapp.com",
    projectId: "instagram-clone-curso-a5bc4",
    storageBucket: "instagram-clone-curso-a5bc4.appspot.com",
    messagingSenderId: "1015777515246",
    appId: "1:1015777515246:web:e4a53acd8a8a3694f145ff",
    measurementId: "G-XZX12F7Y83"
  });
  
  const db = firebase.firestore(); /*DATABASE IN REAL TIME */
  const auth = firebase.auth(); /*USERS AUTHENTICATION = LOGIN SYSTEM */
  const storage = firebase.storage(); /* FILES UPLOAD*/
  const functions = firebase.functions();

  export {db, auth, storage, functions};

