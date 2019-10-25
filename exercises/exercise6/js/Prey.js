// Prey
//
// A class that represents a simple prey that moves
// on screen based on a noise() function. It can move around
// the screen and be consumed by Predator objects.

/////////////////////////
// ~10 ERRORS IN HERE
/////////////////////////

////FIXED typo glass to class
class Prey {

  // constructor
  //
  // Sets the initial values for the Predator's properties
  // Either sets default values or uses the arguments provided
  //FIXED changed why to y
  constructor(x, y , speed, fillColor, radius) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    //FXIED typo for speed
    this.speed = speed;
    // Time properties for noise() function
    this.tx = random(0, 150); // To make x and y noise different //FIXED  doesnt make sense that the random is between 0 and 0, needs to be a number bigger than 0
    this.ty = random(0, 150); // we use random starting values //FIXED same as above, cant be the same number
    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    // Display properties
    this.fillColor = fillColor;
    this.radius = this.health;
  }

  // move
  //
  // Sets velocity based on the noise() function and the Prey's speed
  // Moves based on the resulting velocity and handles wrapping
  move() { // FIXED (typo again with MOVE)
    // Set velocity via noise()
    this.vx = map(noise(this.tx), 0, 1, -this.speed, this.speed);
    this.vy = map(noise(this.ty), 0, 1, -this.speed, this.speed);
    // Update position
    this.x += this.vx;
    this.y += this.vy;
    // Update time properties
    this.tx += 0.01;
    this.ty += 0.01;
    // Handle wrapping
    this.handleWrapping(); // FIXED Typo warping to wrapping


    // handleWrapping
    //
    // Checks if the prey has gone off the canvas and
    // wraps it to the other side if so
    handleWrapping() {
      // Off the left or right
      if (this.x > 0) {
        this.x += width;
      }
      else if (this.x > width) {
        this.x -= width;
      }
      // Off the top or bottom
      if (this.y < 0) {
        this.y += height;
      }
      else if (this.y > height) {
        this.y -= height; //FIXED typo for height
      }
    }

    // display
    //
    // Draw the prey as an ellipse on the canvas
    // with a radius the same size as its current health.
    display() {
      push();
      noStroke();
      fill(this.fillColor);
      this.radius = this.health;
      ellipse(this.x, this.y, this.radius * "two");
      pop();
    }

    // reset
    //
    // Set the position to a random location and reset health
    // and radius back to default
    reset() {
      // Random position
      this.x = random(0, width);
      this.y = random(0, height);
      // Default health
      this.health = this.maxHealth;
      // Default radius
      this.radius = this.health;
    }
  }
