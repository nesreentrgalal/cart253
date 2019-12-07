//Music through type by Nesreen Galal

// Hidden Objects game, a spin on Agatha Chrisite's game, but using text rather than images
// really wanted to play with the idea of kinetic typography, and wanted to something different. The idea
// you can do something fun with the use of text, using text for art is underatted.
// Music genre which is the player has to find the other music genres jazz, pop and rock in time which is hidden because of the decoys
// Avoid stuck, because basically you get stuck for 5 seconds.

//game over
let gameOver = false;
// Our predator aka music
let music; // controls up,down, right and left arrow keys, space bar key is shift
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
// add fonts
let font;
let timerFont;

let backgroundSound;
//add button for instructions
let button;
// add button for play
let button1;
let instructionImage;
//amount of decoys
let numDecoys = 120;

//array of decoy
let decoySuprise = [];
let decoyText1 = [];
//
let winImage;

//decoys
let decoyText;
// number of stuck on the canvas
let numStuck = 14;

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
  backgroundImage = loadImage("assets/images/background.jpg"); // collage created on photoshop by nesreen
  startImage = loadImage("assets/images/startgame.png"); // https://i.pinimg.com/564x/a1/11/f6/a111f6d4afa5802e870ca8f5a282bdb3.jpg collage created by me on photoshop
  font = loadFont("assets/font/source-sans.ttf"); // https://www.1001fonts.com/source-sans-pro-font.html
  backgroundSound = loadSound('assets/sounds/click2.mp3'); // https://www.youtube.com/watch?v=nZFFjn9nOwU
  endImage = loadImage("assets/images/gameover.png"); // background https://i.pinimg.com/564x/52/90/eb/5290eb1d5f1571922daddb47bf35a617.jpg but collage created by me
  instructionImage = loadImage("assets/images/instruction.png"); //https://vinylespassion.tumblr.com/post/35529609816
  winImage = loadImage("assets/images/win.png"); // https://i.pinimg.com/564x/de/33/07/de3307d33dc6c4360fa98ea3c460e73f.jpg
  timerFont = loadFont("assets/font/summer85.ttf"); //https://www.behance.net/gallery/75434351/SUMMER-85-Free-Font
  rockMusic = loadSound("assets/sounds/rock.mp3"); // https://www.youtube.com/watch?v=mBHr5XmzO4E
  popMusic = loadSound("assets/sounds/pop.mp3"); // https://www.youtube.com/watch?v=-uD7vczqPaY&t=37s
  jazzMusic = loadSound("assets/sounds/jazz.mp3"); // https://www.youtube.com/watch?v=-WrfPS_jS8g
  gameoverMusic = loadSound("assets/sounds/gameover.mp3"); //https://www.youtube.com/watch?v=n6F2z1XSkGc

}

// setup
// Sets up a canvas
// Creates objects for the player and three genres, and arrays for stuck and decoy
//added key codes
function setup() {

  createCanvas(640, 480);
  music = new Music(50, 50, 5, 25, UP_ARROW, DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, "music:", 0, 32);
  pop1 = new Pop(random(50, 500), random(50, 400), 10, "pop", 16);
  jazz = new Jazz(random(50, 500), random(50, 400), 10, "jazz", 16);
  rock = new Rock(random(50, 500), random(50, 400), 10, "rock", 16);


  //an array for decoy
  for (let i = 0; i < numDecoys; i++) {
    // Position the decoy
    let newdecoyText1 = new Decoy1(200, 200, decoyText);
    newdecoyText1.reset();
    decoyText1.push(newdecoyText1);
  }

  //an array for stuck
  for (let i = 0; i < numStuck; i++) {
    let newstuckText1 = new Stuck(200, 200, 10, stuckText, 80);
    newstuckText1.reset();
    stuckText1.push(newstuckText1);

  }
  // to first show the title screen first
  titleScreen();


}

function setupSound() { // add timer sound to induce stress >:)
  backgroundSound.stop();
  backgroundSound.loop();

}

// Handles input, movement, eating, buttons, calling functions and displaying for the the game as well as showing the different screens
function draw() {

  if (playing === false) {

  }

  // If the game is being played,
  // then the music and genres will be activated
  else {
    // added 80s image collage image
    background(backgroundImage, 0, 0);

    // Handle input for music
    music.handleInput();

    // Move all the "genres"
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

    //
    music.updateTimer();

    //array for decoy
    for (let i = 0; i < decoyText1.length; i++) {
      // ... and update and display it
      push();
      decoyText1[i].display();
      music.handleEating(decoyText1[i]);

      pop();

    }

    //array for stuck
    for (let i = 0; i < stuckText1.length; i++) {
      // ... and update and display it
      push();
      //show stuck and call the function of stuckoverlap
      stuckText1[i].display();
      music.stuckOverlap(stuckText1[i]);

      pop();

    }

    timeCount();
    gameOverScreen();
    //remove both buttons when playing
    button.remove();
    button1.remove();
  }

}
//Game over screen function.
function gameOverScreen() {
  //if the player either wins or loses, stop music  and playing is false, and game over is true while titlescreen is false to not overlap with the other screens
  if (timeRemaining <= 0 || music.jazzEaten === 1 && music.popEaten == 1 && music.rockEaten === 1) {
    playing = false;
    titleScreen = false;
    gameOver = true;

    //stop music
    backgroundSound.stop();
    jazzMusic.stop();
    popMusic.stop();
    rockMusic.stop();


    // text and gameover image  if music couldn't find the genres in time aka if the player loses
    if (timeRemaining <= 0) {
      push();
      image(endImage, 0, 0, 640, 480);
      let gameOverText1 = "you couldn't find the music genres in time...music is lost";
      textSize(24);
      text(gameOverText1, 320, 280);
      textSize(20);
      textAlign(CENTER);
     //reset text
      textFont(font);
      fill(255);
      textAlign(CENTER);
      textSize(30);
      text("Reset?", 320, 308);
    }
    pop();
    // if the player found the genres, show congrats text, win music and win image
    if (music.jazzEaten === 1 && music.popEaten == 1 && music.rockEaten === 1) {
      //game over text
      image(winImage, 0, 0, 640, 480);
      let gameOverText = " Congrats! music found it's genres\n";
      text(gameOverText, 320, 280);
      textAlign(CENTER);
      //text for reset
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
//playing is true since game starts again
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
// timer and music to reset too
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
