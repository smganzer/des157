// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    alert("Thank you for taking the time to review this project. Please open it in the iPhone 6 viewport of google chrome by right clicking, and selecting inspect. Or view this on an iPhone. My goal in this project is to create a safer school environment for middle school children.");

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






});
