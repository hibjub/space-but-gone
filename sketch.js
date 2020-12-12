const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13;

var ball,string;

var platform,platform2;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(490,235,30,40);
  box2 = new Box(520,235,30,40);
  box3 = new Box(550,235,30,40);
  box4 = new Box(580,235,30,40);
  box5 = new Box(610,235,30,40);

  box6 = new Box(520,195,30,40);
  box7 = new Box(550,195,30,40);
  box8 = new Box(580,195,30,40);

  box9 = new Box(550,155,30,40);

  box10 = new Box(700,195,30,40);
  box11 = new Box(730,195,30,40);
  box12 = new Box(760,195,30,40);

  box13 = new Box(730,155,30,40);

  platform = new Ground(550,255,160,20);
  platform2 = new Ground(730,215,100,20);

  ball = new Ball(250,195,30,30);
  string = new String(ball.body,{x:250,y:175});
}

function draw() {
  background(0); 
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
  box10.display();
  box11.display();
  box12.display();
  box13.display();

  platform.display();
  platform2.display();

  ball.display();

  string.display();
}


function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}


function mouseReleased() {
  string.fly();
}


function keyPressed() {
  if(keyCode === 32) {
    string.attach(ball.body);
  }
}