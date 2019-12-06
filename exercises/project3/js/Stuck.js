//Class stuck
// will be taking its properties from decoy,
//just the display will be different and when it overlaps with music genre
//Stuck text is basically a decoy BUT if the player overlaps with stuck it won't  be able to move for 5 seconds, losing time to win the game!!
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
