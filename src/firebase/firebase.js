// FIREBASE
import * as firebase from "firebase/app";
import 'firebase/auth';

// FIREBASE KEYS
import firebaseKey from './config'

const firebaseConfig = {
    apiKey: firebaseKey.apiKey,
    authDomain: firebaseKey.authDomain,
    databaseURL: firebaseKey.databaseURL,
    projectId: firebaseKey.projectId,
    storageBucket: firebaseKey.storageBucket,
    messagingSenderId: firebaseKey.messagingSenderId,
    appId: firebaseKey.appId,
    measurementId: firebaseKey.measurementId
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;