function interset(prinicipal,rate=3.5,years=5){
    return prinicipal*rate%100*years;
}
console.log(interset(1000));