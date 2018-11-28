let snowflakes = [];
var backgroundColor;
var ace, bdfm, g, jz, l, nqr, s, onetwothree, fourfivesix, seven;
var currentcolor = 255;
var currentsize = 0;
var a = 67.5;

function setup() {
  createCanvas(320, 568);
  backgroundColor = color(255, 255, 255);
  ace = color(0, 57, 166, a);
  bdfm = color(255, 99, 25, a);
  g = color(108, 190, 69, a);
  jz = color(153, 102, 51, a);
  l = color(167, 169, 172, a);
  nqr = color(252, 204, 10, a);
  s = color(128, 129, 131, 127);
  onetwothree = color(283, 53, 46, a);
  fourfivesix = color(0, 147, 60, a);
  seven = color(185, 51, 173, a);

  aceButton = createButton('ace');
  bdfmButton = createButton('bdfm');
  gButton = createButton('g');
  jzButton = createButton('jz');
  lButton = createButton('l');
  nqrButton = createButton('nqr');
  sButton = createButton('s');
  onetwothreeButton = createButton('123');
  fourfivesixButton = createButton('456');
  sevenButton = createButton('7');
  subtractButton = createButton('-$2.75');
  addButton = createButton('+$2.75');
  

  col = color(50);
  aceButton.style('background-color: rgb(0, 57, 166); color: white; font-size: 16px; padding: 5px 5px;');
  aceButton.position(30, 30);
  aceButton.mousePressed(aceAdd);
  bdfmButton.style('background-color: rgb(255, 99, 25); color: white; font-size: 16px; padding: 5px 5px;');
  bdfmButton.position(90, 30);
  bdfmButton.mousePressed(bdfmAdd);
  gButton.style('background-color: rgb(108, 190, 69); color: white; font-size: 16px; padding: 5px 5px;');
  gButton.position(160, 30);
  gButton.mousePressed(gAdd);
  jzButton.style('background-color: rgb(153, 102, 51); color: white; font-size: 16px; padding: 5px 5px;');
  jzButton.position(200, 30);
  jzButton.mousePressed(jzAdd);
  lButton.style('background-color: rgb(167, 169, 172); color: white; font-size: 16px; padding: 5px 5px;');
  lButton.position(250, 30);
  lButton.mousePressed(lAdd);
  nqrButton.style('background-color: rgb(252, 204, 10); color: white; font-size: 16px; padding: 5px 5px;');
  nqrButton.position(30, 536);
  nqrButton.mousePressed(nqrAdd);
  sButton.style('background-color: rgb(128, 129, 131); color: white; font-size: 16px; padding: 5px 5px;');
  sButton.position(90, 536);
  sButton.mousePressed(sAdd);
  onetwothreeButton.style('background-color: rgb(283, 53, 46); color: white; font-size: 16px; padding: 5px 5px;');
  onetwothreeButton.position(130, 536);
  onetwothreeButton.mousePressed(onetwothreeAdd);
  fourfivesixButton.style('background-color: rgb(0, 147, 60); color: white; font-size: 16px; padding: 5px 5px;');
  fourfivesixButton.position(190, 536);
  fourfivesixButton.mousePressed(fourAdd);
  sevenButton.style('background-color: rgb(185, 51, 173); color: white; font-size: 16px; padding: 5px 5px;');
  sevenButton.position(250, 536);
  sevenButton.mousePressed(sevenAdd);
  addButton.position (200,284);
	addButton.mousePressed(Add);
  addButton.style('background-color: rgb(255,255,255); color: black; font-size: 16px; padding: 10px 10px;');
  subtractButton.position (50,284);
 	subtractButton.mousePressed(Subtract);
  subtractButton.style('background-color: rgb(255,255,255); color: black; font-size: 16px; padding: 10px 10px;');
}

function Add(){
 currentsize += 5;
}

function Subtract(){
  currentsize -= 5;
}

function aceAdd() {
  currentcolor = ace;
}

function bdfmAdd() {
  currentcolor = bdfm;
}

function gAdd() {
  currentcolor = g;
}


function jzAdd() {
  currentcolor = jz;
}


function lAdd() {
  currentcolor = l;
}


function nqrAdd() {
  currentcolor = nqr;
}


function sAdd() {
  currentcolor = s;
}


function onetwothreeAdd() {
  currentcolor = onetwothree;
}

function fourAdd() {
  currentcolor = fourfivesix;
}

function sevenAdd() {
  currentcolor = seven;
}


function draw() {

  background(backgroundColor);
  // get distance between mouse and circle
  var aceDistance = dist(mouseX, mouseY, 30, 30);
  var bdfmDistance = dist(mouseX, mouseY, 120, 30);
  var gDistance = dist(mouseX, mouseY, 210, 30);
  var jzDistance = dist(mouseX, mouseY, 300, 30);
  var lDistance = dist(mouseX, mouseY, 390, 30);
  var nqrDistance = dist(mouseX, mouseY, 30, 390);
  var sDistance = dist(mouseX, mouseY, 120, 390);
  var onetwothreeDistance = dist(mouseX, mouseY, 210, 390);
  var fourfivesixDistance = dist(mouseX, mouseY, 300, 390);
  var sevenDistance = dist(mouseX, mouseY, 390, 390);

  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (var i = 0; i < random(1); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }

  // snowflake class
  function snowflake() {
    // initialize coordinates
    this.posX = 0;
    this.posY = random(-50, 0);
    this.initialangle = random(0, 2 * PI);
    this.size = currentsize;
    this.color = currentcolor;
    this.direction = 1
    this.stroke = noStroke();

    // radius of snowflake spiral
    // chosen so the snowflakes are uniformly spread out in area
    this.radius = sqrt(random(pow(width / 2, 2)));

    this.update = function(time) {
      // x position follows a circle
      let w = 0.6; // angular speed
      let angle = w * time + this.initialangle;
      this.posX = width / 2 + this.radius * sin(angle);

      // different size snowflakes fall at slightly different y speeds
      this.posY += pow(this.size, 0.1) * this.direction;

      // bounce and delete snowflake if past top of screen
      if (this.posY > height) {
        this.direction = -1
      }

      if (this.posY < 0 && this.direction == -1) {
        let index = snowflakes.indexOf(this);
        snowflakes.splice(index, 1);

      }
    };

    this.display = function() {
      fill(this.color);
      ellipse(this.posX, this.posY, this.size);
    };
  }
}