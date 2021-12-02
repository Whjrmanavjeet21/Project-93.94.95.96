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
//YOUR FIREBASE LINKS
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name"); 

function send() 
{ 
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({ 
                name:user_name, 
                message:msg, 
                like:0 
          }); 
          document.getElementById("msg").value = ""; 
    }

function getData() 
{ 
    firebase.database().ref("/"+room_name).on('value', function(snapshot) 
    { 
          document.getElementById("output").innerHTML = ""; 
          snapshot.forEach(function(childSnapshot) { 
                childKey  = childSnapshot.key; 
                childData = childSnapshot.val(); 
                if(childKey != "purpose") 
                {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data); 
name = message_data['name']; 
message = message_data['message']; 
like = message_data['like']; 
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'>"; 
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>"; 
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>"; 
row = name_with_tag + message_with_tag +like_button + span_with_tag; 
document.getElementById("output").innerHTML += row;
//End code
    } });  }); }
getData();
function updateLike(message_id)
{
    console.log("click on like button-" + message_id);
    button_id = message_id;
    likes = document.getElementById(button_id).value;
    updated_likes = Number(likes) + 1;
    console.log(updated_likes);
    firebase.database().ref(room_name).child(message_id).update({ 
          like : updated_likes 
    });
}