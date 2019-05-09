function Projectile(){

this.x = 60;
this.y = -150;
this.height = 10;

//Initials
this.initX = 60;
this.initY = -150
this.initVel = 10;

this.velX;
this.velY;

this.angle;// = 45;
this.angle = this.angle * (PI/180);

//The constants
this.timer = 0;
this.gravity = 9.8;


this.show = function(){
  rect(this.x,this.y,10,this.height);
  fill(255);
}

this.update = function(){
  //if(!this.floorCollision())
  if(this.y < floorHeight-this.height)
  {
    this.timer+=1/10;
    // x = u t cos(thetha)
    this.x = this.initX  + this.initVel * this.timer * cos(this.angle);
    //y = u t sin(thetha) * 1/2 g
    var tempY = this.initY -this.initVel * this.timer * sin(this.angle) + (0.5*this.gravity*(this.timer * this.timer));
    if(tempY < floorHeight-this.height)
    {
      this.y = tempY;
    }
    else {
      this.y = floorHeight - this.height;
    }
    //this.y = -1 * this.y;
    //console.log(this.x + " " + this.y);
  }
}

this.reset = function(){
  this.x = this.initX;
  this.y = this.initY;
  this.timer = 0;
}

this.floorCollision = function(){
    hit = collideRectRect(this.x,this.y,10,10,10,-50,width-40,100);
    return hit;
  }

}
