const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine;
var world;
var rope,ball,box1,box2,box3,box4,box5,box6,box7,box8,box9,ground,gamestate;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ball = new Ball(300,200,30);
  rope = new Rope(ball.body,{x:100,y:100});

  box1 = new Box(600,200,50,50);
  box2 = new Box(650,200,50,50);
  box3 = new Box(700,200,50,50);
  box4 = new Box(600,250,50,50);
  box5 = new Box(650,250,50,50);
  box6 = new Box(700,250,50,50);
  box7 = new Box(600,300,50,50);
  box8 = new Box(650,300,50,50);
  box9 = new Box(700,300,50,50);

  ground = new Ground(400,350,800,20);
  gamestate = "onrope";

}

function draw() {
  background(255);  
  Engine.update(engine);
  
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  ball.display();
  rope.display();
 
 ground.display();
  drawSprites();
}
function mouseDragged(){
  if(gamestate === "onrope"){
  Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}
function mouseReleased(){
  rope.fly();
  gamestate = "launched";
}

function keyPressed(){
  if(keyCode === 32){
      rope.attach(ball.body);
      Matter.Body.setPosition(ball.body, {x: 300 , y: 200});
  }
}