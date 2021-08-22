import firebase from 'firebase/app'
import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyBoiKYz6V5GX5hETtNVoSVE8IT9nkRLlBI",
    authDomain: "popclick-255b7.firebaseapp.com",
    projectId: "popclick-255b7",
    storageBucket: "popclick-255b7.appspot.com",
    messagingSenderId: "833348332836",
    appId: "1:833348332836:web:dfcc11ec497676cf6b57b1"
  };
// Get a Firestore instance
export const db = firebase
  .initializeApp(firebaseConfig)
  .firestore()

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

// if using Firebase JS SDK < 5.8.0
db.settings({ timestampsInSnapshots: true })