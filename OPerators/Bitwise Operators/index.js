// 1 = 00000001;
// 2 = 00000010;
// 3 = 00000011;
// 4 = 00000100;


const readPermission = 4;
const writePermission = 2;
const executePermission = 1;
let myPermission = 0;
myPermission = myPermission | readPermission | writePermission;
console .log(myPermission);
let message = (myPermission & readPermission) ? 'yes' : 'no';
console .log(message)

// console .log(1 | 2);
// console .log(1 & 2);

