var firebaseConfig = {
    apiKey: "AIzaSyB1Pssz6SSezFjZR3JLYinNakIxomWb9zU",
    authDomain: "twitter-37c08.firebaseapp.com",
    projectId: "twitter-37c08",
    storageBucket: "twitter-37c08.appspot.com",
    messagingSenderId: "246615551625",
    appId: "1:246615551625:web:d3ea9db6ab0a8d96672058",
    measurementId: "G-V8NJTMJH67"
  };
  firebase.initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";