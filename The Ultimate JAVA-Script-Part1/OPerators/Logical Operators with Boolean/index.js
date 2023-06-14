// Logical And(&&)
// let highIncome = ture;
// let goodCreditScore = true;
// let eligibleForLoan = highIncome && goodCreditScore;
// console.log(eligibleForLoan);

// Logical Or(||)
// let highIncome = false;
// let goodCreditScore =false;
// let eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan);

// Logical Not(!)
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
// console.log(eligibleForLoan);
let applicatonRefused = !eligibleForLoan;
console.log(applicatonRefused);