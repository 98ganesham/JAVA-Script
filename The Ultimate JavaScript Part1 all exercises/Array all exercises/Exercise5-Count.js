const numbers =[1,2,3,4];
const count = countOccurrences(numbers,1);
console.log(count);
function countOccurrences(array,searchElement){
    array.reduce((accumulator,current) => {
        const occurrences = (current ===searchElement)
        console.log(accumulator,current,searchElement)
            return accumulator  +occurrences;
    },
    0);
}