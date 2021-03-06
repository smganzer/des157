// JavaScript Document

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

    // variables used to make tool tip appear when title is hovered
    var valentine = document.getElementById("valentine");
    var instruct = document.getElementById("instruct");
    var instructTimer;

    // check for mouseover on title
    valentine.addEventListener("mouseover", function() {
        instructTimer = setTimeout(showInstruct, 1000);
        valentine.style.cursor = "pointer";
    });

    // check for mouseout on title
    valentine.addEventListener("mouseout", function() {
        clearTimeout(instructTimer);
        instruct.style.opacity = 0;
    });

    // funtion used to make instructions appear
    function showInstruct() {
        instruct.style.opacity = 1;
    };


    // make array of images and corresponding tool tips
    var people = ["images/trump.png", "images/michelle.png", "images/spongebob.png", "images/tomi.png", "images/nick.png", "images/paulrand.png", "images/abe.png", "images/devos.png", "images/drake.png"];
    var tip = ["you're fired!", "those arms tho", "how fun!", "cute snowflake", "accept this rose?", "nice one!", "what a guy", "watch for bears", "1(800)hotline-babe"];

    // variables for original heart, tooltip and if the image has appeared yet
    var heart = document.getElementById("heart");
    var tooltip = document.getElementById("tooltip");
    var open = false;
    var i;

    // variables used to show name of who you got and a comment about it
    var name = document.getElementById("name");
    var names = ["Donald Trump", "Michelle Obama", "Spongebob", "Tomi Lahren", "The Bachelor", "Paul Rand", "Abe Lincoln", "Betsy Devos", "Drake"];
    var comments = ["(you're gonna regret that one)", "(what a lucky soul you are)", "(date at the Krusty Krab?)", "(I'd cancel on her if I were you)", "(meet him in the overnight suite)", "(the legend himself)", "(better not go to a show)", "(maybe go on an educational date?)", "(hold on girl you're going home)"];

    // variable used for audio when click happens
    var snd = new Audio("sparkle.mp3");

    // timer variable for tooltip on heart
    var tipTimer;

    // when heart is clicked: random image/tooltip/name combo, also make sound
    heart.addEventListener("click", function() {
        i = Math.floor(Math.random() * 9);
        heart.src = people[i];
        open = true;
        tipTimer = setTimeout(showToolTip, 1000);
        name.innerHTML = names[i];
        name.style.opacity = 1;
        snd.play();
    });

    // when mouse over, change the cursor and set timer
    heart.addEventListener("mouseover", function() {
        heart.style.cursor = "pointer";
        if (open) {
            tipTimer = setTimeout(showToolTip, 2000);
        }
    });

    // when mouseout, clear timer and hide tooltip
    heart.addEventListener("mouseout", function() {
        clearTimeout(tipTimer);
        tooltip.style.opacity = 0;
    });

    // function used to show tooltip and fill in text
    function showToolTip() {
        tooltip.innerHTML = tip[i];
        tooltip.style.opacity = 1;
    }

    // comment below name and its timer
    var comment = document.getElementById("comment");
    var commentTimer;

    // when name is hovered, start a timer and change cursor
    name.addEventListener("mouseover", function() {
        if (open) {
            commentTimer = setTimeout(showComment, 1000);
            name.style.cursor = "pointer";
        }
    });

    // when mouse off name, clear timer and remove comment
    name.addEventListener("mouseout", function() {
        clearTimeout(commentTimer);
        comment.style.opacity = 0;
    })

    // function to make comment appear and give it its text
    function showComment() {
        console.log("i is:" + i);
        comment.innerHTML = comments[i];
        comment.style.opacity = 1;
    }





});
