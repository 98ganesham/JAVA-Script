function extend(Child, Parent){
    Child.prototype =Object.create(Parent.prototype);
Child.prototype.constructor = Child;
}

function Circle(radius, color){
    Shape.call(this,color);
    this.radius = radius;
    
}
extend(Circle,Shape);
Circle.prototype.draw=function(){
    console.log('draw');
}
function Square(size){
    this.size = size;
}
extend (Square, Shape);
