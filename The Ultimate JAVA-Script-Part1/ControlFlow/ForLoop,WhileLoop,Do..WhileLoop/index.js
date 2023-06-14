// // Hellow World start from 0 and end in 4;
for (let i = 0 ; i < 5; i++){
    console.log('Hello World', i);
}
//Hello World start from 4 and end in 0;
for(let j = 5; j > 0; j--){
    console.log( 'Hello World',j);
}
// Hello World with Odd number;
for(let j = 0; j <= 5; j++){
    if(j%2 !==0)
    console.log( 'Hello World', j);
}
// Hello World with even number;
for(let j = 0; j <= 5; j++){
    if(j%2 ===0)
    console.log('Hello World',j);
}
// While Loop
let i = 0;
while(i <= 5){
    if(i % 2 ===0)
    console.log(i);
    i++;
}
// Do..While Loop
let j  = 0;
do{
    if(j%2 !==0)
    console.log(j);
    j++;
}
while(j <= 10 );
