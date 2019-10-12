import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCoL73dTJAaLLFOFdq6d6n-oGGDHw0q4W4",
    authDomain: "devishop-3b6b4.firebaseapp.com",
    databaseURL: "https://devishop-3b6b4.firebaseio.com",
    projectId: "devishop-3b6b4",
    storageBucket: "devishop-3b6b4.appspot.com",
    messagingSenderId: "116904766215",
    appId: "1:116904766215:web:b332fc0a0708ecb10873a2",
    measurementId: "G-B5JZ4QWQ78"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;