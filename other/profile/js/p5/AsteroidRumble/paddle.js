function paddle(){

  this.speed = 5;
  this.width = 20;
  this.height = 60;
  this.x = width/2 - this.width/2;
  this.y = height - 20;
  this.triPoly = [];


  this.reset = function(){
    this.x = width/2 - this.width/2;
    this.y = height - 20;
    this.speed = 5;
  }

  this.show = function(){
    //fill(0);
    triangle(this.x,this.y,this.x + this.width/2,this.y - this.height,this.x + this.width,this.y);
    //rect(this.x,this.y,this.width,this.height);
    //rect(this.x - this.width,this.y + this.height*0.67 , this.width * 3,this.height/3);
  }

  this.update = function(){
    this.triPoly[0] = createVector(this.x,this.y);
    this.triPoly[1] = createVector(this.x + this.width/2,this.y - this.height);
    this.triPoly[2] = createVector(this.x + this.width,this.y);
    if(this.y < this.height+10)
      {
        gameOverFlag = true;
      }
  }

  this.moveLeft = function(){
    if(this.x > 0)
    {
      this.x -= this.speed;
    }
  }

  this.moveRight = function(){
    if(this.x+this.width < width)
    {
      this.x += this.speed
    }
  }

  this.stop = function(){
    this.speed = 0;
  }

}
