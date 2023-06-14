let address = new Address('a', 'b', 'c');
let address1 = new Address('a', 'b', 'c');
let address2 = address;
console.log(areEqual(address,address1));
console.log(areSame(address,address1));
console.log(areSame(address2, address1));
function Address(street, city, zipcode){
    this.stree = street;
    this.city = city ;
    this.zipcode = zipcode;
}
function areEqual(address,address1){
    return address.street === address1.street && address.city === address1.city && address.zipcode === address1.zipcode;
}
function areSame(address,address1){
    return address === address1;
}