import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAv7htY2nFpSNGGXzYO1Ju7HvxR842qWpg",
    authDomain: "crwn-clothing-db-8eee0.firebaseapp.com",
    projectId: "crwn-clothing-db-8eee0",
    storageBucket: "crwn-clothing-db-8eee0.appspot.com",
    messagingSenderId: "814631839545",
    appId: "1:814631839545:web:715b09ef177c2d96ad6ae8",
    measurementId: "G-CWKSGN3144"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;    