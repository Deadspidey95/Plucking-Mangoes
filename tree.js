class Tree{
    constructor(x, y) {
       this.x = x;
       this.y = y;
       this.boxWidth = 450;
       this.boxHeight = 600;
       this.thickness = 10;
       this.image = loadImage("tree.png")

        this.bottomBody = Bodies.rectangle(this.x, this.y, this.boxWidth, this.thickness, {isStatic : true});
        this.leftBody = Bodies.rectangle(0, this.y-this.boxHeight/2, this.thickness, this.boxHeight, {isStatic : true});
        this.rightBody = Bodies.rectangle(this.x+this.boxWidth/2, this.y-this.boxHeight/2, this.thickness, this.boxHeight, {isStatic : true});
        
        World.add(world, this.bottomBody);
        World.add(world, this.leftBody);
        World.add(world, this.rightBody);
      }
      display(){
        var pos = this.bottomBody.position;
        push();
        translate(pos.x, pos.y);
        fill("blue");
        imageMode(CENTER)
        image(this.image, 0, -this.boxHeight/2, this.boxWidth, this.tboxHeight);
        pop();

      
      }
}