// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
      apiKey: "AIzaSyDWsJUcKXN_jjUzDuWrv9axZ8y50sp25VU",
      authDomain: "let-s-chat-f87f7.firebaseapp.com",
      databaseURL: "https://let-s-chat-f87f7-default-rtdb.firebaseio.com",
      projectId: "let-s-chat-f87f7",
      storageBucket: "let-s-chat-f87f7.appspot.com",
      messagingSenderId: "1041802759849",
      appId: "1:1041802759849:web:934284f8f0e81ad616a3b8",
      measurementId: "G-RXHCTXBGNB"
    };
    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

      user_name = localStorage.getItem("user_name");
      document.getElementById("user_name").innerHTML = "Welcome "+user_name+"!";

      function addRoom(){
            room_name = document.getElementById("room_name").value;
            firebase.database().ref("/").child(room_name).update({
                  purpose : "adding room name"
            });
            localStorage.setItem("room_name", room_name);
            window.location="kwitter_page.html";
      }

      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
            console.log("room_name -"+room_name);
            row = "<div class='room_name' id="+room_name+"onclick='redirectToRoomName(this.id)'>#"+room_name+"</div><hr>";
            document.getElementById("output").innerHTML = row;
            });});}
      getData();

      function redirectToRoomName(name){
            console.log(name);
            localStorage.setItem("room_name", name);
            window.location = "let'schat_page.html";
      }

      function logout(){
            localStorage.removeItem("user_name");
            localStorage.removeItem("room_name");
            window.location = "index.html";
      }