 Point = function(){

   this.x = 200;
   this.y = 200;
   this.position = createVector(random(width),random(height));
   this.diameter;
   this.pointSize = 5;

   this.velocity = p5.Vector.random2D();
   this.acceleration = createVector(0,0);
   this.maxSpeed = 0.5;
   this.maxForce  = 0.02;
   this.newTarget = createVector(random(width),random(height));

   this.show = function(){
     fill(124,230,88);
     stroke(124,230,88);
     // ellipse(this.position.x,this.position.y,this.pointSize,this.pointSize);
   };

   this.update = function(){
     force =  this.seek();
     if(frameCount % 900 === 0)
     {
       this.newTarget = createVector(random(width),random(height));
     }
     this.acceleration.add(force);
     this.velocity.add(this.acceleration);
     this.velocity.limit(this.maxspeed);
     this.position.add(this.velocity);
     this.borderCheck();
     // Reset acceleration to 0 each cycle
     this.acceleration.mult(0);
   };

   this.borderCheck = function(){
     if (this.position.x < -this.pointSize)  this.position.x = width +this.pointSize;
     if (this.position.y < -this.pointSize)  this.position.y = height+this.pointSize;
     if (this.position.x > width +this.pointSize) this.position.x = -this.pointSize;
     if (this.position.y > height+this.pointSize) this.position.y = -this.pointSize;
   };

   // A method that calculates and applies a steering force towards a target
   // STEER = DESIRED MINUS VELOCITY
    this.seek = function() {
      var desired = p5.Vector.sub(this.newTarget, this.position); // A vector pointing from the location to the target
      // Normalize desired and scale to maximum speed
      desired.normalize();
      desired.mult(this.maxSpeed);
      // Steering = Desired minus Velocity
      var steer = p5.Vector.sub(desired, this.velocity);
      steer.limit(this.maxForce); // Limit to maximum steering force
      return steer;
    };
 }
