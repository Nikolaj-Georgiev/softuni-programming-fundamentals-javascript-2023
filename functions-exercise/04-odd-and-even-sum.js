function oddAndEvenSum(number) {

    let string = String(number);
    let array = string.split('');

    let buffer = 0;
    let evenSum = array
        .map(x => Number(x))
        .filter(x => x % 2 === 0)
        .reduce((accumulator, currentValue) => accumulator + currentValue, buffer);

    let oddSum = array
        .map(x => Number(x))
        .filter(x => x % 2 !== 0)
        .reduce((total, current) => total + current, buffer);

    let result = `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
    return result;
}

console.log(oddAndEvenSum(1000435));
console.log(oddAndEvenSum(3495892137259234));