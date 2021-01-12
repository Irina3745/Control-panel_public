import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyCC4LAXFHNLWv0aH-b8A2q__lkxmt0d2NI",
    authDomain: "todo-app-56f0e.firebaseapp.com",
    databaseURL: "https://todo-app-56f0e.firebaseio.com",
    projectId: "todo-app-56f0e",
    storageBucket: "todo-app-56f0e.appspot.com",
    messagingSenderId: "19088898980",
    appId: "1:19088898980:web:dba5f8d350b8fc3efb5f31",
    measurementId: "G-TN7XGE7MV0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;