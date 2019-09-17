// Exercise 1 - Movement
// Pippin Barr
//
// Starter code for exercise 1.
// Draws a moving square and circle that intersect
// in the middle of the canvas.

// The current position and size of the circle
let circleX;
let circleY;
let circleSize = 100;

// The current position and size of the square
let squareX;
let squareY;
let squareSize = 100;

let rectX = 0;
let rectY = 300;
let rectSize = 50;

let ovalX = 300;
let ovalY = 0;
let ovalSize = 60;

// preload()
//
// loaded cowboy image
  let cowboy;
function preload() {
cowboy = loadImage("assets/images/cowboy.jpg");
  }



// setup()
//
// Set up the canvas, position the images, set the image mode.

function setup() {
  // Create our canvas
  createCanvas(640,640);
  //added cowboy image used the console log to check the width and height
   image(cowboy, 0, 0, 150, 150);
  // Start the circle off screen to the bottom left
  // We divide the size by two because we're drawing from the center
  circleX = -circleSize/2;
  circleY = height + circleSize/2;

  // Start the square off screen to the bottom right
  // We divide the size by two because we're drawing from the center
  squareX = width + squareSize/2;
  squareY = height + squareSize/2;




  // We'll draw rectangles from the center

  // We won't have a stroke in this
  noStroke();
}


// draw()
//
// Change the circle and square's positions so they move
// Draw the circle and square on screen

function draw() {
  // We don't fill the background so we get a drawing effect

//thanks to your notes I was able to do this for it to be at the  current mouse location.
 rect(mouseX,mouseY,10,10);
  // Move circle up and to the right
  circleX += 1;
  circleY -= 1;
  // Make the circle transparent red
  fill(255,0,0,10);
  // Display the circle
  ellipse(circleX,circleY,circleSize,circleSize);


  // Move square up and to the left
  squareX -= 1;
  squareY -= 1;
  // Make the square transparent blue
  fill(0,0,255,3);
  // Display the square
  rect(squareX,squareY,squareSize,squareSize);
  //circle

  circleX += 1;
  circleY -= 1;


  fill(0,0,255,5);

  //rectangle
  fill (0,255,0);
  rectX = rectX +1;
  rect(rectX,rectY,rectSize,rectSize);

  fill (0,0,150,100);
  ovalY = ovalY +1;
  ellipse(ovalX,ovalY,ovalSize,ovalSize);






}
