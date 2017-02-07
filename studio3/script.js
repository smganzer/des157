// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // KEITH HARING STICKER
    // creating variables
    var buddies = document.getElementById("buddies");
    var buddyinfo = document.getElementById("buddyinfo");
    var closebuddy = document.getElementById("closebuddy");

    // border when hovered
    buddies.addEventListener("mouseover", function(){
      buddies.style.borderColor = "#a882c2";
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

    // change the cursor when it hovers the x
    closebuddy.addEventListener("mouseover", function(){
      closebuddy.style.cursor = "pointer";
    });

    // WOODWARD STICKER
    // creating variables
    var woodward = document.getElementById("woodward");
    var woodwardinfo = document.getElementById("woodwardinfo");
    var closeww = document.getElementById("closeww");

    // border when hovered
    woodward.addEventListener("mouseover", function(){
      woodward.style.borderColor = "black";
      woodward.style.cursor = "pointer";
    });

    woodward.addEventListener("mouseout", function(){
      woodward.style.borderColor = "transparent";
    });

    // show the content when clicked
    woodward.addEventListener("click", function(){
      woodwardinfo.style.display = "block";
    });

    // close the content when the x is clicked
    closeww.addEventListener("click", function(){
      woodwardinfo.style.display = "none";
    });

    // change the cursor when it hovers the x
    closeww.addEventListener("mouseover", function(){
      closeww.style.cursor = "pointer";
    });

    // PATALOHA STICKER
    // creating variables
    var pataloha = document.getElementById("pataloha");
    var patalohainfo = document.getElementById("patalohainfo");

    // border when hovered
    pataloha.addEventListener("mouseover", function(){
      pataloha.style.borderColor = "#ecb200";
      pataloha.style.cursor = "pointer";
    });

    pataloha.addEventListener("mouseout", function(){
      pataloha.style.borderColor = "transparent";
    });

    // show the content when clicked
    pataloha.addEventListener("click", function(){
      patalohainfo.style.display = "block";
    })

    // close the content when the x is clicked
    closepat.addEventListener("click", function(){
      patalohainfo.style.display = "none";
    });

    // change the cursor when it hovers the x
    closepat.addEventListener("mouseover", function(){
      closepat.style.cursor = "pointer";
    });

    // ALMANAC BEER STICKER
    // creating variables
    var beer = document.getElementById("beer");
    var beerinfo = document.getElementById("beerinfo");
    var closebeer = document.getElementById("closebeer");

    // border when hovered
    beer.addEventListener("mouseover", function(){
      beer.style.borderColor = "white";
      beer.style.cursor = "pointer";
    });

    beer.addEventListener("mouseout", function(){
      beer.style.borderColor = "transparent";
    });

    // show the content when clicked
    beer.addEventListener("click", function(){
      beerinfo.style.display = "block";
    });

    // close the content when the x is clicked
    closebeer.addEventListener("click", function(){
      beerinfo.style.display = "none";
    });

    // change the cursor when it hovers the x
    closebeer.addEventListener("mouseover", function(){
      closebeer.style.cursor = "pointer";
    });

    // TAHOE STICKER
    // creating variables
    var tahoe = document.getElementById("tahoe");
    var tahoeinfo = document.getElementById("tahoeinfo");
    var closetahoe = document.getElementById("closetahoe");

    // border when hovered
    tahoe.addEventListener("mouseover", function(){
      tahoe.style.borderColor = "#0074c3";
      tahoe.style.cursor = "pointer";
    });

    tahoe.addEventListener("mouseout", function(){
      tahoe.style.borderColor = "transparent";
    });

    // show the content when clicked
    tahoe.addEventListener("click", function(){
      tahoeinfo.style.display = "block";
    });

    // close the content when the x is clicked
    closetahoe.addEventListener("click", function(){
      tahoeinfo.style.display = "none";
    });

    // change the cursor when it hovers the x
    closetahoe.addEventListener("mouseover", function(){
      closetahoe.style.cursor = "pointer";
    });


});
