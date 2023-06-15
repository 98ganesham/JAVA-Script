function Shape(){
    Circle.prototype.duplicate = function(){
        console.log('duplicate');
    }
}
function Circle(radius){
    this.radius = radius;
}
Circle.prototype =Object.create(Shape.prototype);

Circle.prototype.draw=function(){
    console.log('draw');
}
const c= new Circle(1);
const s =new  Shape();
