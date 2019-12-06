// Player
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
  constructor(x, y, speed, radius, upKey, downKey, leftKey, rightKey, name, score, sprintKey) {
    // Position
    this.x = x;
    this.y = y;
    // Velocity and speed
    this.vx = 0;
    this.vy = 0;
    this.speed = speed;

    //add a property that keeps track of how many Prey it has eaten in the console
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


    // to give a name, tint for text, and score for each genre
    this.name = name;
    this.score = 0;
    this.jazzEaten = 0;
    this.popEaten = 0;
    this.rockEaten = 0;
    this.musicIsPlaying = true;
    this.textAlpha = 255;

    this.startTimer = 0;
    this.timePassed =0;
    this.collidedWith =false;







  }

  // handleInput
  //Added Sprinting with SHIFT
  // Checks if an arrow key is pressed and sets the predator's
  // velocity appropriately.
  handleInput() {
    this.musicIsPlaying = true;
    // Horizontal movement
    if (keyIsDown(this.leftKey)) {
      if(this.speed!==0){
        this.collidedWith =false;
      this.vx = -this.speed;
    }
    }

    else if (keyIsDown(this.rightKey)) {
      if(this.speed!==0){
      this.collidedWith =false;
      this.vx = this.speed;
    }
    }
     else {
      this.vx = 0;
    }

  // Vertical movement
    if (keyIsDown(this.upKey)) {
        if(this.speed!==0){
      this.collidedWith =false;
      this.vy = -this.speed;
    }
    } else if (keyIsDown(this.downKey)) {
        if(this.speed!==0){
      this.collidedWith =false;
      this.vy = this.speed;
    }
    }
    else {
      this.vy = 0;
    }
    //sprinting value
    if (keyIsDown(this.sprintKey)) {
      this.vx *= 3;
      this.vy *= 3;
    }

  }
  // move
  //
  // Updates the position according to velocity
  // Handles wrapping
  move() {
    // if the radius of the predator is bigger than O , you can move if not you can't move anymore
    this.musicIsPlaying = true;
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
  // Checks if the music has gone off the canvas and
  // wraps it to the other side if so
  handleWrapping() {
    this.musicIsPlaying = true;
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

  // if music overlaps with the other genres, it gets a point
  handleEating(prey) {
    // Calculate distance from this predator to the prey
    //this if statement to specify that decoy is not eaten unlike the other genres
    this.musicIsPlaying = true;
    if (prey instanceof Decoy) {
      return;
    }
    //check the distanc
    let d = dist(this.x, this.y, prey.x, prey.y);
    // Check if the distance is less than their two radius (an overlap)
    if (d < this.radius + prey.radius) {
      // Increase predator health and constrain it to its possible range
      this.health += this.healthGainPerEat;
      this.health = constrain(this.health, 0, this.maxHealth);

      // Decrease prey health by the same amount
      prey.health -= this.healthGainPerEat;


      // for each genre, if they overlap, animation effect, score gets added, and music from that genre starts playing
      if (jazz.health < 0 && jazz.health > -99) {
        this.score += 1;
        jazz.health = -99;
        this.jazzEaten += 1
        jazz.vx = 6;
        jazz.speed = 8;
        jazzMusic.play();
        // added these so the sound don't overlap
        rockMusic.stop();
        popMusic.stop();
        rect(640, 480);
        fill(random(255), random(255), random(255), 255);
        //console message
        console.log(this.jazzEaten, "all that jazz");
        //to go off the canvas
        jazz.kill();

      }
      // for each genre, if they overlap, animation effect, score gets added, and music from that genre starts playing
      // pop1.heath >-99 because we don't want the score to go under 0
      if (pop1.health < 0 && pop1.health > -99) {
        this.score += 1;
        pop1.health = -99;
        this.popEaten += 1;
        pop1.vy = 7;
        pop1.speed = -8;
        pop1.vy = pop1.speed;
        pop1.y += pop1.vy;
        popMusic.play();
      // added these so the sound don't overlap
        rockMusic.stop();
        jazzMusic.stop();
        rect(640, 480);
        fill(random(255), random(255), random(255), 255);
        //console message
        console.log(this.popEaten, "pop is the way to go");
        //to go off the canvas
        pop1.kill();
      }
      // for each genre, if they overlap, animation effect, score gets added, and music from that genre starts playing

      if (rock.health < 0 && rock.health > -99) {
        this.score += 1;
        rock.health = -99;
        this.rockEaten += 1;
        rock.vx = 10;
        rock.vy = 5;
        rockMusic.play();
      // added these so the sound don't overlap
        popMusic.stop();
        jazzMusic.stop();
        rect(640, 480);
        fill(random(255), random(255), random(255), 255);
        //console message
        console.log(this.rockEaten, "rock n rolll baby!!");
        //to go off the canvas
        rock.kill();
      }
    }
  }

//check if its overlapping with stuck 
  stuckOverlap(stuck) {

    let d = dist(this.x, this.y, stuck.x, stuck.y);
    // Check if the distance is less than their two radius (an overlap)
    if (d < (this.radius/2) && this.collidedWith ===false) {
      this.notMoving();
    }
  }

  //
  notMoving() {
    console.log("not moving");
    this.collidedWith =true;
    this.startTimer =millis();
    this.timePassed = 0;
    this.musicIsPlaying = false;
   this.vx = 0;
   this.vy = 0;
  this.speed = 0;

  }

  updateTimer(){
    if(this.collidedWith===true){
      this.timePassed = millis()-this.startTimer;
      console.log(this.timePassed);

      if(this.timePassed >5000){

        this.speed = 5;
        this.x =0;
        this.y =50;
       this.collidedWith =false;
      }
    }
  }



  // display
  // Music genre is a text
  // with a radius the same size as its current health.
  display() {
    push();
    this.radius = this.health;
    if (this.radius > 0) {
      push();
      textFont(font);
      textAlign(LEFT, TOP);
      textSize(20);
      fill(255, 255, 0, this.textAlpha);
      text(this.name + this.score, this.x, this.y);
    }
    // when the timer hits 4 seconds, music player is slowly fades... time is almost up :(
    if (timeRemaining <= 4) {
      this.textAlpha = this.textAlpha - 1;
    }
    pop();
    pop();
  }


  // when resetting the game, everything goes back to the way it was before the game started
  reset() {
    // Random position
    this.x = random(50, 500);
    this.y = random(50, 400);
    // Default health
    this.health = this.maxHealth;
    // Default radius
    this.radius = this.health;
    //get the scores back to zero
    this.score = 0;
    this.jazzEaten = 0;
    this.popEaten = 0;
    this.rockEaten = 0;
    this.musicIsPlaying = true;
    this.textAlpha = 255;

  }
}
