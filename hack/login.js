
  var firebaseConfig = {
    apiKey: "AIzaSyAMQhUh6Rva9xiVwehgHgLXMGcCvYLzh48",
    authDomain: "web-login-515a9.firebaseapp.com",
    databaseURL: "https://web-login-515a9.firebaseio.com",
    projectId: "web-login-515a9",
    storageBucket: "web-login-515a9.appspot.com",
    messagingSenderId: "311366026370",
    appId: "1:311366026370:web:4f1d7ac3eeb83bf38e209b",
    measurementId: "G-P0TL4VE1K2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  firebase.auth.Auth.Persistence.LOCAL

 

   $("btn_login").click(function()
 {
  var userEmail=$("email_field").value;
  var userPass=$("password_field").value;
  if(userEmail!="" && userPass!=""){
    var result= firebase.auth().signInWithEmailAndPassword(userEmail, userPass);
    result.catch(function(error) {
     var errorCode = error.code;
     var errorMessage = error.message;
     console.log(errorCode);
     onsole.log(errorMessage);
     window.alert("Error:"+errorMessage);
   
     } );
    }
  else{
    window.alert("Enter info");
  }
 })
 $("btn_logout").click(function()
 {
  firebase.auth().signOut().then(() => {
    // Sign-out successful.
  }).catch((error) => {
    // An error happened.
  });
 })
  