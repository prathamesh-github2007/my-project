class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250,
        }
        
        this.pointB = pointB
        this.ropeA = Constraint.create(options);
        World.add(world, this.ropeA);
    }
    attach(body){
        this.ropeA.bodyA = body;
    }
    
    fly(){
        this.ropeA.bodyA = null;
    }

    display(){
        if(this.ropeA.bodyA){
            var pointA = this.ropeA.bodyA.position;
            var pointB = this.pointB;
            push();
            
            stroke(48,22,8);
           strokeWeight(3)
            line(pointB.x,pointB.y,pointA.x,pointA.y);
            pop();
        }
    }
    
}