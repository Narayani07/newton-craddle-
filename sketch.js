
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Render= Matter.Render;
const Body = Matter.Body;


var bob1,bobDiametre;

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

 bobDiametre =40;



startBobPoseX=width/2;
startBobPoseY= height/4 + 500;

bob1 = new Bob(startBobPoseX-bobDiametre*2,startBobPoseY,bobDiametre);
var render= Render.create({
	element:document.body,
	engine:engine,
	options:{
	width:1200,
	height:700,
	wireframes:false
	}
}); 






	//Create the Bodies Here.
roof= new Roof(400,100,900,20) 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  

 roof.display(); 
 bob1.display();
 drawSprites();
}



//render= used for drawing  (bound it position it)