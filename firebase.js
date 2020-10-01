import * as firebase from 'firebase';
import 'firebase/auth';

import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyCz6W3emiuY6lHULJ-Of_rhjU-SwztrAOw",
    authDomain: "scheduler-2b6a5.firebaseapp.com",
    databaseURL: "https://scheduler-2b6a5.firebaseio.com",
    projectId: "scheduler-2b6a5",
    storageBucket: "scheduler-2b6a5.appspot.com",
    messagingSenderId: "30964039647",
    appId: "1:30964039647:web:6d5c21ee7ded851ea90e6a",
    measurementId: "G-68PLM33G6W"
};

firebase.initializeApp(firebaseConfig);

export { firebase };