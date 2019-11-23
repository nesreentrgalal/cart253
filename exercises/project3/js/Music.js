// Predator
//
// A class that represents a simple predator
// controlled by the arrow keys. It can move around
// the screen and consume Prey objects to maintain its health.

class Music {

  // constructor
  //
  // Sets the initial values for the Predator's properties
  // Either sets default values or uses the arguments provided
  //added the keys for several players to play
  constructor(x, y, speed,radius, upKey, downKey, leftKey, rightKey, name, score, sprintKey) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;
    //add a property that keeps track of how many Prey it has eaten in the console
    //this.preyEaten = 0;
    // Health properties
    this.maxHealth = radius;
    this.health = this.maxHealth; // Must be AFTER defining this.maxHealth
    this.healthLossPerMove = 0;
    this.healthGainPerEat = 20;
    // Display properties
    this.image = image;
    this.radius = this.health; // Radius is defined in terms of health
    // Input properties
    this.upKey = upKey;
    this.downKey = downKey;
    this.leftKey = leftKey;
    this.rightKey = rightKey;
    this.sprintKey = sprintKey;


    // to give an individual name and score for every predator
    this.name = name;
    this.score = 0;
    this.jazzEaten = 0;
    this.popEaten = 0;
    this.rockEaten = 0;




  }


  // handleInput
  //Added Sprinting with SHIFT
  // Checks if an arrow key is pressed and sets the predator's
  // velocity appropriately.
  handleInput() {
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      this.vx = -this.speed;
    } else if (keyIsDown(this.rightKey)) {
      this.vx = this.speed;
    } else {
      this.vx = 0;
    }


    // Vertical movement
    if (keyIsDown(this.upKey)) {
      this.vy = -this.speed;
    } else if (keyIsDown(this.downKey)) {
      this.vy = this.speed;
    } else {
      this.vy = 0;
    }
    //sprinting value
    if (keyIsDown(this.sprintKey)) {
      this.vx = 10;
      this.vy = 10;
    }
  }

  // move
  //
  // Updates the position according to velocity
  // Lowers health (as a cost of living)
  // Handles wrapping
  move() {
    // if the radius of the predator is bigger than O , you can move if not you can't move anymore
    if (this.radius > 0) {
      this.x += this.vx;
      this.y += this.vy;
    }
    // Update health
    this.health = this.health - this.healthLossPerMove;
    this.health = constrain(this.health, 0, this.maxHealth);
    // Handle wrapping
    this.handleWrapping();
  }

  // handleWrapping
  //
  // Checks if the predator has gone off the canvas and
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

  // handleEating
  //
  // Takes a Prey object as an argument and checks if the predator
  // overlaps it. If so, reduces the prey's health and increases
  // the predator's. If the prey dies, it gets reset.
  handleEating(prey) {
    // Calculate distance from this predator to the prey

    if(prey instanceof Decoy){
      return;
    }

    let d = dist(this.x, this.y, prey.x, prey.y);
    // Check if the distance is less than their two radius (an overlap)
    if (d < this.radius + prey.radius) {
      // Increase predator health and constrain it to its possible range
      this.health += this.healthGainPerEat;
      this.health = constrain(this.health, 0, this.maxHealth);

      // Decrease prey health by the same amount
      prey.health -= this.healthGainPerEat;
      // Check if the prey died and reset it if so
      //added +1 for the keeps track of how many Prey the predator has eaten

    //  if (prey.health < 0) {
      //  this.preyEaten += 1;

      if (jazz.health < 0) {
        this.score += 1;
        this.jazzEaten +=1
      jazz.vx = 6;
      jazz.speed = 8;
      jazz.vx =jazz.speed;
        jazz.x+= jazz.vx;

          //jazzMusic.stop();
          jazzMusic.play();
        //console message
        console.log(this.jazzEaten, "getting all that fat");
         jazz.reset();

      }

      if (pop1.health < 0) {
        this.score += 1;
        this.popEaten +=1;
          //popMusic.stop();
          popMusic.play();
        //console message
        console.log(this.popEaten, "getting all that fat");
        pop1.reset();

      }

      if (rock.health < 0) {
        this.score += 1;
        this.rockEaten +=1
        //rockMusic.stop();
        rockMusic.play();
        //console message
        console.log(this.rockEaten, "getting all that fat");
        rock.reset();

      }

  }
}





  // display
  //
  // Draw the predator as an browser image  on the canvas
  // with a radius the same size as its current health.
  display() {
    push();
    this.radius = this.health;
    if (this.radius > 0) {
      push();
      textFont(font);
      textAlign(LEFT, TOP);
      textSize(20);
      fill(255, 255, 0);
      text(this.name + this.score, this.x, this.y);
      pop();
      pop();

    }


  }
  reset() {
    // Random position
    this.x = random(0, width);
    this.y = random(0, height);
    // Default health
    this.health = this.maxHealth;
    // Default radius
    this.radius = this.health;

    this.score = 0;
    //this.preyEaten = 0;
    this.jazzEaten = 0;

  }
}
