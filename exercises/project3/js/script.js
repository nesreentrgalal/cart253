// Predator-Prey Simulation
// by Pippin Barr
//Modified by Nesreen Galal

// Hidden Objects game, a spin on Agatha Chrisite's game

//game over
let gameOver = false;
// Our predator
let music; // controls up,down, right and left arrow keys, sprint key is shift
// our music genres
let pop1;
let jazz;
let rock;


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



// TIME COUNTER
let timeRemaining = 30;

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
let numDecoys = 10;

let decoySuprise = [];
let decoyFire = [];
//array for blue explorer


//decoys
let decoyText;

// load images and sound
function preload() {
  backgroundImage = loadImage("assets/images/background.jpg"); // https://pixabay.com/vectors/landscape-countryside-fields-nature-409551/
  startImage = loadImage("assets/images/startgame.png"); // collage created by me on photoshop
  font = loadFont("assets/font/source-sans.ttf"); // https://www.1001fonts.com/source-sans-pro-font.html
  backgroundMusic = loadSound('assets/sounds/Expanse.mp3'); // https://www.youtube.com/watch?v=oKH0_NI-4jU by Forhill
  endImage = loadImage("assets/images/gameover.png"); // background https://i.pinimg.com/564x/6e/9f/79/6e9f794cfbc61c12ad329b5abd8111dd.jpg but collage created by me
  instructionImage = loadImage("assets/images/instruction.png"); //https://bellykids.bigcartel.com/product/motel-by-yoko-honda




}

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
//added key codes
function setup() {
  //decided to make the predators small, since my canvas is small

  createCanvas(640, 480);
  music = new Music(50, 50, 5, 25, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, "music:", 0, 16);
  pop1 = new Pop(random(0,640), random(0,480), 10, "pop",16);
  jazz = new Jazz(random(0,640), random(0,480), 10, "jazz", 16);
  rock = new Rock(random(0,640), random(0,480), 10, "rock", 16);




  //an array for decoy

  for (let i = 0; i < numDecoys; i++) {
    // Position the blue explorer
    let newdecoyFire = new Decoy(100, 100, 10, decoyText, 80);
     newdecoyFire.reset();
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
    // Handle input for music
    music.handleInput();
    // Move all the "browsers"
    music.move();
    pop1.move();
    jazz.move();
    rock.move();


    // Handle the predators eating any of the prey
    music.handleEating(pop1);
    music.handleEating(jazz);
    music.handleEating(rock);



    // Display all the "browswers"
    music.display();
    pop1.display();
    jazz.display();
    rock.display();



    for (let i = 0; i < decoyFire.length; i++) {
      // ... and update and display it
   push();
      decoyFire[i].display();
     music.handleEating(decoyFire[i]);

      pop();

    }



    gameOverScreen();
    //remove buttons when playing
    button.remove();
    button1.remove();




  }
}




function gameOverScreen() {
  //if all predator radius are zero, game over screen shows up
  if (timeRemaining <= 0 || music.preyEaten === 3) {
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

   push();
    if (timeRemaining <= 0 ) {
      let gameOverText1 = "you couldn't find the music genres in time...music is lost";
      text(gameOverText1, 320, 280);
      textSize(20);
      textAlign(CENTER);
        }
        pop();

  if ( music.preyEaten === 3){
    //game over text
    let gameOverText = " Congrats! music found it's genres\n";
    text(gameOverText, 320, 280);
    textAlign(CENTER);

   }
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
  //
  timeRemaining = 30;

  music.reset();
  pop1.reset();
  rock.reset();
  jazz.reset();

  for (let i = 0; i < numDecoys; i++) {

     decoyFire[i].reset();
  }

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
    //reset();

  }
}
// when in the game over page, and mouse is pressed, the game starts again
function mousePressed() {
  if (gameOver === true) {
    reset();
  }
}
