import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCR6YymPBobqL5mu1MUpS95RVssAEMp-e8",
    authDomain: "pauz-db.firebaseapp.com",
    databaseURL: "https://pauz-db.firebaseio.com",
    projectId: "pauz-db",
    storageBucket: "",
    messagingSenderId: "246061100968",
    appId: "1:246061100968:web:4561eaf2cf69868c3bb79d",
    measurementId: "G-CYCNBDWNGN"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;