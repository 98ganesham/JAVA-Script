speedcheck = 70;
function speedcheck(speed){
    const speedLimit = 70;
    const klmPerPoints = 5;
    if(speed < speedLimit+klmPerPoints);
    console.log('Ok');
    let points = Math.floor((speed-speedLimit)/klmPerPoints);
    if(points >= 12)
    console.log('License Suspended');
    else
    console.log('Points' , points);
    
}
