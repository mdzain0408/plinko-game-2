class ground{

constructor(){

this.body = Bodies.rectangle(400,690,800,20,{isStatic:true});
this.width = 800;
this.height = 20;
World.add(world,this.body);


}

display(){
var pos = this.body.position
rectMode(CENTER);
fill("red")
rect(pos.x,pos.y,this.width,this.height);


}



}