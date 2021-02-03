var firebaseConfig = {
    apiKey: "AIzaSyD9AVRiS2X_LGbYjnUNZrDROeDNotzphBI",
    authDomain: "kwitter-6299d.firebaseapp.com",
    databaseURL: "https://kwitter-6299d-default-rtdb.firebaseio.com",
    projectId: "kwitter-6299d",
    storageBucket: "kwitter-6299d.appspot.com",
    messagingSenderId: "1008794435860",
    appId: "1:1008794435860:web:a1684b85b3d38c990c0201"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
function addUser()
{
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose:"kwitter test"
    });
}