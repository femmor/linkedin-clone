import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyBAsCgcMHiGIzB56jVxSZAb0ge8juEC2iI",
    authDomain: "linkedin-clone-4c57b.firebaseapp.com",
    projectId: "linkedin-clone-4c57b",
    storageBucket: "linkedin-clone-4c57b.appspot.com",
    messagingSenderId: "463047091615",
    appId: "1:463047091615:web:d18167919b3699d38549aa"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth()

export {db, auth};