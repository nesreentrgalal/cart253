//Class stuck
// will be taking its properties from decoy,
//just the display will be different and when it overlaps with music genre

class Stuck extends Decoy {
  constructor() {
    super();

  }



  // display
  display() {
    push();
    //display stuck as text
    imageMode(CENTER);
    text("stuck", this.x, this.y);
    pop();
  }



  // reset
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
