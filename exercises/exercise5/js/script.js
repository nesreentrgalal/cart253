// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let tiger; // controls up,down, right and left arrow keys, sprint key is shift
let lion; // up is W, down is S, right is D and left is A, sprint key is enter
let rabbit; //up is U and down is J, right is K and left is H, sprint key is ALT

// The three prey
let antelope;
let zebra;
let bee;

// images of predators

let tigerImage;
let lionImage;
let rabbitImage;

//images of preys

let antelopeImage;
let zebraImage;
let beeImage;

//background

let backgroundImage;

// preload to put images
// edited and modified images on photoshop

function preload() {
  tigerImage = loadImage("assets/images/tiger.png"); //https://pixabay.com/vectors/tiger-predator-cat-big-cat-felidae-1394584/
  lionImage = loadImage("assets/images/lion.png"); // https://cdn.pixabay.com/photo/2019/06/02/18/27/lion-4247082_960_720.png
  rabbitImage = loadImage("assets/images/rabbit.png"); // https://all-free-download.com/free-vector/vector-clip-art/rabbit_silhouette_56315.html
  antelopeImage = loadImage("assets/images/antelope.png"); // https://media.istockphoto.com/vectors/vector-jump-antelope-silhouette-view-side-for-retro-symbols-emblems-vector-id862426884?k=6&m=862426884&s=612x612&w=0&h=Sl1oobI_etsCUTE-lXQsESsTS_z-vkf1ERvC3hTayH4=
  zebraImage = loadImage("assets/images/zebra.png"); // https://www.carstickers.com/products/stickers/animal-stickers/zebra-car-stickers-decals/details/zebra-silhouette-running-sticker-9142/
  beeImage = loadImage("assets/images/bee.png"); // https://www.shutterstock.com/search/bee+silhouette
  backgroundImage = loadImage("assets/images/landscape.png"); // https://pixabay.com/vectors/landscape-countryside-fields-nature-409551/

}

// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
//added key codes
function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(50, 50, 5, tigerImage, 40, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, "Tiger:", 0, 16);
  lion = new Predator(100, 100, 5, lionImage, 100, 87, 83, 65, 68, "Lion:", 0, 13);
  rabbit = new Predator(60, 60, 6, rabbitImage, 50, 85, 74, 72, 75, "Rabbit:", 0, 18);
  antelope = new Prey(100, 100, 10, antelopeImage, 80);
  zebra = new Prey(100, 100, 8, zebraImage, 90);
  bee = new Prey(200, 200, 20, beeImage, 50);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // added nature landscape image
  image(backgroundImage, 0, 0, windowWidth, windowHeight);

  // Handle input for the tiger
  tiger.handleInput();
  lion.handleInput();
  rabbit.handleInput();
  // Move all the "animals"
  tiger.move();
  antelope.move();
  zebra.move();
  bee.move();
  lion.move();
  rabbit.move();

  // Handle the predators eating any of the prey
  tiger.handleEating(antelope);
  tiger.handleEating(zebra);
  tiger.handleEating(bee);

  lion.handleEating(antelope);
  lion.handleEating(zebra);
  lion.handleEating(bee);

  rabbit.handleEating(antelope);
  rabbit.handleEating(zebra);
  rabbit.handleEating(bee);


  // Display all the "animals"
  tiger.display();
  antelope.display();
  zebra.display();
  bee.display();
  lion.display();
  rabbit.display();
}
