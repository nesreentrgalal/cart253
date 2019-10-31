// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.
//game over
let gameOver = false;
// Our predator
let google; // controls up,down, right and left arrow keys, sprint key is shift
let fire; // up is W, down is S, right is D and left is A, sprint key is enter
let safari; //up is U and down is J, right is K and left is H, sprint key is ALT

// The three prey
let explorer;
let explorer1;
let explorer2;

// images of predators

let googleImage;
let fireImage;
let safariImage;

//images of preys

let explorerImage;
let explorer1Image;
let explorer2Image;

// // purple and green internet explorer
let explorer3Image;
let explorer4Image;
let explorer5Image;

// pink and yellow internet explorer images
let explorer6Image;
let explorer7Image;
let explorer8Image;


//background

let backgroundImage;

// purple and green internet explorer
let explorer3;
let explorer4;
let explorer5;

// pink and yellow internet explorer
let explorer6;
let explorer7;
let explorer8;

//
let explorer8Array = [];
let explorer8Number = 100;
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
let button;
let button1;
let instructionImage;

function preload() {
  googleImage = loadImage("assets/images/googlechrome.png"); //https://pixabay.com/vectors/tiger-predator-cat-big-cat-felidae-1394584/
  fireImage = loadImage("assets/images/firefox.png"); // https://cdn.pixabay.com/photo/2019/06/02/18/27/lion-4247082_960_720.png
  safariImage = loadImage("assets/images/safari.png"); // https://all-free-download.com/free-vector/vector-clip-art/rabbit_silhouette_56315.html
  explorerImage = loadImage("assets/images/internetexplorer.png"); // https://media.istockphoto.com/vectors/vector-jump-antelope-silhouette-view-side-for-retro-symbols-emblems-vector-id862426884?k=6&m=862426884&s=612x612&w=0&h=Sl1oobI_etsCUTE-lXQsESsTS_z-vkf1ERvC3hTayH4=
  explorer1Image = loadImage("assets/images/internetexplorer.png"); // https://www.carstickers.com/products/stickers/animal-stickers/zebra-car-stickers-decals/details/zebra-silhouette-running-sticker-9142/
  explorer2Image = loadImage("assets/images/internetexplorer.png"); // https://www.shutterstock.com/search/bee+silhouette
  backgroundImage = loadImage("assets/images/background.jpg"); // https://pixabay.com/vectors/landscape-countryside-fields-nature-409551/
  explorer3Image = loadImage("assets/images/internetexplorergreen.png");
  explorer4Image = loadImage("assets/images/internetexplorergreen.png");
  explorer5Image = loadImage("assets/images/internetexplorergreen.png");
  explorer6Image = loadImage("assets/images/internetexplorerpink.png");
  explorer7Image = loadImage("assets/images/internetexplorerpink.png");
  explorer8Image = loadImage("assets/images/internetexplorerpink.png");
  startImage = loadImage("assets/images/startgame.png");
  font = loadFont("assets/font/source-sans.ttf");
  backgroundMusic = loadSound('assets/sounds/Expanse.mp3');
  endImage = loadImage("assets/images/gameover.png");
  instructionImage = loadImage("assets/images/instructions.png");



}

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
//added key codes
function setup() {
  //decided to make the predators small, since my canvas is small
  createCanvas(640, 480);
  google = new Predator(50, 50, 5, googleImage, 25, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, "Google:", 0, 16);
  fire = new Predator(100, 100, 5, fireImage, 30, 87, 83, 65, 68, "Fire:", 0, 13);
  safari = new Predator(60, 60, 6, safariImage, 20, 85, 74, 72, 75, "Safari:", 0, 18);
  explorer = new Prey(100, 100, 10, explorerImage, 80);
  explorer1 = new Prey(100, 100, 8, explorer1Image, 90);
  explorer2 = new Prey(200, 200, 20, explorer2Image, 50);
  explorer3 = new Prey1(100, 100, 10, explorer3Image, 200);
  explorer4 = new Prey1(100, 100, 10, explorer4Image, 200);
  explorer5 = new Prey1(100, 100, 10, explorer5Image, 200);
  explorer6 = new Prey2(100, 100, 10, explorer6Image, 80);
  explorer7 = new Prey2(100, 100, 10, explorer7Image, 80);
  explorer8 = new Prey2(100, 100, 10, explorer8Image, 80);

  titleScreen();

}

function setupSound() { // add 80s music
  backgroundMusic.stop();
  backgroundMusic.loop();

}

function reset() {
  gameOver = true;
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
    background(backgroundImage, 0, 0);

    // Handle input for the tiger
    google.handleInput();
    fire.handleInput();
    safari.handleInput();
    // Move all the "browsers"
    google.move();
    explorer.move();
    explorer1.move();
    explorer2.move();
    explorer3.move();
    explorer4.move();
    explorer5.move();
    explorer6.move();
    explorer7.move();
    explorer8.move();
    fire.move();
    safari.move();

    // Handle the predators eating any of the prey
    google.handleEating(explorer);
    google.handleEating(explorer1);
    google.handleEating(explorer2);
    google.handleEating(explorer3);
    google.handleEating(explorer4);
    google.handleEating(explorer5);
    google.handleEating(explorer6);
    google.handleEating(explorer7);
    google.handleEating(explorer8);

    fire.handleEating(explorer);
    fire.handleEating(explorer1);
    fire.handleEating(explorer2);
    fire.handleEating(explorer3);
    fire.handleEating(explorer4);
    fire.handleEating(explorer5);
    fire.handleEating(explorer6);
    fire.handleEating(explorer7);
    fire.handleEating(explorer8);

    safari.handleEating(explorer);
    safari.handleEating(explorer1);
    safari.handleEating(explorer2);
    safari.handleEating(explorer3);
    safari.handleEating(explorer4);
    safari.handleEating(explorer5);
    safari.handleEating(explorer6);
    safari.handleEating(explorer7);
    safari.handleEating(explorer8);

    // Display all the "browswers"
    google.display();
    explorer.display();
    explorer1.display();
    explorer2.display();
    explorer3.display();
    explorer4.display();
    explorer5.display();
    explorer6.display();
    explorer7.display();
    explorer8.display();
    fire.display();
    safari.display();

    gameOverScreen();

    button.remove();
    button1.remove();
  }
}


function gameOverScreen() {
  //if all predator radius are zero, game over screen shows up
  if (google.radius === 0 && fire.radius === 0 && safari.radius === 0) {
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
    text("reset?", 320, 308);
    pop();
    //game over text
    let gameOverText = " Google " + google.score + " prey\n";
    gameOverText = gameOverText + "Fire " + fire.score + " prey\n";
    gameOverText = gameOverText + " Safari " + safari.score + " prey\n";
    text(gameOverText, 320, 50);
    textAlign(CENTER);
  }

}

function titleScreen() {

  background(startImage, 0, 0);
  push();
  //button
  button = createButton("Instructions");
  button.position(280, 450);
  button.mouseClicked(clickFunction);
  pop();



}



function reset() {

    // background(backgroundImage, 0, 0);
    playing = true;
    gameOver = false;

    google = new Predator(50, 50, 5, googleImage, 25, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, "Google:", 0, 16);
    fire = new Predator(100, 100, 5, fireImage, 30, 87, 83, 65, 68, "Fire:", 0, 13);
    safari = new Predator(60, 60, 6, safariImage, 20, 85, 74, 72, 75, "Safari:", 0, 18);
    explorer = new Prey(100, 100, 10, explorerImage, 80);
    explorer1 = new Prey(100, 100, 8, explorer1Image, 90);
    explorer2 = new Prey(200, 200, 20, explorer2Image, 50);
    explorer3 = new Prey1(100, 100, 10, explorer3Image, 80);
    explorer4 = new Prey1(100, 100, 10, explorer4Image, 80);
    explorer5 = new Prey1(100, 100, 10, explorer5Image, 80);
    explorer6 = new Prey2(100, 100, 10, explorer6Image, 80);
    explorer7 = new Prey2(100, 100, 10, explorer7Image, 80);
    explorer8 = new Prey2(100, 100, 10, explorer8Image, 80);

  setupSound();
}



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
  //
  push();
  button1 = createButton("play");
  button1.position(310, 440);
  button1.mouseClicked(playPressed);
  //
  button.remove();
  pop();
}

function playPressed() {
  if (!playing) {
    playing = true;
    setupSound();
    reset();

  }
}

function mousePressed(){
 if (gameOver === true ){
   reset();
}
}
