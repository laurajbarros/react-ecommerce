import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDnjOwFVnix5q1lG275fJnwyKDtVBBd7-c",
  authDomain: "ecommerce-laura.firebaseapp.com",
  databaseURL: "https://ecommerce-laura.firebaseio.com",
  projectId: "ecommerce-laura",
  storageBucket: "ecommerce-laura.appspot.com",
  messagingSenderId: "157427329002",
  appId: "1:157427329002:web:e6c054dc45738c9c51f493",
  measurementId: "G-N2BZ3QTZ05"
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user here', error.message);
    }
  }
  return userRef
}


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const SignInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
