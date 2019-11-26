// Prey
//
// A class that represents a simple prey that moves
// on screen based on a noise() function. It can move around
// the screen and be consumed by Predator objects.

//JAZZ
class Jazz {

  // constructor
  //
  // Sets the initial values for the Predator's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, speed, text, radius) {
    this.alive = true;
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
    // Time properties for noise() function
    this.tx = random(0, 500); // To make x and y noise different
    this.ty = random(0, 500); // we use random starting values
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
    this.vx = this.speed;
    this.x += this.vx;
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
         this.kill();
    } else if (this.x > width) {
         this.kill();
    }
    // Off the top or bottom
    if (this.y < 0) {
         this.kill();
    } else if (this.y > height) {
         this.kill();
    }
  }

  // display
  //
  // Prey is an image  on the canvas
  // with a radius the same size as its current health.
  display() {


    //radius kinda disapears woo
    //starts bigger and gets smaller
    //so that the radius is not big once it restarts
    if (this.radius > 0) {
      text("jazz", this.x, this.y);


    }

}

kill(){
    this.alive = false;
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
    this.alive = true;
    this.vx = 0;
    this.vy = 0;
   this.speed = 0;
  }
}
