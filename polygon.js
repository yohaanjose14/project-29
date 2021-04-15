class Polygon{
    constructor (x,y,r){
        var options={
            isStatic:false,
            restitution:2,
            friction:1,
            density:1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.image=loadImage("polygon.png");
        this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

    }
    display(){
        var polygonpos=this.body.position;
        push();
        translate(polygonpos.x,polygonpos.y);
        fill(255,0,255);
        imageMode(CENTER);
        ellipse(RADIUS);
        image(this.image, 0,0,this.r*2, this.r*2)
			pop()
			
    }
}