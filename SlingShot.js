class SlingShot {
    constructor (bodyA,pointB){
        var options =  {
       bodyA :bodyA,
       pointB:pointB,
       stiffness:0.04,length:10         
        }
        this.pointB = pointB;

        this.chain = Constraint.create(options);
        World.add(world,this.chain);

    }
    fly(){
        this.chain.bodyA = null;
    }
    display (){
        if(this.chain.bodyA){
            var pointa = this.chain.bodyA.position;
            var pointb = this.pointB;
            strokeWeight (4);
            line(pointa.x,pointa.y,pointb.x,pointb.y);
        }
        
        
    }   
}