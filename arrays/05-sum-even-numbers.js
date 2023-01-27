function sumEvens(arr) {

    let filteredArr = arr.map(x => Number(x)).filter(x => x % 2 === 0);
    let result = 0;
    for (const el of filteredArr) {
        result += el
    }
    console.log(result);

}

sumEvens(['1', '2', '3', '4', '5', '6']);
sumEvens(['3', '5', '7', '9']);
sumEvens(['2', '4', '6', '8', '10']);

function sumEven(arr1) {

    let initialValue = 0;

    let sum = arr1.map(x => Number(x)).filter(x => x % 2 === 0).reduce((totalValue, currentValue) => totalValue + currentValue, initialValue)

    console.log(sum);

}

sumEven(['1', '2', '3', '4', '5', '6']);