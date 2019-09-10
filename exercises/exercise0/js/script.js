// Exercise 0 - Spiritual Self-Portrait
// Pippin Barr
// 20 August 2018
//
// Uses p5's set of shape and colour functions to draw a head
//

// setup()
//
// Draws a beautiful face on the canvas and puts a hat on it!

function setup() {

  // Set up the canvas and decided to put blue as the background because its fav colour

  createCanvas(500,500);
  background(0,150,225);



  // Draw the head and body (or is it a chin?) in pink as well

  // No stroke for it to look more realistic
  noStroke();
  // Set the nice pink
  fill(255,238,220);

  // The ellipse mode will make it easier to align everything
  ellipseMode(CENTER);
  // Draw the head

  ellipse(250,250,200,250);
  // Draw the body
  ellipse(250,400,300,400);


  // Draw the googly eyes

  // Draw the white backgrounds of the eyes


  fill(255);
  ellipse(200,225,50,30);
  ellipse(300,225,50,30);

  // Draw the brown pupils

  fill(73,0,0);
  ellipse(200,225,20,20);
  ellipse(300,225,20,20);
  // the iris
  fill(0);
 ellipse(300,225,10,10);
ellipse(200,225,10,10);
  // Draw the nose

  // Nose colour
  fill(255,150,150);
  // Main nose part
  ellipse(250,250,30,80);
  // The two nostril areas
  ellipse(235,275,20,30);
  ellipse(265,275,20,30);

  noFill();
  stroke(255,120,120);
  //abstract vibes + symmetrical 
  triangle(300, 200, 100, 100, 100, 300);

  // Draw the mouth our of an ellipse and a dividing line

  // Lip colour

  fill(152,7,7);
  // Lips
  ellipse(260,310,20,30);
  ellipse(240,310,20,30);
  //1920s inspired lipstick (love vintage)
  ellipse(250,320,50,25);
  // Lip divider colour and size

  stroke(255,120,120);
  strokeWeight(4);

  // lines to form a pattern to make it look like i am wearing clothes
line(400,400,180,400);
line(400,600,180,400);
line(400,600,150,400);
line(400,600,120,400);

  // Lip divider

  stroke(255,120,120);
  strokeWeight(4);
line(200,200,180,120);
  //eyelashes (making them pink because i love surrealism)
line(200,200,180,120);
line(200,202,100,130);

line(300,200,300,120);
line(300,200,200,120);




  noStroke();
  //berret
  fill(255,0,0);
//hat line part
ellipse(220,100,20,50);
  // Main part of hat
ellipse(220,150,280,100);





}

// draw()
//
// Does nothing.

function draw() {
  // Nothing here for now.
}
