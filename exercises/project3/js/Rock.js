// Third music genre
//
// A class that represents a genre that moves
// on screen based on a noise() function. It can move around
// the screen and be consumed by Predator objects.

//rock
class Rock {

  // constructor
  //
  // Sets the initial values for the Predator's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, speed, text, radius) {
    // Position
  
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;

    // Time properties for noise() function
    //this.tx = random(0, 1000); // To make x and y noise different
   //this.ty = random(0, 1000); // we use random starting values
    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    // Display properties
    this.text = text;
    this.radius = this.health;
  }

  // move
  //
  // Sets velocity based on the noise() function and the Prey's speed
  // Moves based on the resulting velocity and handles wrapping
  move() {
   this.x += this.vx;
   this.y += this.vy;
    // Handle wrapping
    this.handleWrapping();
  }

  // handleWrapping
  //
  // Checks if the prey has gone off the canvas and
  // wraps it to the other side if so
  handleWrapping() {
    // Off the left or right
    if (this.x < 0) {
      this.x += width;
    } else if (this.x > width) {
      this.x -= width;
    }
    // Off the top or bottom
    if (this.y < 0) {
      this.y += height;
    } else if (this.y > height) {
      this.y -= height;
    }
  }

  // display
  //
  //Rock is a text  on the canvas
  // with a radius the same size as its current health.
  display() {
    push();
    this.radius = this.health;
    //so that the radius doesn't show that it's huge once it resets

      text("rock", this.x, this.y);

    pop();
  }

  // reset
  //
  // Set the position to a random location and reset health
  // and radius back to default
  reset() {
    // Random position
    this.x = random(0, 500);
    this.y = random(0, 400);
    // Default health
    this.health = this.maxHealth;
    // Default radius
    this.radius = this.health;


  }
}
