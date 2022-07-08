// function sendMessage() {
//   var getName = document.getElementById("yourName").value;
//   var getEmail = document.getElementById("yourEmail").value;
//   var getSubject = document.getElementById("yourSubject").value;
//   var getMess = document.getElementById("yourMessage").value;
//   var status = true;
//   if (getName == "") {
//     document.getElementById("getErr1").innerHTML = "Please fill out your name.";
//     status = false;
//   } else if (getName.length > 100) {
//     document.getElementById("getErr1").innerHTML =
//       "Your name should not exceed 100 characters.";
//     status = false;
//   } else {
//     document.getElementById("getErr1").innerHTML = "";
//   }
//   if (getEmail == "") {
//     document.getElementById("getErr2").innerHTML =
//       "Please fill out your email.";
//     status = false;
//   } else if (getEmail.length > 100) {
//     document.getElementById("getErr2").innerHTML =
//       "Your email should not exceed 100 characters.";
//     status = false;
//   } else {
//     document.getElementById("getErr2").innerHTML = "";
//   }
//   if (getSubject == "") {
//     document.getElementById("getErr3").innerHTML =
//       "Please fill out your subject.";
//     status = false;
//   } else if (getSubject.length < 50) {
//     document.getElementById("getErr3").innerHTML =
//       "Subject should not shorter than 50 characters.";
//     status = false;
//   } else if (getSubject.length > 250) {
//     document.getElementById("getErr3").innerHTML =
//       "Subject should not exceed 250 characters.";
//     status = false;
//   } else {
//     document.getElementById("getErr3").innerHTML = "";
//   }
//   if (getMess == "") {
//     document.getElementById("getErr4").innerHTML =
//       "Please fill out your message.";
//     status = false;
//   } else if (getMess.length > 500) {
//     document.getElementById("getErr4").innerHTML =
//       "Message should not exceed 500 characters.";
//     status = false;
//   } else {
//     document.getElementById("getErr4").innerHTML = "";
//   }

//   return status;
// }
