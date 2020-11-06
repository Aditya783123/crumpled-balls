

class Paper{
 constructor(x, y, r){
    var options={
    isStatic:false,
    restitution:0.3,
    friction:0.5,
    density:1.2
    };

    this.body = Bodies.rectangle(x, y, r, r, options);
    this.r = r;
    this.image = loadImage("Sprites/paper.png");
    World.add(world, this.body);
 }
 
 display()
 {
    var paperPos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(paperPos.x, paperPos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.r, this.r);
    pop();
 }
}