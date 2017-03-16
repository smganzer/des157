// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");


    // variables to make login pop up
    var loginScreen = document.getElementById("login-screen");
    var login = document.getElementById("login");

    // when button is clicked, show login screen
    login.addEventListener("click", function() {
        loginScreen.style.opacity = "1";
        loginScreen.style.zIndex = "1";
    });

    // variables for login form
    var entry = false;

    document.inputs.onsubmit = processForm;

    function processForm() {
        // put each input in its own js variable
        var username = document.inputs.username.value;
        var password = document.inputs.password.value;
        var code = document.inputs.code.value;

        if (username == "" || password == "" || code == "") {
            alert("fill out the form, please");

        } else {
            // change entry to true bc they're in, and hide login screen.
            entry = true;
            loginScreen.style.opacity = "0";
            namespace.innerHTML = ("Hello, " + username);
            namespace.className = "show";
            login.className = "hide";
        }

        return false;
    }

    var closeScreen = document.getElementById("close-screen");

    closeScreen.addEventListener("click", function(){
      loginScreen.style.opacity = "0";
      loginScreen.style.zIndex = "0";
    });

    var report = document.getElementById("report");

    report.addEventListener("click", function(){
      if (entry == true) {
        location.href="report/index.html";
      }
      else{
        alert("You must be logged in to use this feature");
      }
    });







});
