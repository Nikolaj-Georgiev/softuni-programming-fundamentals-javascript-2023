function processOddNumbers(arrOfNumbers) {

    let oddIndexDoubledArr = arrOfNumbers
        .filter((x, i) => i % 2 !== 0)
        .map(x => x * 2)
        .reverse()
        .join(' ');

    return oddIndexDoubledArr;
}

function processOddNumbers2(arr) {

    let oddIndexArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            oddIndexArr.push(arr[i]);
        }
    }

    let multiplyBy2 = x => x * 2;

    let multipliedArr = customMap(multiplyBy2, oddIndexArr);

    let result = '';
    for (let i = multipliedArr.length - 1; i >= 0; i--) {
        let localEl = multipliedArr[i];
        if (i > 0) {
            result += localEl + ' ';
        } else {
            result += localEl;
        }
    }

    return result;

    function customMap(callbackFn, arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            result.push(callbackFn(arr[i]));
        }

        return result;
    }
}

console.log(processOddNumbers([10, 15, 20, 25]));
console.log(processOddNumbers([3, 0, 10, 4, 7, 3]));
console.log(processOddNumbers2([10, 15, 20, 25]));
console.log(processOddNumbers2([3, 0, 10, 4, 7, 3]));