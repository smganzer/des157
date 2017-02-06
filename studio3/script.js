// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");
    // for the keith harring sticker
    //creating variables
    var buddies = document.getElementById("buddies");
    var buddyinfo = document.getElementById("buddyinfo");
    var closebuddy = document.getElementById("closebuddy");

    // add border when hovered
    buddies.addEventListener("mouseover", function(){
      buddies.style.borderColor = "#f45413";
      buddies.style.cursor = "pointer";
    });

    buddies.addEventListener("mouseout", function(){
      buddies.style.borderColor = "transparent";
    });

    // show the content when clicked
    buddies.addEventListener("click", function(){
      buddyinfo.style.display = "block";
    });

    // close the content when the x is clicked
    closebuddy.addEventListener("click", function(){
      buddyinfo.style.display = "none";
    });

    // change the cursor when it goes over the x
    closebuddy.addEventListener("mouseover", function(){
      closebuddy.style.cursor = "pointer";
    });

    // for the woodward sticker
    // creating variables
    var woodward = document.getElementById("woodward");
    var woodwardinfo = document.getElementById("woodwardinfo");
    var closeww = document.getElementById("closeww");

    // border on hover
    woodward.addEventListener("mouseover", function(){
      woodward.style.borderColor = "black";
      woodward.style.cursor = "pointer";
    });

    woodward.addEventListener("mouseout", function(){
      woodward.style.borderColor = "transparent";
    });

    // make content appear when clicked
    woodward.addEventListener("click", function(){
      woodwardinfo.style.display = "block";
    });

    // close the content when the x is clicked
    closeww.addEventListener("click", function(){
      woodwardinfo.style.display = "none";
    });

    // change cursor on x hover
    closeww.addEventListener("mouseover", function(){
      closeww.style.cursor = "pointer";
    });

    // pataloha sticker
    // create variables
    var pataloha = document.getElementById("pataloha");

    // make outline appear on hover
    pataloha.addEventListener("mouseover", function(){
      pataloha.style.borderColor = "#ecb200";
    });

    pataloha.addEventListener("mouseout", function(){
      pataloha.style.borderColor = "transparent";
    });





});
