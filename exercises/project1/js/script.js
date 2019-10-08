"use strict";

/******************************************************

Game - Chaser
Pippin Barr

A "simple" game of cat and mouse. The player is a circle and can move with keys,
if they overlap the (randomly moving) prey they "eat it" by sucking out its life
and adding it to their own. The player "dies" slowly over time so they have to keep
eating to stay alive.

Modified by Nesreen
the purpose of this game is the computer has to detect the malware, which is why the text in the computer says detecting malware
to kill the virus ...in the computer,
the more it moves and speeds, the more it loses health aka battery life .
The malware gets scared when they realize the computer is killing them, since they are getting
destroyed, they get smaller but harder to catch because they are scared so they speed up and
the smaller it gets the harder the computer can reach it, since it becomes almost invisible in a sense.

Includes: Physics-based movement, keyboard controls, health/stamina,
random movement, screen wrap.

******************************************************/

// Track whether the game is over
let gameOver = false;

// Player position, size, velocity
let playerX;
let playerY;
let computerImage;
let playerRadius = 120;
let playerVX = 0;
let playerVY = 0;
let playerMaxSpeed = 3;
// Player health
let playerHealth;
let playerMaxHealth = 255;
// Player fill color
let playerFill = 50;

// Prey position, size, velocity
let preyX;
let preyY;
let preyRadius = 25;
let preyVX;
let preyVY;
let preyMaxSpeed = 4;
// Prey health
let preyHealth;
let preyMaxHealth = 100;
// Prey fill color
let preyFill = 200;

// Amount of health obtained per frame of "eating" (overlapping) the prey
let eatHealth = 10;
// Number of prey eaten during the game (the "score")
let preyEaten = 0;
//noise
let tx = 0;
let ty = 10;
//images and sound
let backgroundImage;
let backgroundSound;
let malwareImage;
//cd soon to be button
let cdImage;
let cdImageX = 10;
let cdImageY = 180;
let cdImageWidth = 50;
let cdImageHeight = 50;



function preload() {
  backgroundImage = loadImage("assets/images/background.jpg"); //https://www.pinterest.ca/pin/417286721702485883/?lp=true
  computerImage = loadImage("assets/images/computer2.png"); // https://www.mockupworld.co/free/set-of-retro-computer-devices-mockups/ then I edited in on photoshop
  backgroundSound = loadSound("assets/sounds/vaporwave.wav"); //https://www.youtube.com/watch?v=aQkPcPqTq4M
  cdImage = loadImage("assets/images/music.png"); // https://apk.tools/details-vaporwave-music-player-windows-95-music-player-apk/

}
// setup()
//
// Sets up the basic elements of the game
function setup() {
  createCanvas(600, 600);

  noStroke();

  // We're using simple functions to separate code out
  setupPrey();
  setupPlayer();
}


// setupPrey()
//
// Initialises malware's position, velocity, and health
function setupPrey() {
  preyX = width / 5;
  preyY = height / 2;
  preyVX = -preyMaxSpeed;
  preyVY = preyMaxSpeed;
  preyHealth = preyMaxHealth;
}

// setupPlayer()
//
// Initialises player position and health
function setupPlayer() {
  playerX = 4 * width / 5;
  playerY = height / 2;
  playerHealth = playerMaxHealth;
}

function setupSound() { // add vaporwave music
  backgroundSound.loop();
}

// draw()
//
// While the game is active, checks input
// updates positions of prey and player,
// checks health (dying), checks eating (overlaps)
// displays the two agents.
// When the game is over, shows the game over screen.
function draw() {

  background(backgroundImage);

  // when clicking on image music starts!
  image(cdImage, cdImageX, cdImageY, cdImageWidth, cdImageHeight);

  //they get smaller and faster cause the prey are scared for their life! x3

  if (preyEaten === 3) {
    preyRadius = 20;
    preyMaxSpeed = 5;

  }
  if (preyEaten === 6) {
    preyRadius = 18;
    preyMaxSpeed = 7;
  }
  if (preyEaten === 9) {
    preyRadius = 16;
    preyMaxSpeed = 9;
  }
  if (preyEaten === 10) {
    preyRadius = 13;
    preyMaxSpeed = 11;

  }
  if (preyEaten === 12) {
    preyRadius = 10;
    preyMaxSpeed = 13;

  }
  if (preyEaten === 15) {
    preyRadius = 7;
    preyMaxSpeed = 10;
  }
  if (preyEaten === 18) {
    preyRadius = 4;
    preyMaxSpeed = 7;

  }

  if (preyEaten === 21) {
    preyRadius = 1;
    preyMaxSpeed = 4;

  }
  // music text
  textAlign(LEFT, BOTTOM);
  textSize(15);
  fill(0);
  text("press the cd to hear the music!", 210, 590);

  //takes count how many times the computer kills a malware
  textAlign(RIGHT, TOP);
  textSize(20);
  fill(255);
  text(preyEaten, width, 0);


  if (!gameOver) {
    handleInput();

    movePlayer();
    movePrey();

    updateHealth();
    checkEating();

    drawPrey();
    drawPlayer();
  } else {
    showGameOver();
  }
}


// handleInput()
//
// Checks arrow keys and adjusts player velocity accordingly
function handleInput() {
  // Check for horizontal movement
  if (keyIsDown(LEFT_ARROW)) {
    playerVX = -playerMaxSpeed;

  } else if (keyIsDown(RIGHT_ARROW)) {
    playerVX = playerMaxSpeed;

  } else {
    playerVX = 0;
  }
  //speed is faster when clicking on shift key for horizontal
  if (keyIsDown(SHIFT) && keyIsDown(LEFT_ARROW)) {
    playerVX = -15;

  } else if (keyIsDown(SHIFT) && keyIsDown(RIGHT_ARROW)) {
    playerVX = 15;

  }

  // Check for vertical movement
  if (keyIsDown(UP_ARROW)) {
    playerVY = -playerMaxSpeed;

  } else if (keyIsDown(DOWN_ARROW)) {
    playerVY = playerMaxSpeed;

  } else {
    playerVY = 0;
  }
  //speed is faster when clicking on shift key for vertical
  if (keyIsDown(SHIFT) && keyIsDown(UP_ARROW)) {
    playerVY = -15;

  } else if (keyIsDown(SHIFT) && keyIsDown(DOWN_ARROW)) {
    playerVY = 15;

  }

}

// movePlayer()
//
// Updates player position based on velocity,
// wraps around the edges.
function movePlayer() {
  // Update position
  playerX = playerX + playerVX;
  playerY = playerY + playerVY;

  // Wrap when player goes off the canvas
  if (playerX < 0) {
    // Off the left side, so add the width to reset to the right
    playerX = playerX + width;
  } else if (playerX > width) {
    // Off the right side, so subtract the width to reset to the left
    playerX = playerX - width;
  }

  if (playerY < 0) {
    // Off the top, so add the height to reset to the bottom
    playerY = playerY + height;
  } else if (playerY > height) {
    // Off the bottom, so subtract the height to reset to the top
    playerY = playerY - height;
  }
}

// updateHealth()
//
// Reduce the player's health (happens every frame)
// Check if the player is dead
function updateHealth() {
  // Reduce player health
  playerHealth = playerHealth - 0.5;
  //lose health faster when sprinting
  if (keyIsDown(SHIFT)) {
    playerHealth = playerHealth - 0.8;
  }
  // Constrain the result to a sensible range
  playerHealth = constrain(playerHealth, 0, playerMaxHealth);

  // Check if the player is dead (0 health)
  if (playerHealth === 0) {
    // If so, the game is over
    gameOver = true;
  }
}

// checkEating()
//
// Check if the player overlaps the prey and updates health of both
function checkEating() {
  // Get distance of player to prey
  let d = dist(playerX, playerY, preyX, preyY);
  // Check if it's an overlap
  if (d < playerRadius + preyRadius) {
    // Increase the prey health
    playerHealth = playerHealth + eatHealth;
    // Constrain to the possible range
    playerHealth = constrain(playerHealth, 0, playerMaxHealth);
    // Reduce the prey health
    preyHealth = preyHealth - eatHealth;
    // Constrain to the possible range
    preyHealth = constrain(preyHealth, 0, preyMaxHealth);

    // Check if the prey died (health 0)
    if (preyHealth === 0) {
      // Move the "new" prey to a random position
      preyX = random(0, width);
      preyY = random(0, height);
      // Give it full health
      preyHealth = preyMaxHealth;
      // Track how many prey were eaten
      preyEaten = preyEaten + 1;
    }
  }
}



// movePrey()
//
// Moves the malware based on random velocity changes
function movePrey() {
  // Change the malware's velocity at random intervals
  // random() will be < 0.05 5% of the time, so the prey
  // will change direction on 5% of frames

  // Set velocity based on random values to get a new direction
  // and speed of movement
  //
  // Use map() to convert from the 0-1 range of the random() function
  // to the appropriate range of velocities for the prey
  preyVX = map(noise(tx), 0, 1, -preyMaxSpeed, preyMaxSpeed);
  preyVY = map(noise(ty), 0, 1, -preyMaxSpeed, preyMaxSpeed);

  tx += 0.1;
  ty += 0.1;


  // Update malware position based on velocity
  preyX = preyX + preyVX;
  preyY = preyY + preyVY;

  // Screen wrapping
  if (preyX < 0) {
    preyX = preyX + width;
  } else if (preyX > width) {
    preyX = preyX - width;
  }

  if (preyY < 0) {
    preyY = preyY + height;
  } else if (preyY > height) {
    preyY = preyY - height;
  }
}

// drawPrey()
//
// Draw the malware as an ellipse with alpha based on health
function drawPrey() {
  fill(preyFill, preyHealth);
  ellipse(preyX, preyY, preyRadius * 2);
}

// drawPlayer()
//
// Draw the player as a computer with alpha value based on health
function drawPlayer() {
  push();
  tint(255, playerHealth);
  image(computerImage, playerX, playerY, 120, 120);
  pop();
}
// if you click on the CD, the music starts!
function mousePressed() {
  let d = dist(mouseX, mouseY, cdImageX, cdImageY);
  if (d < cdImage.width / 2) {
    backgroundSound.stop();
    backgroundSound.loop();
  }
}



// showGameOver()
// Display text about the game being over!
function showGameOver() {
  //music stops
  backgroundSound.stop();
  // Set up the font
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(0);
  // Set up the text to display
  let gameOverText = "GAME OVER!\n"; // \n means "new line"
  let gameEndText = "You deleted " + preyEaten + " malware\n";
  gameEndText = gameEndText + "before you shutted down."
  // Display it at the top of the screen
  text(gameOverText, width / 2, height / 2 - 100);
  // Display it in the centre of the screen
  textSize(18);
  text(gameEndText, width / 2, height / 2);


}
