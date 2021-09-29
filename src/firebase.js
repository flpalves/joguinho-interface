import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyCUPLus70GXy6SDKYFoLeBFl2PlmmTq4qE",
    authDomain: "joquinho-aa8fc.firebaseapp.com",
    databaseURL: "https://joquinho-aa8fc-default-rtdb.firebaseio.com",
    projectId: "joquinho-aa8fc",
    storageBucket: "joquinho-aa8fc.appspot.com",
    messagingSenderId: "393053084200",
    appId: "1:393053084200:web:a9476f5b71d79829e4331d"  
};

firebase.initializeApp(firebaseConfig)


// utils
const db = firebase.firestore()
const auth = firebase.auth()

// collection references
const joguinhoCollection = db.collection('joguinho')
// const countriesCollection = db.collection('countries')

// export utils/refs
export {
  db,
  auth,
  joguinhoCollection
}