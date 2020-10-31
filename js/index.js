firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
        user.getIdToken(true).then((token) => console.log(token)).catch((err) => { console.log(err)});
        if(user != null) window.location.replace("home.html");
    // User is signed in.
  } else {
      user = null;
      window.location.replace("index.html");
    // No user is signed in.
  }
});





function login() {
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

   firebase.auth().signInWithEmailAndPassword(userEmail, userPassword).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
       alert(errorMessage);
  // ...
});
}
