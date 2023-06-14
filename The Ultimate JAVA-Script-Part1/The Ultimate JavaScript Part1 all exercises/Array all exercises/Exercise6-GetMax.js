const numbers =[1,2,3,4];
const max = getMax([1,2,2,2]);
console.log(max);
function getMax(array){
    if(array.length === 0)
    return undefined;
    let max = array[0];
    for(i = 1; i<array.length; i++)
    if(array[i] > max)
    max = array[i];
    return max;
}