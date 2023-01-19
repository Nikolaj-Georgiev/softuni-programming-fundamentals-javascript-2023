function integerAndFloat(firstNumber, secondNumber, thirdNumber) {

    let sum = firstNumber + secondNumber + thirdNumber;

    if (Number.isInteger(sum)) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }

}

integerAndFloat(9, 100, 1.1);
integerAndFloat(100, 200, 303);