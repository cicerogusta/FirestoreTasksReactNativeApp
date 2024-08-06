
import {initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {initializeApp} from "firebase/app";
import firebase from "firebase/compat";




const firebaseConfig = {
    apiKey: "AIzaSyA86vIReTsumAQ2E4IuvPR-NsjzTGXNUkw",
    authDomain: "noteapp-dee18.firebaseapp.com",
    projectId: "noteapp-dee18",
    storageBucket: "noteapp-dee18.appspot.com",
    messagingSenderId: "464460554955",
    appId: "1:464460554955:web:a31782f0671d99a5f5f14e"
};

// Initialize Firebase

  firebase.initializeApp(firebaseConfig)
  const database = firebase.firestore()
  const auth = initializeAuth(firebase.initializeApp(firebaseConfig), {
    persistence: getReactNativePersistence(AsyncStorage),
  });
 
export {auth}
export default database