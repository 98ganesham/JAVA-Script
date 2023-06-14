const person ={
    firstName : 'Chaw',
    lastName: 'BeLar',
    set fullName(value){
        if(typeof value !=='string')
        return;
        const parts = value.split('');
        this.firstName =parts[0];
        this.lastName = parts[1];
    }
    
}
try{
    person.fullName=true
    throw Error;
}
catch(e){
    console.log(message);
}
console.log(person);