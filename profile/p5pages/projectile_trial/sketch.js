
var projectile;
var launcher;
var angleSlider;

//Boxes
var boxArray = [];
var numberOfBoxes = 15;
var numberOfRows = 10;
var totalNBoxes;
var boxesAlive = 0;

var boxLocation;
var boxGap = 1;

var minVel = 5;
var maxVel = 100;

var Score = 0;

var floorHeight = -50;

function setup() {
  // createCanvas(1000,600);
  var width = document.getElementById('canvasHolder').clientWidth;
  var height = document.getElementById('canvasHolder').clientHeight;
  var canvas = createCanvas(width,height);
  canvas.parent('canvasHolder');
  launcher = new Launcher();
  projectile = new Projectile();
  boxLocation = width - 50;
  frameRate(120);
  angleSlider = createSlider(-90, -0, -45);
  // angleSlider.position(200,  10);
  velocitySlider = createSlider(5, 100, 50);
  // velocitySlider.position(200,  60);
  reset();
}

function draw() {
  background(0);
  translate(0,height);
  fill(250);
  //rect(10,floorHeight,width-40,50);
  launcher.show();
  launcherHandler();
  projectile.show();
  boxHandler();
  projectile.update();
  keyControls();
  textHandler();
  ScoreDisplay();
}

function reset()
{
  Score = 0;
  boxBuilder();
}

function launcherHandler(){
  launcher.launchForce  = (velocitySlider.value() - minVel)/(maxVel - minVel)*100;
}
function boxHandler()
{
  boxesAlive = 0;
  for(var i = 1;i<=totalNBoxes;i++)
  {
    if(!(boxArray[i].hitByProjectile() || boxArray[i].hitFlag))
    {
      boxesAlive++;
      boxArray[i].show();
    }
    else
      {
        boxArray[i].hitFlag = true;
      }
  }
}

function boxBuilder()
{
  n = 0;
  for(var i = 0;i<numberOfRows;i++)
  {
    boxN = random(4,numberOfBoxes);
    for(var y = 0;y<boxN;y++)
    {
      boxArray[++n] = new Box();
      boxArray[n].x = boxLocation - (boxArray[n].side + boxGap)*(y+1);
      boxArray[n].y = -50 - (boxArray[n].side+boxGap)*(i+1);
      boxArray[n].colorR = random(10,255);
      boxArray[n].colorG = random(10,255);
      boxArray[n].colorB = random(10,255);
    }
  }
  totalNBoxes = n;
}

function keyControls()
{
  if(keyIsDown(32))
  {
    projectile.angle = launcher.angle * (-1);
    projectile.initVel = velocitySlider.value();
    projectile.reset();
  }
  if(keyIsDown(LEFT_ARROW))
  {
    velocitySlider.value(velocitySlider.value()-2);
  }
  if(keyIsDown(RIGHT_ARROW))
  {
    velocitySlider.value(velocitySlider.value()+2);
  }
  if(keyIsDown(UP_ARROW))
  {
    angleSlider.value(angleSlider.value()-2);
  }
  if(keyIsDown(DOWN_ARROW))
  {
    angleSlider.value(angleSlider.value()+2);
  }
  if(keyIsDown(65))
  {
    reset();
  }
}

function ScoreDisplay()
{
  Score = 100 - boxesAlive/totalNBoxes * 100;
  fill(255);
    textSize(40);
    textAlign(CENTER);
    text(Score.toFixed(0), width/2, -50);
}

function textHandler()

{
    fill(255);
    textSize(20);
    textAlign(CENTER);
    text("Adjust Angle(UP/DOWN) and Force(LEFT/RIGHT) with Arrow Keys and Press Space to Shoooot",width/2,0-height+100);
    if(Score === 100)
    {
      fill(random(0,255),random(0,255),random(0,255));
      textSize(40);
      textAlign(CENTER);
      text("Congrats, You're awesome! Press R to reset!",width/2,0 - height/2);
    }
}
