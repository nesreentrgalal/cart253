// Predator-Prey Simulation
// by Pippin Barr
//Modified by Nesreen Galal

// Hidden Objects game, a spin on Agatha Chrisite's game

//game over
let gameOver = false;
// Our predator
let music; // controls up,down, right and left arrow keys, sprint key is shift
// not sure yet if I will keep these predators or not which is why I kept them.
let fire; // up is W, down is S, right is D and left is A, sprint key is enter
let safari; //up is U and down is J, right is K and left is H, sprint key is ALT

// The three prey
let explorer;
let explorer1;
let explorer2;

// images of predators


let fireImage;
let safariImage;

//images of preys

let explorerImage;
let explorer1Image;
let explorer2Image;

// // purple and green internet explorer
let explorerGreenImage;

// pink and yellow internet explorer images
let explorerPinkImage;



//background

let backgroundImage;

// pink and yellow internet explorer
let explorer3;
let explorer4;
let explorer5;

// purple and green internet explorer
let explorer6;
let explorer7;

// TIME COUNTER
let timeRemaining = 60;

// preload to put images
// edited and modified images on photoshop
//playing property to add in the title function for the player to know when to play and when to not to
let playing = false;
// title screen
let startImage;
//game over Screen
let endImage;
// add font
let font;
let backgroundMusic;
//add button for instructions
let button;
// add button for play
let button1;
let instructionImage;
//
let bug;
let bug1;
let bug2;
let bugImage;
//
let numDecoys = 100;

let decoySuprise = [];
let decoyFire = [];
//array for blue explorer


//decoys
let decoyText;

// load images and sound
function preload() {
  explorerImage = loadImage("assets/images/internetexplorer.png"); // https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Internet_Explorer_9_icon.svg/1200px-Internet_Explorer_9_icon.svg.png
  backgroundImage = loadImage("assets/images/background.jpg"); // https://pixabay.com/vectors/landscape-countryside-fields-nature-409551/
  explorerGreenImage = loadImage("assets/images/internetexplorergreen.png"); // edited on photoshop
  explorerPinkImage = loadImage("assets/images/internetexplorerpink.png"); //edited on photoshop
  startImage = loadImage("assets/images/startgame.png"); // collage created by me on photoshop
  font = loadFont("assets/font/source-sans.ttf"); // https://www.1001fonts.com/source-sans-pro-font.html
  backgroundMusic = loadSound('assets/sounds/Expanse.mp3'); // https://www.youtube.com/watch?v=oKH0_NI-4jU by Forhill
  endImage = loadImage("assets/images/gameover.png"); // background https://i.pinimg.com/564x/6e/9f/79/6e9f794cfbc61c12ad329b5abd8111dd.jpg but collage created by me
  instructionImage = loadImage("assets/images/instruction.png"); //https://bellykids.bigcartel.com/product/motel-by-yoko-honda

  //decoy is all firefox for now, will modify
  //decoyImage1 = loadImage("assets/images/firefox.png");



}

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
//added key codes
function setup() {
  //decided to make the predators small, since my canvas is small

  createCanvas(640, 480);
  music = new Predator(50, 50, 5, 25, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, "music:", 0, 16);
  //fire = new Predator(100, 100, 5, fireImage, 30, 87, 83, 65, 68, "Fire:", 0, 13);
  //safari = new Predator(60, 60, 6, safariImage, 20, 85, 74, 72, 75, "Safari:", 0, 18);
  explorer = new Pop(100, 100, 10, "pop", 80);
  //explorer1 = new Prey(100, 100, 8, explorerImage, 90);
  //explorer2 = new Prey(200, 200, 20, explorerImage, 50);
  explorer3 = new Preypink(100, 100, 10, explorerPinkImage, 100);
  explorer4 = new Preypink(100, 100, 10, explorerPinkImage, 200);
  explorer5 = new Preypink(100, 100, 10, explorerPinkImage, 100);
  explorer6 = new Preygreen(100, 100, 10, explorerGreenImage, 80);
  explorer7 = new Preygreen(100, 100, 10, explorerGreenImage, 80);
  explorer8 = new Preygreen(100, 100, 10, explorerGreenImage, 80);



  //decoy

  for (let i = 0; i < numDecoys; i++) {
    // Position the blue explorer
    let newdecoyFire = new Decoy(100, 100, 10, decoyText, 80);

    // Add the new browser to the  array
    decoyFire.push(newdecoyFire);
  }

  // to first show the title screen first
  titleScreen();


}

function setupSound() { // add 80s music
  backgroundMusic.stop();
  backgroundMusic.loop();

}


// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {

  if (playing === false) {
    // Added function for title screen

    // titleScreen();
  }

  // If the game is being played,
  // then the preys and predators will be active
  else {
    // added 80s image collage image
    background(backgroundImage, 0, 0); // done by me on photoshop
     timeCount();
    // Handle input for the tiger
    music.handleInput();
    //  fire.handleInput();
    //  safari.handleInput();
    // Move all the "browsers"
    music.move();
    explorer.move();
  //  explorer1.move();
  //  explorer2.move();
    explorer3.move();
    explorer4.move();
    explorer5.move();
    explorer6.move();
    explorer7.move();
    explorer8.move();
    //fire.move();
    //  safari.move();

    // Handle the predators eating any of the prey
    music.handleEating(explorer);
    //music.handleEating(explorer1);
    //music.handleEating(explorer2);
    music.handleEating(explorer3);
    music.handleEating(explorer4);
    music.handleEating(explorer5);
    music.handleEating(explorer6);
    music.handleEating(explorer7);
    music.handleEating(explorer8);



    //  fire.handleEating(explorer);
    //  fire.handleEating(explorer1);
    //  fire.handleEating(explorer2);
    //  fire.handleEating(explorer3);
    //  fire.handleEating(explorer4);
    //fire.handleEating(explorer5);
    //  fire.handleEating(explorer6);
    //fire.handleEating(explorer7);
    //  fire.handleEating(explorer8);


    //safari.handleEating(explorer);
    //safari.handleEating(explorer1);
    //safari.handleEating(explorer2);
    //  safari.handleEating(explorer3);
    //  safari.handleEating(explorer4);
    //  safari.handleEating(explorer5);
    //  safari.handleEating(explorer6);
    //  safari.handleEating(explorer7);
    //  safari.handleEating(explorer8);


    // Display all the "browswers"
    music.display();
    explorer.display();
  //  explorer1.display();
    //explorer2.display();
    explorer3.display();
    explorer4.display();
    explorer5.display();
    explorer6.display();
    explorer7.display();
    explorer8.display();
    //  fire.display();
    //  safari.display();






    gameOverScreen();
    //remove buttons when playing
    button.remove();
    button1.remove();


    for (let i = 0; i < decoyFire.length; i++) {
      // ... and update and display it
   push();
      decoyFire[i].display();
      music.handleEating(decoyFire[i]);
      //  fire.handleEating(decoyFire[i]);
      //  safari.handleEating(decoyFire[i]);
      pop();

    }

  }
}

function gameOverScreen() {
  //if all predator radius are zero, game over screen shows up
  if (music.radius === 0 && timeRemaining <= 0) {
    playing = false;
    titleScreen = false;
    gameOver = true;
    image(endImage, 0, 0, 640, 480);
    //stop music
    backgroundMusic.stop();
    // text for reset
    push();
    textFont(font);
    fill(255);
    textAlign(CENTER);
    textSize(30);
    text("Reset?", 320, 308);
    pop();


    //game over text
    let gameOverText = music.name + music.score + " internet explorers\n";
    //gameOverText = gameOverText + "Fire " + fire.score + " internet explorers\n";
    //gameOverText = gameOverText + " Safari " + safari.score + " internet explorers\n";
    text(gameOverText, 320, 50);
    textAlign(CENTER);

  }

}

// title screen image and button and when is mouse clicked it redirects to instruction image
function titleScreen() {

  background(startImage, 0, 0);
  push();
  //button
  button = createButton("Instructions");
  button.position(280, 450);
  button.mouseClicked(clickFunction);
  pop();



}


function timeCount() {
  timeRemaining -= 1 / 60;
  push();
  textFont('Futura');
  textSize(25);
  fill(30,144,255);
  text("timer: " + floor(timeRemaining), 75, 20);
  pop();
  push();
  fill(211, 211, 211, 127);
  ellipse(25, 25, 300, 50);
  pop();
}


// when reset is activated the preys and predators and music are reactivated
function reset() {

  playing = true;
  gameOver = false;

  music = new Predator(50, 50, 5, 25, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, "music:", 0, 16);
  //  fire = new Predator(100, 100, 5, fireImage, 30, 87, 83, 65, 68, "Fire:", 0, 13);
  //  safari = new Predator(60, 60, 6, safariImage, 20, 85, 74, 72, 75, "Safari:", 0, 18);
  explorer = new Pop(100, 100, 10, "pop", 80);
  //explorer1 = new Prey(100, 100, 8, explorerImage, 90);
  //explorer2 = new Prey(200, 200, 20, explorerImage, 50);
  explorer3 = new Preypink(100, 100, 10, explorerPinkImage, 400);
  explorer4 = new Preypink(100, 100, 10, explorerPinkImage, 400);
  explorer5 = new Preypink(100, 100, 10, explorerPinkImage, 400);
  explorer6 = new Preygreen(100, 100, 10, explorerGreenImage, 80);
  explorer7 = new Preygreen(100, 100, 10, explorerGreenImage, 80);
  explorer8 = new Preygreen(100, 100, 10, explorerGreenImage, 80);

  setupSound();
}

// instruction page with a play button to start playing

function clickFunction() {
  playing = false;
  background(instructionImage);
  backgroundMusic.stop();
  //
  textFont(font);
  fill(255);
  textAlign(CENTER, TOP);
  textSize(30);
  text("click the button to play!", 320, 380);
  //button for play
  push();
  button1 = createButton("play");
  button1.position(310, 440);
  button1.mouseClicked(playPressed);
  //to remove button of instructions
  button.remove();
  pop();
}

// once the play button is pressed, playing starts as well as the musicccc
function playPressed() {
  if (!playing) {
    playing = true;
    setupSound();
    reset();

  }
}
// when in the game over page, and mouse is pressed, the game starts again
function mousePressed() {
  if (gameOver === true) {
    reset();
  }
}
