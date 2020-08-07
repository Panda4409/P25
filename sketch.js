
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	paperIMG = loadIMG("paper.png")
	dustbinIMG = loadIMG("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);

	paperSprite = createSprite(95, 200, 5);
	paperSprite.addIMG(paperIMG)

	dustbinSprite = createSprite(775, 650, 10, 10);
	dustbinSprite.addIMG(dustbinIMG)


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperBody = Bodies.circle(95, 200, 5, { restitution: 0.3, isStatic: false });
	World.add(world, paperBody);

	dustbinBody = Bodies.rectangle(775, 650, 50, 50, { restitution: 0.3, isStatic: false });
	World.add(world, dustbinBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperClass.body, paperClass.body.position, { x: 85, y: 85 });
    }
}

