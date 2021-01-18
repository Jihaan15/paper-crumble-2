
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var world , engine ;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,680,800,20)
	side1 = new Side(600,570,400,200)
	//side2 = new Side (750,570,20,200)

	paper = new Paper(100,200,20,20)

	Engine.run(engine);
  
}


function draw() {
  
  background(255);
  ground.display()
  side1.display()
  //side2.display()
  paper.display()
 
}
function keyPressed(){
	if(keyCode == 32){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:19,y:-20})
	}
}


