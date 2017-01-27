// JavaScript Document

console.log("reading");

document.addEventListener("DOMContentLoaded", function(event) {
    console.log("DOM fully loaded and parsed");

document.inputs.onsubmit = processForm;
// make a function to read the form
function processForm(){
  // put each input in its own js variable
  var adj1 = document.inputs.adj1.value;
  var noun1 = document.inputs.noun1.value;
  var adj2 = document.inputs.adj2.value;
  var noun2 = document.inputs.noun2.value;
  var noun3 = document.inputs.noun3.value;
  var verb1 = document.inputs.verb1.value;
  var verb2 = document.inputs.verb2.value;
  var verb3 = document.inputs.verb3.value;
  var plnoun = document.inputs.plnoun.value;
  var verb4 = document.inputs.verb4.value;
  var adj3 = document.inputs.adj3.value;
  var noun4 = document.inputs.noun4.value;
  var adj4 = document.inputs.adj4.value;
  var verb5 = document.inputs.verb5.value;
  var noun5 = document.inputs.noun5.value;
  var noun6 = document.inputs.noun6.value;


  // make a variable to hold results text
  // call innerHTML to fill in the <p> for results

  //line1
  var results1 = document.getElementById("results1");
  results1.innerHTML = ("I miss the " + adj1 + " Kanye, straight from the go Kanye");
  //line2
  var results2 = document.getElementById("results2");
  results2.innerHTML = ("Chop up the " + noun1 + " Kanye, set on his goals Kanye");
  //line 3
  var results3 = document.getElementById("results3");
  results3.innerHTML = ("I hate the " + adj2 + " Kanye, the bad " + noun2 + " Kanye");
  //line 4
  var results4 = document.getElementById("results4");
  results4.innerHTML = ("The always rude Kanye, spaz in the " + noun3 + " Kanye");
  //line 5
  var results5 = document.getElementById("results5");
  results5.innerHTML = ("I miss the sweet Kanye, " + verb1 + " up the beats Kanye");
  //line 6
  var results6 = document.getElementById("results6");
  results6.innerHTML = ("I gotta say, at that time I'd like to " + verb2 + " Kanye");
  //line 7
  var results7 = document.getElementById("results7");
  results7.innerHTML = ("See, I " + verb3 + " Kanye, there wasn't any Kanyes");
  //line 8
  var results8 = document.getElementById("results8");
  results8.innerHTML = ("And now I look and look around and there's so many " + plnoun);
  //line 9
  var results9 = document.getElementById("results9");
  results9.innerHTML = ("I used to " + verb4 + " Kanye, I used to " + verb4 + " Kanye");
  //line 10
  var results10 = document.getElementById("results10");
  results10.innerHTML = ("I even had the " + adj3 + " polo, I thought I was Kanye");
  //line 11
  var results11 = document.getElementById("results11");
  results11.innerHTML = ("What if Kanye made a song about " + noun4);
  //line 12
  var results12 = document.getElementById("results12");
  results12.innerHTML = ("Called 'I Miss the Old Kanye,' man that'd be so " + adj4 + "!");
  //line 13
  var results13 = document.getElementById("results13");
  results13.innerHTML = ("That's all it was Kanye, we still " + verb5 + " Kanye");
  //line 14
  var results14 = document.getElementById("results14");
  results14.innerHTML = ("And I love you like " + noun5 + " loves " + noun6);

  return false;
}

});
