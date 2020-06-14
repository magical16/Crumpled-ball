class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill(255);
    rect(0, 0, this.width, this.height);
     ellipseMode(RADIUS)
       fill("pink")
       ellipse(0,0,this.width,this.height);
    pop();
  }
};
// class Paper {
//   constructor(x, y, width, height) {
//     var options = {
//         isStatic:false,
//         restitution:1,
//         friction:0.5,
//         density:1.2
//     }
//     this.body = Bodies.rectangle(x, y, width, height, options);
//     this.width = width;
//     this.height = height;
    
//     World.add(world, this.body);
//   }
//   display() { 
//     var pos = this.body.position; 
//     var angle = this.body.angle;
//    //  push();
//       translate(pos.x, pos.y); 
//       rotate(angle); 
//       rectMode(CENTER); 
//       fill("pink"); 
//       rect(0, 0, this.width, this.height); 
      
//      

//       //pop();
//    }
// }
