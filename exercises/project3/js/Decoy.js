// Decoy
//A class that represents the decoy array
// will be adding more function for this class
class Decoy {

  // constructor
  //
  // Sets the initial values for the Predator's properties
  // Either sets default values or uses the arguments provided
  constructor(x, y, text) {
    // Position
    this.x = x;
    this.y = y;
    // Display properties
    this.text = text;

  }

  // Checks if decoy has gone off the canvas and
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

  // display will be added in decoy1 thanks to inheritance
  display() {


  }
  //for stuck
  handleEating() {

  }


  // reset
  // Set the position to a random location
  reset() {
    // Random position
    this.x = random(0, width);
    this.y = random(0, height);


  }
}
