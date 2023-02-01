function nonDecreasingSubset(input) {

    let arrayOfNumbers = [...input];

    let resultArr = [arrayOfNumbers[0]];
    for (let i = 1; i < arrayOfNumbers.length; i++) {
        if (resultArr[resultArr.length - 1] <= arrayOfNumbers[i]) {
            resultArr.push(arrayOfNumbers[i]);
        }
    }

    console.log(resultArr.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset([1, 2, 3, 4]);
nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
console.log('--------------------------------');

function nonDecreasingSubset2(numbers) {
    let currentBiggest = numbers[0];
    const newArray = numbers.filter(x => {
        if (x >= currentBiggest) {
            currentBiggest = x;
        }
        return x >= currentBiggest;
    });

    console.log(newArray.join(' '));
}

nonDecreasingSubset2([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSubset2([1, 2, 3, 4]);
nonDecreasingSubset2([20, 3, 2, 15, 6, 1]);