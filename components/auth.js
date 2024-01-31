import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
//import { GoogleSignin } from 'react-native-google-signin/google-signin';

const auth = getAuth();

//UNCOMMENT TO IMPLEMENT GOOGLE SIGNIN
// const WEB_CLIENT_ID = process.env.EXPO_PUBLIC_DAILY_HOROSCOPE_API_KEY

// // Configure Google Sign
// GoogleSignin.configure({
//     webClientId: WEB_CLIENT_ID,
//   });

export const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = () => {
    return signOut(auth);
};

//UNCOMMENT TO IMPLEMENT GOOGLE SIGNIN
// export const googleSignIn = async () => {
//     try {
//       // Get the users ID token
//       const { idToken } = await GoogleSignin.signIn();
  
//       // Create a Google credential with the token
//       const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
//       // Sign-in the user with the credential
//       return auth().signInWithCredential(googleCredential);
//     } catch (error) {
//       console.error(error);
//     }
//   };

