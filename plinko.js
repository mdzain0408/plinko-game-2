class Plinko{

constructor(x,y,r){

this.body = Bodies.circle(x,y,r,{isStatic:true})
this.radius = r;
this.color = color(255,255,255);
World.add(world,this.body);
}


display(){

var pos = this.body.position;

push();
translate(pos.x,pos.y);
noStroke();
fill(this.color);
ellipseMode(CENTER);
ellipse(0,0,this.radius,this.radius)
pop();


}



}