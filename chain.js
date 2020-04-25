class Chain{
    constructor(a,b){
        var option ={
            bodyA: a ,
            bodyB: b ,
            length: 10,
            stiffness : 0.2
        }
        this.chain = Constraint.create(option);
        World.add(world,this.chain);
    }
    display(){
        strokeWeight(2);
        line(this.chain.bodyA.position.x,this.chain.bodyA.position.y,this.chain.bodyB.position.x,this.chain.bodyB.position.y);
    }
    
}
