class Box1 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(1190,400, 20,160);
    //    ellipseMode(RADIUS)
    //      fill("pink")
    //      ellipse(0,0,this.width,this.height);
     // pop();
    }
  };


  class Box2 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(1020,400, 20,160);
    //    ellipseMode(RADIUS)
    //      fill("pink")
    //      ellipse(0,0,this.width,this.height);
      //pop();
    }
  };


  class Box3 {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':0.3,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      //push();
      //translate(pos.x, pos.y);
      //rotate(angle);
      rectMode(CENTER);
      fill(255);
      rect(1110,380, 161,20);
    //    ellipseMode(RADIUS)
    //      fill("pink")
    //      ellipse(0,0,this.width,this.height);
    //  pop();
    }
  };