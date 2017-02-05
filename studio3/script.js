// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    var buddies = document.getElementById("buddies");
    var buddyinfo = document.getElementById("buddyinfo");

    buddies.addEventListener("mouseover", function(){
      buddies.style.borderColor = "pink";
    });

    buddies.addEventListener("mouseout", function(){
      buddies.style.borderColor = "transparent";
    });

    buddies.addEventListener("click", function(){
      buddyinfo.style.display = "block";
    });



});
