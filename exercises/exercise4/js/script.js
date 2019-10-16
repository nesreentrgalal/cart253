"use strict";

// Pong
// by Pippin Barr
//
// A "simple" implementation of Pong with no scoring system
// just the ability to play the game with the keyboard.
//
// Up and down keys control the right hand paddle, W and S keys control
// the left hand paddle

// Whether the game has started
let playing = false;
let title;
// Game colors (using hexadecimal)
let bgColor = 0;
let fgColor = 255;
let leftPoints = 0;
let rightPoints = 0;
let backgroundImage;
let backgroundImage1;
let playerImage;
let backgroundMusic;
// BALL
// A ball object with the properties of
// position, size, velocity, and speed
let ball = {
  x: 320,
  y: 255,
  size: 20,
  vx: 0,
  vy: 0,
  speed: 5,

}

// PADDLES

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
let leftPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vy: 0,
  speed: 5,
  upKey: 87,
  downKey: 83,
  fgColor: 255



}

// RIGHT PADDLE

// Basic definition of a left paddle object with its key properties of
// position, size, velocity, and speed
let rightPaddle = {
  x: 0,
  y: 0,
  w: 20,
  h: 70,
  vy: 0,
  speed: 5,
  upKey: 38,
  downKey: 40,
  fgColor: 255

}

// A variable to hold the note sound we will play on bouncing
let noteSFX;

// preload()
//font used on memphis background is Summer85 https://www.behance.net/gallery/75434351/SUMMER-85-Free-Font
// Loads the note audio, background music, player image, and image for the sound of bouncing and background image for the start page and game page
function preload() {
  noteSFX = new Audio("assets/sounds/note.wav"); // https://www.youtube.com/watch?v=82-piauOHd4
  backgroundImage1 = loadImage("assets/images/memphisback1.png"); //edited size on Photoshop //second background aka game background 
  backgroundImage = loadImage("assets/images/memphis.png"); //https://cdn.logojoy.com/wp-content/uploads/2018/07/17142754/AdobeStock_104806545-1024x583.png // edited on Photoshop
  playerImage = loadImage("assets/images/music1.png"); // https://www.freepik.com/free-icons/music and then edited it on Photoshop
  backgroundMusic = loadSound("assets/sounds/music80s.mp3"); //https://www.youtube.com/watch?v=pRgogKa9pOM
}

// setup()
//
// Creates the canvas, sets up the drawing modes,
// Sets initial values for paddle and ball positions
// and velocities.
function setup() {
  // Create canvas and set drawing modes

  createCanvas(640, 480);
  rectMode(CENTER);
  noStroke();
  fill(fgColor);


  setupPaddles();
  resetBall();
}

// setupPaddles()
//
// Sets the starting positions of the two paddles
function setupPaddles() {
  // Initialise the left paddle position
  leftPaddle.x = 0 + leftPaddle.w;
  leftPaddle.y = height / 2;

  // Initialise the right paddle position
  rightPaddle.x = width - rightPaddle.w;
  rightPaddle.y = height / 2;
}

function setupSound() { // add vaporwave music
  backgroundMusic.loop();
}
// draw()
//
// Calls the appropriate functions to run the game
// See how tidy it looks?!
function draw() {
  // Fill the background
  background(backgroundImage1);

  if (playing) {
    // If the game is in play, we handle input and move the elements around
    handleInput(leftPaddle);
    handleInput(rightPaddle);
    updatePaddle(leftPaddle);
    updatePaddle(rightPaddle);
    updateBall();
    checkScore();


    checkBallWallCollision();
    checkBallPaddleCollision(leftPaddle);
    checkBallPaddleCollision(rightPaddle);

    // Check if the ball went out of bounds and respond if so
    // (Note how we can use a function that returns a truth value
    // inside a conditional!)
    if (ballIsOutOfBounds()) {
      // If it went off either side, reset it
      resetBall();
      // This is where we would likely count points, depending on which side
      // the ball went off...
    }
  } else {
    // Otherwise we display the message to start the game
    displayStartMessage();
  }

  // We always display the paddles and ball so it looks like Pong!
  displayPaddle(leftPaddle);
  displayPaddle(rightPaddle);
  displayBall();
}

// handleInput()
//
// Checks the mouse and keyboard input to set the velocities of the
// left and right paddles respectively.
function handleInput(paddle) {
  // Move the paddle based on its up and down keys
  // If the up key is being pressed
  if (keyIsDown(paddle.upKey)) {
    // Move up
    paddle.vy = -paddle.speed;
  }
  // Otherwise if the down key is being pressed
  else if (keyIsDown(paddle.downKey)) {
    // Move down
    paddle.vy = paddle.speed;
  } else {
    // Otherwise stop moving
    paddle.vy = 0;
  }
}

// updatePositions()
//
// Sets the positions of the paddles and ball based on their velocities
function updatePaddle(paddle) {
  // Update the paddle position based on its velocity
  paddle.y += paddle.vy;
}

// updateBall()
//
// Sets the position of the ball based on its velocity
function updateBall() {
  // Update the ball's position based on velocity
  ball.x += ball.vx;
  ball.y += ball.vy;
}


// ballIsOutOfBounds()
//
// Checks if the ball has gone off the left or right
// Returns true if so, false otherwise
function ballIsOutOfBounds() {
  // Check for ball going off the sides
  //if the music note  goes on the right, it shows the score in the console
  // if it goes on the left, it shows the score
  if (ball.x < 0) {
    rightPoints = rightPoints + 1;
    console.log(rightPoints, "right score!");


  } else if (ball.x > width) {
    leftPoints = leftPoints + 1;
    console.log(leftPoints, "left score!");

  }
  if (ball.x < 0 || ball.x > width) {
    return true;
  } else {
    return false;
  }
}

// checkBallWallCollision()
//
// Check if the ball has hit the top or bottom of the canvas
// Bounce off if it has by reversing velocity
// Play a sound
function checkBallWallCollision() {
  // Check for collisions with top or bottom...
  if (ball.y < 0 || ball.y > height) {
    // It hit so reverse velocity
    ball.vy = -ball.vy;
    // Play our bouncing sound effect by rewinding and then playing
    noteSFX.currentTime = 0;
    noteSFX.play();
  }
}

// checkBallPaddleCollision(paddle)
//
// Checks for collisions between the ball and the specified paddle
function checkBallPaddleCollision(paddle) {
  // VARIABLES FOR CHECKING COLLISIONS

  // We will calculate the top, bottom, left, and right of the
  // paddle and the ball to make our conditionals easier to read...
  let ballTop = ball.y - ball.size / 2;
  let ballBottom = ball.y + ball.size / 2;
  let ballLeft = ball.x - ball.size / 2;
  let ballRight = ball.x + ball.size / 2;

  let paddleTop = paddle.y - paddle.h / 2;
  let paddleBottom = paddle.y + paddle.h / 2;
  let paddleLeft = paddle.x - leftPaddle.w / 2;
  let paddleRight = paddle.x + paddle.w / 2;

  // First check the ball is in the vertical range of the paddle
  if (ballBottom > paddleTop && ballTop < paddleBottom) {
    // Then check if it is touching the paddle horizontally
    if (ballLeft < paddleRight && ballRight > paddleLeft) {
      // Then the ball is touching the paddle
      // Reverse its vx so it starts travelling in the opposite direction
      ball.vx = -ball.vx;
      // Play our bouncing sound effect by rewinding and then playing
      noteSFX.currentTime = 0;
      noteSFX.play();
    }
  }
}

// displayPaddle(paddle)
//
// Draws the specified paddle
function displayPaddle(paddle) {
  // Draw the paddles
  fill(paddle.fgColor);
  rect(paddle.x, paddle.y, paddle.w, paddle.h);
}

// displayBall()
//
// Draws the ball on screen as a music note
function displayBall() {
  // display music image, and let it take the previous ball size
  image(playerImage, ball.x, ball.y, ball.size, ball.size);
}

// resetBall()
//
// Sets the starting position and velocity of the ball
function resetBall() {
  //  // Initialise the ball's position and velocity
  // when the right paddle scores
  if (ball.x < 0) {
    ball.x = width / 2;
    ball.y = height / 2;
    ball.vx = ball.speed;
    ball.vy = random(2, 8); // random velocity to y

  }
  //when the left paddle scores, reverse speed
  else if (ball.x > width) {
    ball.x = width / 2;
    ball.y = height / 2;
    ball.vx = -ball.speed;
    ball.vy = random(2, 8); // random velocity to y

  }
}


// displayStartMessage()
//
// Shows a message about how to start the game, added memphis pattern design
function displayStartMessage() {
  background(backgroundImage);
  push();
  textAlign(CENTER, CENTER);
  textSize(32);
  text("CLICK TO START", width / 2, height / 2);
  pop();


}

// mousePressed()
//
// Here to require a click to start playing the game
// Which will help us be allowed to play audio in the browser
function mousePressed() {
  playing = true;
  //80s music
  backgroundMusic.stop();
  backgroundMusic.loop();
  //reset the musc note position
  ball.x = width / 2;
  ball.y = height / 2;
  ball.vx = ball.speed;
  ball.vy = random(2, 8);

}
//new function  prove the game by displaying the score on the screen, but without using text
//added colour and size gets bigger everytime there is a new score, whoever wins, the rectangle
//gets bigger and colour changes

function checkScore() {
  if (ball.x < 0) {
    rightPaddle.fgColor = color(random(255), random(255), random(255));
    rightPaddle.h = rightPaddle.h + 2;
    return true;

  } else if (ball.x > width) {
    leftPaddle.fgColor = color(random(255), random(255), random(255));
    leftPaddle.h = leftPaddle.h + 2;
    return true;
  }
  return false;
}
