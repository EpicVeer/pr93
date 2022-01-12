var firebaseConfig = {
      apiKey: "AIzaSyDCMSgNwkePZ21zF27L-OXve_Fpos0XINc",
      authDomain: "kwitter-21582.firebaseapp.com",
      databaseURL: "https://kwitter-21582-default-rtdb.firebaseio.com",
      projectId: "kwitter-21582",
      storageBucket: "kwitter-21582.appspot.com",
      messagingSenderId: "54478237837",
      appId: "1:54478237837:web:6287817e3f004b9271b2c4"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
