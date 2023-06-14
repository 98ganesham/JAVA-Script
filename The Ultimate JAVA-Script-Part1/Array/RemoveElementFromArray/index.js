const number =[1,2,3,4];
// To remove from beginning
const first = number.shift();
console.log(first);
// To remove from middle
const middle = number.splice(0,2);
console.log(middle);
// To remove from end
const end = number.pop();
console.log(end);