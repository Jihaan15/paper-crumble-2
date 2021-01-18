class Paper{
    constructor(x,y,width,height){
        var options = {
            density : 1.0,
            restitution : 0.8,
            friction : 0.4 
        }
        this.body= Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        this.image = loadImage( "paperImage.png" )
     
    }
      display(){
          var angle = this.body.angle
          var pos = this.body.position
          push()
          translate(pos.x,pos.y)
          rotate(angle)
          imageMode(CENTER)
          image(this.image,0 ,0,this.width,this.height )
          pop()
      }
}