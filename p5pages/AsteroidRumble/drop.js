function Drop(){

  this.xPosition = random(0+this.width,width - this.width);
  this.height = 10;
  this.width = 10;
  this.speed = 2;
  this.y = 0 ;

  this.show = function(){
    rect(this.xPosition,this.y,this.width,this.height);
  }

  this.update = function(){
    this.y += this.speed;
    this.checkPlayerCollision();
    if(this.y + this.height > height)
    {
      if(Score > 0){
    }
      this.reset();
    }
  }

  this.reset = function(){
    this.xPosition = random(0+this.width,width - this.width);
    this.y = 0 - this.height;
  }

  this.checkPlayerCollision = function(){
    hit = collideRectPoly(this.xPosition,this.y,this.width,this.height,playerPaddle.triPoly);
    if(hit)
    {
      Score++;
      this.reset();
    }
  }

  this.stop = function(){
    this.speed = 0;
  }

}
