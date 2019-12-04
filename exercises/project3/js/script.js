// Predator-Prey Simulation
// by Pippin Barr
  //Modified by Nesreen Galal

// Hidden Objects game, a spin on Agatha Chrisite's game, but using text rather than images
// really wanted to play with the idea of kinetic typography, and wanted to something different the idea
// you can do something fun with the use of text, using text for art is underatted.

//game over
let gameOver = false;
// Our predator
let music; // controls up,down, right and left arrow keys, sprint key is shift
// our music genres
let pop1;
let jazz;
let rock;

//background

let backgroundImage;

// TIME COUNTER
let timeRemaining = 20;


//playing property to add in the title function for the player to know when to play and when to not to
let playing = false;
// title screen
let startImage;
//game over Screen
let endImage;
// add font
let font;
let timerFont;

let backgroundSound;
//add button for instructions
let button;
// add button for play
let button1;
let instructionImage;
//amount of decoys
let numDecoys = 100;

//array of decoy
let decoySuprise = [];
let decoyText1 = [];
//
let winImage;

//decoys
let decoyText;
// stuck
let numStuck = 5;

//array for stuck
let decoyStuck = [];
let stuckText1 = [];

//stuck text
let stuckText;
// music for preys
let jazzMusic;
let popMusic;
let rockMusic;
//
let gameoverMusic;

// load images,fonts and sound
function preload() {
  backgroundImage = loadImage("assets/images/background.jpg"); // https://pixabay.com/vectors/landscape-countryside-fields-nature-409551/
  startImage = loadImage("assets/images/startgame.png"); // collage created by me on photoshop
  font = loadFont("assets/font/source-sans.ttf"); // https://www.1001fonts.com/source-sans-pro-font.html
  backgroundSound = loadSound('assets/sounds/click2.mp3'); // https://www.youtube.com/watch?v=nZFFjn9nOwU
  endImage = loadImage("assets/images/gameover.png"); // background https://i.pinimg.com/564x/6e/9f/79/6e9f794cfbc61c12ad329b5abd8111dd.jpg but collage created by me
  instructionImage = loadImage("assets/images/instruction.png"); //https://bellykids.bigcartel.com/product/motel-by-yoko-honda
  winImage = loadImage("assets/images/win.png");
  timerFont = loadFont("assets/font/summer85.ttf"); //
  rockMusic = loadSound("assets/sounds/rock.mp3"); // https://www.youtube.com/watch?v=mBHr5XmzO4E
  popMusic = loadSound("assets/sounds/pop.mp3"); // https://www.youtube.com/watch?v=-uD7vczqPaY&t=37s
  jazzMusic = loadSound("assets/sounds/jazz.mp3"); // https://www.youtube.com/watch?v=-WrfPS_jS8g
  gameoverMusic = loadSound("assets/sounds/gameover.mp3");

}

// setup()
//
// Sets up a canvas
// Creates objects for the player and three genres, and arrays for stuck and decoy
//added key codes
function setup() {
  //decided to make the predators small, since my canvas is small

  createCanvas(640, 480);
  music = new Music(50, 50, 5, 25, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, "music:", 0, 32);
  pop1 = new Pop(random(50, 500), random(50, 400), 10, "pop", 16);
  jazz = new Jazz(random(50, 500), random(50, 400), 10, "jazz", 16);
  rock = new Rock(random(50, 500), random(50, 400), 10, "rock", 16);




  //an array for decoy
  for (let i = 0; i < numDecoys; i++) {
    // Position the blue explorer
    let newdecoyText1 = new Decoy1(200, 200, 10, decoyText, 80);

    newdecoyText1.reset();
    // Add the new browser to the  array
    decoyText1.push(newdecoyText1);
  }

  //an array for decoy
  for (let i = 0; i < numStuck; i++) {
    // Position the blue explorer
    let newstuckText1 = new Stuck(200, 200, 10, stuckText, 80);

    newstuckText1.reset();
    // Add the new browser to the  array
    stuckText1.push(newstuckText1);
  }
  // to first show the title screen first
  titleScreen();


}

function setupSound() { // add timer sound to induce stress >:)
  backgroundSound.stop();
  backgroundSound.loop();

}


// draw()

// Handles input, movement, eating, and displaying for the the game as well as showing the different screens
function draw() {

  if (playing === false) {

  }

  // If the game is being played,
  // then the music and genres will be activated
  else {
    // added 80s image collage image
    background(backgroundImage, 0, 0); // done by me on photoshop

    // Handle input for music
    music.handleInput();

    // Move all the "browsers"
    music.move();
    pop1.move();
    jazz.move();
    rock.move();


    // Handle the predators eating any of the prey
    music.handleEating(pop1);
    music.handleEating(jazz);
    music.handleEating(rock);



    // Display all the "browswers"
    music.display();
    pop1.display();
    jazz.display();
    rock.display();


    //array
    for (let i = 0; i < decoyText1.length; i++) {
      // ... and update and display it
      push();
      decoyText1[i].display();
      music.handleEating(decoyText1[i]);

      pop();

    }

    //array
    for (let i = 0; i < stuckText1.length; i++) {
      // ... and update and display it
      push();
      stuckText1[i].display();
      music.handleEating(stuckText1[i]);

      pop();

    }

    timeCount();
    gameOverScreen();
    //remove buttons when playing
    button.remove();
    button1.remove();
  }

}
//Game over screen function.
function gameOverScreen() {
  //if the player either wins or loses, show background image, stop music and show reset text
  if (timeRemaining <= 0 || music.jazzEaten === 1 && music.popEaten == 1 && music.rockEaten === 1) {
    playing = false;
    titleScreen = false;
    gameOver = true;

    //stop music
    backgroundSound.stop();
    jazzMusic.stop();
    popMusic.stop();
    rockMusic.stop();


  // text if music couldn't find the genres in time aka if the player loses
    if (timeRemaining <= 0) {
      push();
      image(endImage, 0, 0, 640, 480);
      let gameOverText1 = "you couldn't find the music genres in time...music is lost";
      textSize(24);
      text(gameOverText1, 320, 280);
      textSize(20);
      textAlign(CENTER);

      textFont(font);
      fill(255);
      textAlign(CENTER);
      textSize(30);
      text("Reset?", 320, 308);
    }
    pop();
    // if the player found the genres, show congrats text and win image
    if (music.jazzEaten === 1 && music.popEaten == 1 && music.rockEaten === 1) {
      //game over text
      image(winImage, 0, 0, 640, 480);
      let gameOverText = " Congrats! music found it's genres\n";
      text(gameOverText, 320, 280);
      textAlign(CENTER);

      textFont(font);
      fill(255);
      textAlign(CENTER);
      textSize(30);
      text("Reset?", 320, 308);
      gameoverMusic.play(); //only plays when player wins

    }
  }

}

// title screen image and button and when is mouse clicked it redirects to instruction image
function titleScreen() {

  background(startImage, 0, 0);
  push();
  //button to click on instructions
  button = createButton("Instructions");
  button.position(280, 450);
  button.mouseClicked(clickFunction);
  pop();

}
// timer count
function timeCount() {
  timeRemaining -= 1 / 60;
  push();
  textFont(timerFont);
  textSize(25);
  fill(30, 144, 255);
  text("timer: " + floor(timeRemaining), 75, 20);
  pop();
  push();
  fill(211, 211, 211, 127);
  ellipse(25, 25, 300, 50);
  pop();
}


// when reset is activated music, genres, time remaining and array are reactivated
function reset() {

  playing = true;
  gameOver = false;
  timeRemaining = 20;

  music.reset();
  pop1.reset();
  rock.reset();
  jazz.reset();
  gameoverMusic.stop();

  //array for decoy to reset
  for (let i = 0; i < numDecoys; i++) {

    decoyText1[i].reset();
  }

  setupSound();
}

// instruction page with a play button to start playing

function clickFunction() {
  playing = false;
  background(instructionImage);
  backgroundSound.stop();
  //text for button
  textFont(font);
  fill(255);
  textAlign(CENTER, TOP);
  textSize(30);
  text("click the button to play!", 320, 400);
  //button for play
  push();
  button1 = createButton("play");
  button1.position(310, 440);
  button1.mouseClicked(playPressed);
  //to remove button of instructions
  button.remove();
  pop();
}

// once the play button is pressed, playing starts as well as the musicccc
function playPressed() {
  if (!playing) {
    playing = true;
    setupSound();
    //reset();

  }
}
// when in the game over page, and mouse is pressed, the game starts again
function mousePressed() {
  if (gameOver === true) {
    reset();
  }
}
