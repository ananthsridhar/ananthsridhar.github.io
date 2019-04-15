function Launcher(){

  this.angle = -45;
  this.angle = this.angle * (PI/180);
  this.velocity = 20;
  this.x = 10;
  this.y = -100;

  this.launchForce = 50;

  this.show = function(){

    this.angle = angleSlider.value();
    this.angle = this.angle * (PI/180);
    push();
      rect(this.x,this.y,50,50);
      rect(this.x,this.y + 60,this.launchForce,10);
      translate(this.x,this.y);
      push();
        rotate(this.angle);
        rect(0,0,50,5);
      pop();
    pop();
  }

  this.update = function(){

  }

}
