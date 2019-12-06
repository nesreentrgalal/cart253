// Third music genre, Rock
//
// A class that represents a genre that moves
// on the screen after it is killed which is basically consumed by the music genre
//music genre goes off the canvas after the movement happens hence it won't be "alive" anymore
//rock
class Rock {

  // constructor
  // Sets the initial values for the rock's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, speed, text, radius) {
    // Position
    this.alive = true;
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;
    // Health aka radius properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    // Display properties
    this.text = text;
    this.radius = this.health;
  }

  // move
  // Sets velocity for rock
  // Moves based on the resulting velocity and handles wrapping
  move() {
    this.x += this.vx;
    this.y += this.vy;
    // Handle wrapping
    this.handleWrapping();
  }

  // handleWrapping
  // Genre goes off the canvas once it dies which is this.kill function is being called.
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
  kill() {
    this.alive = false;
  }

  // reset
  // Set the position to a random location and reset health,velocity and radius back to default
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
