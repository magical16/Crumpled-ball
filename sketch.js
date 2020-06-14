const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
//var box1,box2,bird,pig,log,log1,box3,box4,box5,pig1;
var ground,paperObject,waste,waste1,waste2;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ////box1 = new Box(700,320,70,70);
    // box2 = new Box(920,320,70,70);
    paperObject = new Box(200,20,15,15);

    waste = new Box1(900,400,20,200)
    waste1 = new Box2(900,400,20,200)
    waste2 = new Box3(400,400,20,200)
    ground = new Ground(600,height,1200,20)
    //bird = new Bird(100,10);
    
    // pig = new Pig(810,350);
    // pig1 = new Pig(810,210)
    // log = new Log(810,260,300,PI/2)
    // box3 = new Box(700,240,70,70);
    // box4 = new Box(920,240,70,70);
    // box5 = new Box(360,100,50,100);
    
}

function draw(){
    background(0);
    Engine.update(engine);
       // console.log(box2.body.position.x);
    // console.log(box2.body.position.y);
    // console.log(box2.body.angle);
   
   
  paperObject.display();
  waste.display();
  waste1.display();
  waste2.display();

    //trashCan.display();
   ground.display(); 
    
    
     
//     // bird.display();
//      pig.display();
//      pig1.display();
//      log.display();
//      box3.display();
//      box4.display();
//     // box5.display();
// 
// // log4 = new Log(760,120,150, PI/7); // log5 = new Log(870,120,150, -PI/7);
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.pos,{x:15,y:-11})
    restitution:-0.2
    friction:0
    density:1.0
    

    //paperObject.collide=waste1;
    }
}