function subtractor(arr) {

    let evenArr = arr.filter(x => x % 2 === 0);
    let oddArr = arr.filter(x => x % 2 !== 0);

    let evenSum = 0;
    let oddSum = 0;

    for (const el of evenArr) {
        evenSum += el;
    }

    for (const el of oddArr) {
        oddSum += el;
    }

    let sumDifference = evenSum - oddSum;

    console.log(sumDifference);
}

subtractor([1, 2, 3, 4, 5, 6]);
subtractor([3, 5, 7, 9]);
subtractor([2, 4, 6, 8, 10]);