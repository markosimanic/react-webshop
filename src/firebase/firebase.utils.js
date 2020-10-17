import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAQ1JbMQ5z5QMlGqhB3V2IULd5MewPyxxw",
    authDomain: "react-webshop-45675.firebaseapp.com",
    databaseURL: "https://react-webshop-45675.firebaseio.com",
    projectId: "react-webshop-45675",
    storageBucket: "react-webshop-45675.appspot.com",
    messagingSenderId: "724696122757",
    appId: "1:724696122757:web:f56619b46f709b1bab70ec",
    measurementId: "G-10VJHMHT7S"
  };


  export const createUserProfileDocument = async (userAuth, additionalData) => {
     
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();


      if(!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          })
        } catch (error) {
          console.log('error creating user', error.message)
        }
      }

      return userRef;
  }
  

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt : 'select_account'});
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
