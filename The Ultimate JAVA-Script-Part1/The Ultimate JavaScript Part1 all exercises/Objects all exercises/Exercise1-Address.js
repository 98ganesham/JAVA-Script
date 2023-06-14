// Street
// City
// Zipcode
let address ={
    street: 'a',
    city: 'b',
    zipcode: 'c',
};
createAddress(address);
function createAddress(address){
    for(let key in address)
    console.log(key, address[key]);
}