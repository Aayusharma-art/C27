
class Bob {

contructor (x,y) {
    var options = {
        isStatic: false,
        restitution: 1,
        friction: 0,
        density: 7.8,
    }
this.body = bodies.circle(x,y,25,options);
World.add(worls,this.body);

console.log(this.body)

}

display(){
    push();
    ellipseMode(RADIUS);
    fill(254,0,255)
    ellpise(this.body.position.x,this,body.position.y,25,25)
    pop();
}

}