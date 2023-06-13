function circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log('draw')
    }
}
const Circle = new circle(1);
console.log(Circle);

