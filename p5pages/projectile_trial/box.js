function Box(){

  this.x;
  this.y;
  this.side = 15;

  this.hitFlag = false;

  this.colorR = 255;
  this.colorG = 50;
  this.colorB = 255;

  this.show = function(){

    fill(this.colorR,this.colorG,this.colorB);
    rect(this.x,this.y,this.side,this.side);

  }

  this.update = function(){

  }

  this.hitByProjectile = function(){
    hit = collideRectRect(this.x,this.y,this.side,this.side,projectile.x,projectile.y,projectile.height,projectile.height);
    return hit;
  }


}
