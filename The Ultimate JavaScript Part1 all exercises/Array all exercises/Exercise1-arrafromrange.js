const numbers = ArrayRange(1,10);
console.log(numbers);
// Min to Max;
function ArrayRange(min,max){
    const output =[];
    for(let i=min; i<=max; i++)
    output.push(i);
    return output;
}
const maxnumbers = MAXArrayRange(10,1);
console.log(maxnumbers);
// Max to Min;
function MAXArrayRange(max,min){
    const output =[];
    for(let i =max; i>=min; i--)
    output.push(i);
    return output;
}