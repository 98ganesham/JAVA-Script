const movie ={
    title:'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b',
    
}
showProperities(movie);
function showProperities(obj){
    for(let key in obj)
    if(typeof obj[key]==='string')
    console.log(key,obj[key]);

    
}