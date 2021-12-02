const firebaseConfig = {
    apiKey: "AIzaSyA4-RAzovFgE3rgUUTF7jbQdw9x0qIQ6bU",
    authDomain: "whatsapp-9f393.firebaseapp.com",
    databaseURL: "https://whatsapp-9f393-default-rtdb.firebaseio.com",
    projectId: "whatsapp-9f393",
    storageBucket: "whatsapp-9f393.appspot.com",
    messagingSenderId: "597517447682",
    appId: "1:597517447682:web:b61794f80e05fc64fd6d1b",
    measurementId: "G-EZXYHTZQ3J"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE
user_name = localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!"; 

function addRoom() 
{ 
    room_name = document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update(
           { purpose : "adding room name" 
          }); 
          localStorage.setItem("room_name", room_name); 
          window.location = "kwitter_page.html"; 
    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
     console.log("Room Name - " + Room_names); 
     row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
     document.getElementById("output").innerHTML += row; 
    }); 
});
}
getData();
function redirectToRoomName(name) 
{ 
    console.log(name); 
    localStorage.setItem("room_name", name); 
    window.location = "Kwitter_Page.html"; 
} 