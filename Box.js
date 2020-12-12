class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.2,
        'friction':2,
        'density':2
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibilaty = 255;
    
    World.add(world, this.body);

  }
   display() {
    if (this.body.speed < 3) {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("black");
      fill("white");
      rect(0,0,this.width,this.height);
      pop();
     }
     else {
       World.remove(world,this.body);
       push();
       this.visibilaty = this.visibilaty - 5;
       tint(255,this.visibilaty);
       pop();
     }
   }
}
