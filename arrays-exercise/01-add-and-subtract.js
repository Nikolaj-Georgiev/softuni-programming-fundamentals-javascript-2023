function addAndSubtract(numbersArr) {

    let oldSum = 0;
    let newSum = 0;
    for (let i = 0; i < numbersArr.length; i++) {
        let currentNumber = numbersArr[i];
        oldSum += currentNumber;
        if (currentNumber % 2 === 0) {
            currentNumber += i;
        } else {
            currentNumber -= i;
        }
        newSum += currentNumber;
        numbersArr[i] = currentNumber;
    }
    console.log(numbersArr);
    console.log(oldSum);
    console.log(newSum);
}

addAndSubtract([5, 15, 23, 56, 35]);
addAndSubtract([-5, 11, 3, 0, 2]);