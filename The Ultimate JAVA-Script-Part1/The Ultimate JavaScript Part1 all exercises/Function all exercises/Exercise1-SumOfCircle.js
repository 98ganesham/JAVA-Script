const numbers = sum(1,2,3,4,5);
console.log(numbers);
function sum(a,b){
    let total = 0;
    for(let value of arguments)
    total += value;
    return total;

}
// console.log(sum);