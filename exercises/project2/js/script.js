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
// preload to put images
// edited and modified images on photoshop
//playing property to add in the title function for the player to know when to play and when to not to
let playing = false;
// title screen
let startImage;
// add font
let font;

let button;

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


}

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
//added key codes
function setup() {
  createCanvas(640, 480);
  google = new Predator(50, 50, 5, googleImage, 40, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, "Google:", 0, 16);
  fire = new Predator(100, 100, 5, fireImage, 100, 87, 83, 65, 68, "Fire:", 0, 13);
  safari = new Predator(60, 60, 6, safariImage, 50, 85, 74, 72, 75, "Safari:", 0, 18);
  explorer = new Prey(100, 100, 10, explorerImage, 80);
  explorer1 = new Prey(100, 100, 8, explorer1Image, 90);
  explorer2 = new Prey(200, 200, 20, explorer2Image, 50);
  explorer3 = new Prey1(100, 100, 10, explorer3Image, 80);
  explorer4 = new Prey1(100, 100, 10, explorer4Image, 80);
  explorer5 = new Prey1(100, 100, 10, explorer5Image, 80);
  explorer6 = new Prey2(100, 100, 10, explorer6Image, 80);
  explorer7 = new Prey2(100, 100, 10, explorer7Image, 80);
  explorer8 = new Prey2(100, 100, 10, explorer8Image, 80);


}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {

  if (playing === false){
 // Added function for title screen
   titleScreen();
 }

// If the game is being played,
// then the preys and predators will be active
 else {
  // added nature landscape image
  background (backgroundImage,0,0);

  // Handle input for the tiger
  google.handleInput();
  fire.handleInput();
  safari.handleInput();
  // Move all the "animals"
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

  // Display all the "animals"
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

}
}

  function titleScreen() {

   background (startImage,0,0);
// Text
  push();
  textFont(font);
  fill(255);
  textAlign(CENTER,TOP);
  textSize (30);
  text("click to play",320,30);
  push();
  button = createButton("Simple Button");
  button.position(10, 300);
  button.mousePressed(clickFunction);
  pop();
}
function mousePressed(){
  if (playing === false){
    playing = true;
  }
}

function clickFunction(){
	background(random(255));
}
