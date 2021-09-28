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
    
    user_nmae = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Welcome"+ user_nmae + "!";
    
//ADD YOUR FIREBASE LINKS HERE
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}
function add_room()
{
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
        });
        localStorage.setItem("room_name",room_name);
        window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log(room_name);
      row = "<div class='romm_name' id="+room_name+" onclick='RedirectToRoomName(this.id)'>#"+room_name+"</div> <hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function RedirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
}
