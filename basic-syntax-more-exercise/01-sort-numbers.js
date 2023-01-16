function sortNumbers(firstNumber, secondNumber, thirdNumber) {

    let biggest = Number.MIN_SAFE_INTEGER;

    if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
        biggest = firstNumber;
        console.log(biggest);
        if (secondNumber >= thirdNumber) {
            console.log(secondNumber);
            console.log(thirdNumber);
        } else {
            console.log(thirdNumber);
            console.log(secondNumber);
        }
    } else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
        biggest = secondNumber;
        console.log(biggest);
        if (firstNumber >= thirdNumber) {
            console.log(firstNumber);
            console.log(thirdNumber);
        } else {
            console.log(thirdNumber);
            console.log(firstNumber);
        }

    } else if (thirdNumber >= secondNumber && thirdNumber >= firstNumber) {
        biggest = thirdNumber;
        console.log(biggest);
        if (firstNumber >= secondNumber) {
            console.log(firstNumber);
            console.log(secondNumber);
        } else {
            console.log(secondNumber);
            console.log(firstNumber);
        }
    }
}

sortNumbers(2, 1, 3);
sortNumbers(-2, 1, 3);
sortNumbers(0, 0, 2);