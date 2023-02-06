function factorialDivision(firstNumber, secondNumber) {

    let resultOfDivision = factorial(firstNumber) / factorial(secondNumber);
    return resultOfDivision.toFixed(2);

    function factorial(number) {
        let result = 1;
        for (let i = 1; i <= number; i++) {
            result = i * result;
        }
        return result;
    }
}

console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));