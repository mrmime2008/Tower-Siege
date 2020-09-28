class Rope {
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 50
        }
        this.rope = Constraint.create(options);
        World.add(world,this.rope);
    }
    
    fly(){
        this.rope.bodyB = null;
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(4);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}