// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCidOpwSPkzxwbkrWN_Enz9vxt4oaDgYWs",
  authDomain: "trendicator-7dfa2.firebaseapp.com",
  projectId: "trendicator-7dfa2",
  storageBucket: "trendicator-7dfa2.appspot.com",
  messagingSenderId: "706349670787",
  appId: "1:706349670787:web:b7eaf7c2593bced90cd6b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();


