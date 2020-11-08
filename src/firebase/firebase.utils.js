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

  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();


  if (!snapShot.exists) {
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
};

// we do not use this function
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {

  const collectionRef = firestore.collection(collectionKey);
  const batch = firestore.batch();

  // we are passing collections, and for each collection (5 - mens womens hats jackets sneakers)
  // firestore makes us documentReference object, with unique generated id (bcs in .doc() we don't pass any params)
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj); // setting value of obj to newDocRef
  });

  return await batch.commit();  // returns promise
}


firebase.initializeApp(config)

export const convertCollectionsSnapshotToMap = (collections) => {

  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });

   /*
       We pasing in our initial object, the initial object goes into the first new collection,
       and it sets first value equal to the title but in lowercase.

       eg. -> hats 
          It will be an empty object with a property of hats that's equal to the hats collection,
          and then it returns that object and goes into second object, eg. jackets.

          Then it's going to set a new prop. called jackets and then equal the jackets collection ... 
                                            
                                                  ....

      eg.

   */
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator}, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
