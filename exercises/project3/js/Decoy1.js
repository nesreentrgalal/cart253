// Prey
//
// A class that represents a simple prey that moves
// on screen based on a noise() function. It can move around
// the screen and be consumed by Predator objects.

// will be adding more function for this class
class Decoy1 extends Decoy {
  constructor() {
    super();
  }



  // display
  //
  // decoy is a text on the canvas
  // with a radius the same size as its current health.
  display() {
    push();
    // bug is in the center
    //radius kinda disapears woo
    imageMode(CENTER);
    text("decoy", this.x, this.y);
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


  }
}
