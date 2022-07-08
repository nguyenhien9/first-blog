function orderNow() {
  var getCakeName = document.getElementById("cakeName").value;
  var getName = document.getElementById("yourName").value;
  var getMess = document.getElementById("yourMessage").value;
  var getDate = document.getElementById("deliverDate").value;
  var getAdd = document.getElementById("address").value;
  var now = new Date();
  var inputDate = new Date(getDate);
  var status = true;

  if (getCakeName == "") {
    document.getElementById("getErr1").innerHTML = "Please select our product.";
    status = false;
  } else {
    document.getElementById("getErr1").innerHTML = "";
  }
  if (getName == "") {
    document.getElementById("getErr2").innerHTML = "Please fill out your name.";
    status = false;
  } else if (getName.length > 100) {
    document.getElementById("getErr2").innerHTML =
      "Your name should not exceed 100 characters.";
    status = false;
  } else {
    document.getElementById("getErr2").innerHTML = "";
  }
  if (getMess.length > 30) {
    document.getElementById("getErr3").innerHTML =
      "Message should not exceed 30 characters.";
    status = false;
  } else {
    document.getElementById("getErr3").innerHTML = "";
  }
  if (getDate == "") {
    document.getElementById("getErr4").innerHTML =
      "Please fill out the deliver date.";
    status = false;
  } else if (inputDate < now) {
    document.getElementById("getErr4").innerHTML = "Invalid Date!";
    status = false;
  } else {
    document.getElementById("getErr4").innerHTML = "";
  }

  if (getAdd == "") {
    document.getElementById("getErr5").innerHTML =
      "Please fill out the address.";
    status = false;
  } else if (getAdd.length > 500) {
    document.getElementById("getErr5").innerHTML =
      "Address should not exceed 500 characters.";
    status = false;
  } else {
    document.getElementById("getErr5").innerHTML = "";
  }

  return status;
}
