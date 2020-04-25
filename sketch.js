const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand,ball;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var stand_options={
    isStatic: true
  }
stand = Bodies.rectangle(200,100,200,20,stand_options);
World.add(world,stand);

var ball_options = {

  restitution : 1.0,
  density : 1.0

}

ball  = Bodies.circle(220,200,40,ball_options);
World.add(world,ball);
var options = {
  bodyA : ball,
  bodyB : stand,
  stiffness: 0.004,
  length : 100
}
var spring = Constraint.create(options);
World.add(world,spring);

fill("red");
}

function draw() {
  background("yellow"); 
  Engine.update(engine);
  fill ("green");
rectMode(CENTER);
rect(stand.position.x,stand.position.y,200,20);

fill("orange");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(2);
stroke("green");
line(ball.position.x,ball.position.y,stand.position.x,stand.position.y)
if(keyCode===32){
ball.position.y = mouseY;
ball.position.x = mouseX;
}

else if (keyCode === ENTER){
ball.position.x = 200;
}
}
