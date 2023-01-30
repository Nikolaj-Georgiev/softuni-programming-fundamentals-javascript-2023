function maxNumber(arrayOfNumbers) {

    let result = [];

    for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
        let currentNumber = arrayOfNumbers[i];
        let isBigger = false;
        for (let j = i + 1; j < arrayOfNumbers.length; j++) {
            if (currentNumber > arrayOfNumbers[j]) {
                isBigger = true;
            } else if (currentNumber === arrayOfNumbers[j]) {
                isBigger = false;
                break;
            } else {
                isBigger = false;
                break;
            }
        }

        if (isBigger) {
            result.push(currentNumber);
        }
    }

    result.push(arrayOfNumbers[arrayOfNumbers.length - 1]);
    console.log(result.join(' '));
}

maxNumber([4, 1]);
maxNumber([14, 24, 3, 19, 15, 17]);
maxNumber([41, 41, 34, 20]);
maxNumber([27, 19, 42, 2, 13, 45, 48]);
maxNumber([0, 0, 0, 0]);
maxNumber([48, 19, 42, 2, 13, -48, -48]);