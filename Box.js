class Box{
    constructor(x,y,width,height){
        var options = {
            isStatic: false,
            restitution: 0.7,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        if(this.body.speed < 3){
            var pos = this.body.position;
            var angle = this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            rectMode(CENTER);
            rect(0,0,this.width,this.height);
            pop();
        } else {
            World.remove(world,this.body);
            push();
            this.Visibility = this.Visibility - 5;
            tint(255,this.visibility);
            rect(this.body.position.x,this.body.position.y,this.width,this.height);
            pop();
        }

        
    }
}