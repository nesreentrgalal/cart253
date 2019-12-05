// Second music Genre, Pop
//
// A class that represents a genre that moves
// on the screen after it is killed which is basically consumed by the music genre
//music genre goes off the canvas after the movement happens hence it won't be "alive" anymore

class Pop {

  // constructor
  //
  // Sets the initial values for the Predator's properties
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
    // Time properties for noise() function
    this.tx = random(0, 1000); // To make x and y noise different
    this.ty = random(0, 1000); // we use random starting values
    //
    this.maxHealth = radius;
    this.health = this.maxHealth;
    // Display properties
    this.text = text;
    this.radius = this.health;
  }

  // move
  // Sets velocity, noise for pop
  // Moves based on the resulting velocity and handles wrapping
  move() {

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

  //display
  //Pop is a text  on the canvas
  display() {

    if (this.radius > 0) {

      text("pop", this.x, this.y);
    }
  }

  //It's not alive anymore, after it overlaps with music. which means it won't be displayed on the screen anymore.
  kill() {
    this.alive = false;
  }

  // reset
  // Set the position to a random location, speed and reset health, it is alive not killed yet
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
    this.vx = 0;
    this.vy = 0;
    this.speed = 0;

  }
}
