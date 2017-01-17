// p5 file

// open the console window of any browser to see console.log() messages,
// like print() messages in Processing
console.log("Shelby's Banner");

// Shelby Ganzert, 2017
// interactive banner, will reveal my name when clicked


function setup(){
  var myCanvas=createCanvas(800, 250);
  myCanvas.parent("mySketch");
  background("#ffffff"); // CHANGE TO MATCH WEBPAGE BACKGROUND COLOR
  stroke ("#ffffff");
}

function draw(){
  if(mouseIsPressed){
    fill("#ffffff"); // CHANGE TO MATCH WEBPAGE BACKGROUND COLOR

    // ROW 1
    for(var x = 22; x < 800; x = x + 40){
      if (x==142 || x==277 || x==412 || x==547 || x==682) // SPACING BETWEEN LETTERS
          x = x + 15;
      if(x == 197 || x == 467 || x == 507 || x == 737){ // ONLY FILL THE ONES WANTED
        ellipse(x, 45, 25, 25);
      }
    }

    // ROW 2
    for(var x = 22; x < 800; x = x + 40){
      if (x==142 || x==277 || x==412 || x==547 || x==682) // SPACING BETWEEN LETTERS
          x = x + 15;
      if(x==62 || x==102 || x==197 || x==332 || x==372 || x ==467 || x==507 || x==602 || x==697 || x==777) // ONLY FILL THE ONES WANTED
         ellipse(x, 85, 25, 25);
    }

    // ROW 3
    for(var x = 22; x < 800; x = x + 40){
      if (x==142 || x==277 || x==412 || x==547 || x==682) // SPACING BETWEEN LETTERS
          x = x + 15;
      if(x == 467 || x == 507 || x == 697 || x == 777) // ONLY FILL THE ONES WANTED
        ellipse(x, 125, 25, 25);
    }

    // ROW 4
    for(var x = 22; x < 800; x = x + 40){
      if (x==142 || x==277 || x==412 || x==547 || x==682) // SPACING BETWEEN LETTERS
          x = x + 15;
      if(x==22 || x==62 || x==197 || x==332 || x==372 || x ==467 || x==507 || x==602 || x==697 || x==777) // ONLY FILL THE ONES WANTED
        ellipse(x, 165, 25, 25);
    }

    // ROW 5
    for(var x = 22; x < 800; x = x + 40){
      if (x==142 || x==277 || x==412 || x==547 || x==682) // SPACING BETWEEN LETTERS
          x = x + 15;
      if(x == 197 || x == 697 || x == 777) // ONLY FILL THE ONES WANTED
        ellipse(x, 205, 25, 25);
    }

    // INITIAL DOTS
  }else{
    fill("#000080");
    for(var x = 22; x < 800; x = x + 40){
      for(var y = 45; y < 220; y = y + 40){
        if (x==142 || x==277 || x==412 || x==547 || x==682) // SPACE BETWEEN LETTERS
          x = x + 15;
        ellipse(x, y, 25, 25);
      }
    }
  }
}
