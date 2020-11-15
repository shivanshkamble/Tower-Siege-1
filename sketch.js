const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand;

var engine,world
var polygon;
function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
    
   
  stand = new Ground(400,height,800,20)
  
  block8 = new Box(570,285,40,40);
  block9 = new Box(610,285,40,40);
  block10 = new Box(650,285,40,40);
  block11 = new Box(550,245,40,40);
  block12 = new Box(590,245,40,40);
  block13 = new Box(630,245,40,40);
  block14 = new Box(570,205,40,40);
  block15 = new Box(610,205,40,40);
  block16 = new Box(590,165,40,40);
  block17 = new Box(530,285,40,40);
  polygon = Bodies.circle(200,200,20);
  World.add(world,polygon);

  slingshot = new SlingShot(this.polygon,{x:200,y:200});

}

function draw() {
  background(255,255,255); 
  Engine.update(engine) 
  ellipseMode(CENTER)
  ellipse(polygon.position.x,polygon.position.y,20,20)
  slingshot.display();
  stand.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingshot.fly()
}