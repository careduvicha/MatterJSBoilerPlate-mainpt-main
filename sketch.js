
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine
let world

var plane
var block1, block2, block3



function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var block1_2={
		restitution:0.6,
		frictionAitr:0.01,
		isStatic:false
	}

	//Crie os Corpos Aqui.
	plane = Bodies.rectangle(400, 690, 800, 5, { isStatic: true })
	World.add(world, plane)
	

	block1 = Bodies.rectangle(200, 500, 40, 40, block1_2)
	World.add(world, block1)

	block2 = Bodies.rectangle(300, 500, 60, 40, block1_2)
	World.add(world, block2)

	block3 = Bodies.circle(400, 500, 60, { isStatic: false })
	World.add(world, block3)
	ellipseMode(RADIUS);
	rectMode(CENTER)
	
}


function draw() {
	background("white");

	Engine.update(engine)

	rect(400, 690, 800, 5)
	push ()
	translate (block1.position.x,block1.position.y)
	rect(0, 0, 40, 40)
	pop ()
	
	push ()
	translate (block2.position.x,block2.position.y)
	rect(0, 0, 60, 40)
	pop ()

	push ()
	translate (block3.position.x,block3.position.y)
	ellipse(0, 0, 30)
	pop ()
	drawSprites();

}


