
var points = [];
var numberOfPoints = 30;
var connectivityNumber = 2;
var pointLiner = new Array();

function setup() {
  console.log(windowWidth + "," + windowHeight);
  var canvas = createCanvas(windowWidth-10,windowHeight);
  canvas.parent('canvasHolder');
  pointSample = new Point();
  for(i=0;i<numberOfPoints;i++)
  {
    points[i] = new Point();
  }
  lineSetter();
  frameRate(30);
}

function draw() {
  background(30,21,42);
  optimize();
  pointsHandler();
  if(frameCount % 300 === 0)
  {
    lineSetter();
  }
  mainLineHandler();
}

function pointsHandler()
{
  for(i=0;i<numberOfPoints;i++)
  {
    points[i].show();
    points[i].update();
  }
}


function mainLineHandler()
{
  for(i = 0;i<numberOfPoints;i++)
  {
    for(j=0;j<connectivityNumber;j++)
    {
     stroke(124,230,88);
      line(points[i].position.x,points[i].position.y,pointLiner[i][j].position.x,pointLiner[i][j].position.y)
    }
  }
}

function lineSetter()
{
  for(i=0;i<numberOfPoints;i++)
  {
    pointLiner[i] = new Array();
    for(j = 0;j<connectivityNumber;j++)
    {
      temp = int(random(0,numberOfPoints));
      if(temp != i)
      {
        pointLiner[i][j] = points[temp];
      }
      else {
        j -=1;
      }
    }
  }
}

function optimize()
{
  if(frameRate() < 20 && numberOfPoints > 10)
  {
    numberOfPoints--;
    //console.log(frameRate());
  }
  else if(numberOfPoints === 10)
  {
    numberOfPoints--;
    connectivityNumber = 3;
    lineSetter();
  }
}

function mouseMovement()
{

}
