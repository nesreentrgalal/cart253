// Predator-Prey Simulation
// by Pippin Barr
//
// Creates a predator and three prey (of different sizes and speeds)
// The predator chases the prey using the arrow keys and consumes them.
// The predator loses health over time, so must keep eating to survive.

// Our predator
let tiger;
let lion;
let rabbit;

// The three prey
let antelope;
let zebra;
let bee;


// setup()
//
// Sets up a canvas
// Creates objects for the predator and three prey
//added key codes
function setup() {
  createCanvas(windowWidth, windowHeight);
  tiger = new Predator(100, 100, 5, color(200, 200, 0), 40, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW,"Tiger:",0);
  lion = new Predator(150,100,5, color(255,0,255), 100,87,83,65,68,"Lion:",0);
  rabbit= new Predator(120,130,6,color(255,200,150),60,85,74,75,73,"Rabbit:",0);
  antelope = new Prey(100, 100, 10, color(255, 100, 10), 50);
  zebra = new Prey(100, 100, 8, color(255, 255, 255), 60);
  bee = new Prey(100, 100, 20, color(255, 255, 0), 10);
}

// draw()
//
// Handles input, movement, eating, and displaying for the system's objects
function draw() {
  // Clear the background to black
  background(0);

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
