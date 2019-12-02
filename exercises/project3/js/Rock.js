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
    //displayed text at first
    this.alive = true;
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
  // Genre goes off the canvas once it dies
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
  //Rock is a text  on the canvas
  // with a radius the same size as its current health.
  display() {
    push();
    this.radius = this.health;

     //text
      text("rock", this.x, this.y);

    pop();
  }
//It's not alive anymore, which means it won't be displayed on the screen anymore.
  kill(){
      this.alive = false;
  }

  // reset
  //
  // Set the position to a random location and reset health
  // and radius back to default
  reset() {
    // Random position
    this.x = random(50, 500);
    this.y = random(50, 400);
    // Default health
    this.health = this.maxHealth;
    // Default radius
    this.radius = this.health;
    this.alive = true;
    rock.vx = 0;
    rock.vy = 0;

  }
}
