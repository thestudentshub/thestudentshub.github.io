var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "admin" && password == "admin" || username == 'Deven' && password == 'Dattani'){
window.location = "Home.html"; // Redirecting to other page.
return false;
}
else{
attempt --;// Decrementing by one.
swal("You have "+attempt+" attempt's left",'','warning');
// Disabling fields after 3 attempts.
if( attempt == 0){
swal ('','Contact thestudenthubhelp@gmail.com to find out your username and password!', 'warning')    
document.getElementById("username").disabled = true;
document.getElementById("password").disabled = true;
document.getElementById("submit").disabled = true;
return false;
}
}
}