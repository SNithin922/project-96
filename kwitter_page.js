var firebaseConfig = {
    apiKey: "AIzaSyDThiwz0zoMNULjENIyjZZT5k8Lem9ia_M",
    authDomain: "project-kwitter-app-2836c.firebaseapp.com",
    databaseURL: "https://project-kwitter-app-2836c-default-rtdb.firebaseio.com",
    projectId: "project-kwitter-app-2836c",
    storageBucket: "project-kwitter-app-2836c.appspot.com",
    messagingSenderId: "888270762936",
    appId: "1:888270762936:web:c387a0dff8d16ca435d54d",
    measurementId: "G-XQG9YDV1E7"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

room_name = localStorage.getItem("room_name");
user_name = localStorage.getItem("user_name");
msg = document.getElementById("msg").value;

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
} });  }); }

getData();
function send()
{
    firebase.database().ref(room_name).push({
   name : user_name,
   mesage : msg,
   like : 0
    });
}