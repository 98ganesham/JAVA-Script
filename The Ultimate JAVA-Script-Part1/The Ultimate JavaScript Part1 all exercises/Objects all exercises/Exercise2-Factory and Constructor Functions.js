// Factory Functions
let address = createAddress('a', 'b' , 'c');
console.log(address);
function createAddress(street,city,zipcode){
    return{
        street,
        city,
        zipcode,
    };
}
// Constructor Functions
let address1 = new Address ('b','c' ,'d');
console.log(address1);
function Address(street,city, zipcode){
    this.street = street;
    this.city = city;
    this.zipcode = zipcode;
}