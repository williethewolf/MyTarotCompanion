import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth();

export const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => {
    return signOut(auth);
};


