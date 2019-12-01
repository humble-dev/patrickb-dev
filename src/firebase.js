import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

// Patrickb-dev proj.
const firebaseConfig = {
  apiKey: "AIzaSyCTelI6qipw6_oCJgU8paSO4G_pHbSk_Bg",
  authDomain: "patrickb-dev.firebaseapp.com",
  databaseURL: "https://patrickb-dev.firebaseio.com",
  projectId: "patrickb-dev",
  storageBucket: "patrickb-dev.appspot.com",
  messagingSenderId: "931306689925",
  appId: "1:931306689925:web:0fe817b9635ead4b"
};

firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

export const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export const signInWithEmail = (email, password, callback) => {
  console.log("kapow");
  auth
    .signInWithEmailAndPassword(email, password)
    .then(UserCredential => {
      if (UserCredential) {
        callback();
      }
    })
    .catch(error => {
      if (error.code === "auth/wrong-password") {
        alert("Wrong password.");
      } else {
        alert(error.message);
      }

      console.log(error);
    });
};

export const signOut = callback => {
  console.log("hit");
  auth.signOut();
  callback();
};

// * For experimenting
window.firebase = firebase;

export const createUserProfileDocument = async (user, additionalData) => {
  if (!user) return;

  // Get a reference to the location in the Firestore where the user
  // document may or may not exist.
  const userRef = firestore.doc(`users/${user.uid}`);

  // Go and fetch a document from that location.
  const snapshot = await userRef.get();

  // If there isn't a document for that user. Let's use information
  // that we got from either Google or our sign up form.
  if (!snapshot.exists) {
    const { displayName, email, photoURL } = user;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.error("Error creating user", console.error);
    }
  }

  // Get the document and return it, since that's what we're
  // likely to want to do next.
  return getUserDocument(user.uid);
};

export const getUserDocument = async uid => {
  if (!uid) return null;
  try {
    return firestore.collection("users").doc(uid);
  } catch (error) {
    console.error("Error fetching user", error.message);
  }
};

export default firebase;
