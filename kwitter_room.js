
const firebaseConfig = {
      apiKey: "AIzaSyAbbpFlz-X4VlZSCzTB-LO71bK8_IEdL_s",
      authDomain: "kwitter-e0eeb.firebaseapp.com",
      projectId: "kwitter-e0eeb",
      storageBucket: "kwitter-e0eeb.appspot.com",
      messagingSenderId: "653236461974",
      appId: "1:653236461974:web:fe00999b77c1a336bd7db7",
      measurementId: "G-D3VZN9V1CN"
};
firebase.initializeApp(firebaseConfig);

username = localStorage.getItem("username");

document.getElementById("intro").innerHTML = "welcome " + username + " ✌";

function addRoom() {
      room_name = document.getElementById("addroom").value;

      firebase.database().ref("/").child(room_name).update
            ({
                  purpose: "adding room"
            });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("firebase").innerHTML = ""; snapshot.forEach(function (
                  childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Room name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("firebase").innerHTML += row;
                  //End code
            });
      });
}
getData();

function redirectToRoomName(names)
{
      console.log(names);
      localStorage.setItem("room_name", names);

      window.location = "kwitter_page.html";
}