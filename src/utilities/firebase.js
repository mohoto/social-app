import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBcplAIMkQoQdRbtZzIlmvOSXIw8NZhrOE",
    authDomain: "social-app-c543d.firebaseapp.com",
    databaseURL: "https://social-app-c543d.firebaseio.com",
    projectId: "social-app-c543d",
    storageBucket: "social-app-c543d.appspot.com",
    messagingSenderId: "683834114696",
    appId: "1:683834114696:web:966cee3fd994dda0c7d53d"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const db = firebase.firestore();

export {auth};

export default db;