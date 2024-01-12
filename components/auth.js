// auth.js
import firebase from "../firebaseConfig";
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const auth = getAuth();

export const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signOutUser = () => {
    return firebase.auth().signOut();
};

