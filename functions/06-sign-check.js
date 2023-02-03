function signCheck(numberOne, numberTwo, numberThree) {

    let result = 'Positive';
    let isNumOneNegative = numberOne < 0;
    result = checkAndChangeSign(result, isNumOneNegative);
    let isNumTwoNegative = numberTwo < 0;
    result = checkAndChangeSign(result, isNumTwoNegative);
    let isNumThreeNegative = numberThree < 0;
    result = checkAndChangeSign(result, isNumThreeNegative);

    return result;

    function checkAndChangeSign(sign, shouldChange) {

        if (shouldChange === false) {
            return sign
        }

        if (sign === 'Positive') {
            sign = 'Negative';
        } else {
            sign = 'Positive';
        }

        return sign
    }
}

console.log(signCheck(5, 12, -15));
console.log(signCheck(-6, -12, 14));
console.log(signCheck(-1, -2, -3));
console.log(signCheck(-5, 1, 1));