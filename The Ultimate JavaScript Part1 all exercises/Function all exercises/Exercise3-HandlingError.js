
   try{ const numbers =[1,2,3,4];
const count = countOccurrences(numbers,1);}
catch(e){
    console.log(e,message);
}
function countOccurrences(array,searchElement){
    if(!Array.isArray(array))
        throw new Error('Invalid Array')
    return array.reduce((accumulator,current) => {
        const occurrences = (current ===searchElement)
        console.log(accumulator,current,searchElement)
            return accumulator  +occurrences;
    },
    0);
}