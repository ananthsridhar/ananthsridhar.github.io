function Asteroid(){


  this.y = 0;
  this.radius = 18;
  this.x = random(0 + this.radius,width - this.radius);
  this.speed = drop.speed - 1;

  this.show = function(){
    fill(255,0,0);
      ellipse(this.x,this.y,this.radius,this.radius);
  }

  this.update = function(){
    this.y += this.speed;
    this.checkPlayerCollision();
    if(this.y > height + this.radius)
    {
      this.reset();
    }
  }

  this.checkPlayerCollision = function(){
    hit = collideCirclePoly(this.x,this.y,this.radius,playerPaddle.triPoly);
    if(hit)
    {
      this.reset();
      if(playerPaddle.y > playerPaddle.height)
      {
        playerPaddle.y -= 40;
      }
      if(Score < 3)
      {
        Score = 0;
      }
      else {
        Score -= 2;
      }
    }
  }

  this.reset = function(){
    this.x = random(0 + this.radius,width - this.radius);
    this.y = 0 - this.radius;
  }

  this.shiftParallax = function(){

  }


}
