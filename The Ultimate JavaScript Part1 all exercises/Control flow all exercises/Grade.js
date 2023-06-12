const marks = [80,62,50];
console.log(calculateGrade(marks));
function calculateGrade(marks){
    const average = calculateAverage (marks)
    if(average <= 50) return 'F';
    if(average <= 60) return 'E';
    if(average <= 70) return 'D';
    if(average <= 80) return 'C';
    if(average <= 90) return 'B';
    return 'A';
    
} 
function calculateAverage(array){
    let sum = 0;
    for(let value of array)
    sum+= value;
    return sum/array.length;
}