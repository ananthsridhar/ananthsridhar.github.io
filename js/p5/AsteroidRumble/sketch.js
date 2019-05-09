
var playerPaddle;
var Score;
var asteroidArray;
var numberOfAsteroid;
var asteroidCount;
var gameOverFlag;

function setup() {

  createCanvas(640, 480);
  playerPaddle = new paddle();
  drop = new Drop();
  reset();  
}

function reset(){
  Score = 0;
  numberOfAsteroids = 15;
  asteroidArray = [];
  asteroidCount = 0;
  gameOverFlag = false;
  playerPaddle.reset();
  for(i=0;i<numberOfAsteroids;i++)
  {
    asteroidArray[i] = new Asteroid();
  }
}

function draw() {
  background(0);
  ScoreDisplay();
  playerPaddle.show();
  playerPaddle.update();
  drop.show();
  drop.update();
  asteroidHandler();
  checkForInput();

}

function checkForInput()
{
  if(keyIsDown(LEFT_ARROW))
  {
    playerPaddle.moveLeft();
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    playerPaddle.moveRight();
  }
  if(keyIsDown(32) && gameOverFlag === true)
  {
    reset();
  }
}

function ScoreDisplay(){
  fill(255);
  if(gameOverFlag)
  {
    playerPaddle.stop();
    textSize(20);
    textAlign(CENTER);
    text("GAME OVER || Press Space To Start Over",width/2,height/2);
    text("SCORE : " + Score,width/2,height/2+40);
  }
  else
  {
    textSize(40);
    textAlign(LEFT);
    text(Score, 40, 50);
  }

}

function asteroidHandler()
{
  if(frameCount % 100 === 0 && asteroidCount < numberOfAsteroids)
  {
      asteroidCount++;
  }
  for(i=0;i<asteroidCount;i++)
  {
    asteroidArray[i].show();
    asteroidArray[i].update();
  }
}
