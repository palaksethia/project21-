
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	var ballOption = {
		istatic:false ,
		restitution:0.3,
		friction:0,
			density:1.2,}

			ball = Bodies.circle(
				200, 50, 10, ballOption
			  )
			  World.add(
				world, ball
			  )
groundObj.display();
ground = new ground (width/2,670,width,20);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  push ()
  strokeWeight(2)
  stroke ("red")
  pop()

}

function keypressed(){
	if {keyCode === Up_Arrow 

	}
}



