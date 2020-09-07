import firebase from 'firebase';
require ('@firebase/firestore') 
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBhmrKwuiQVkbA5AlblKjtBIu_BHpgwrGE",
    authDomain: "storyhub-9d4fa.firebaseapp.com",
    databaseURL: "https://storyhub-9d4fa.firebaseio.com",
    projectId: "storyhub-9d4fa",
    storageBucket: "storyhub-9d4fa.appspot.com",
    messagingSenderId: "19767237551",
    appId: "1:19767237551:web:56675ed456d96155816d5a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()