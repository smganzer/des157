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
    var patalohainfo = document.getElementById("patalohainfo");

    // make outline appear on hover
    pataloha.addEventListener("mouseover", function(){
      pataloha.style.borderColor = "#ecb200";
      pataloha.style.cursor = "pointer";
    });

    pataloha.addEventListener("mouseout", function(){
      pataloha.style.borderColor = "transparent";
    });

    // make content appear when clicked
    pataloha.addEventListener("click", function(){
      patalohainfo.style.display = "block";
    })

    // close the content when the x is clicked
    closepat.addEventListener("click", function(){
      patalohainfo.style.display = "none";
    });

    // change cursor on x hover
    closepat.addEventListener("mouseover", function(){
      closepat.style.cursor = "pointer";
    });

    // almanac beer
    // creating the variables
    var beer = document.getElementById("beer");
    var beerinfo = document.getElementById("beerinfo");
    var closebeer = document.getElementById("closebeer");

    // make border appear on hover
    beer.addEventListener("mouseover", function(){
      beer.style.borderColor = "white";
      beer.style.cursor = "pointer";
    });

    beer.addEventListener("mouseout", function(){
      beer.style.borderColor = "transparent";
    });

    // make the content appear when clicked
    beer.addEventListener("click", function(){
      beerinfo.style.display = "block";
    });

    // close the banner
    closebeer.addEventListener("click", function(){
      beerinfo.style.display = "none";
    });

    // make pointer cursor when over the x
    closebeer.addEventListener("mouseover", function(){
      closebeer.style.cursor = "pointer";
    })


});
