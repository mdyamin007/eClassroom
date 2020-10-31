function logout() {
    firebase.auth().signOut();
    alert("Signing out...");
    window.location.href="index.html";
    user = null;
}
