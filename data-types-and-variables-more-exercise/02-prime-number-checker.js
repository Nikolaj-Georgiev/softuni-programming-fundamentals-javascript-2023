function primeChecker(number) {

    if (number % number === 0 && number % 1 === 0 && number % 2 !== 0 && number % 3 !== 0) {
        return true;
    } else {
        return false
    }
}

console.log(primeChecker(7));
console.log(primeChecker(8));
console.log(primeChecker(81));