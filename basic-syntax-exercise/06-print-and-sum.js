function printAndSum(start, end) {

    let sum = 0;
    let resultNumbersString = '';
    for (let i = start; i <= end; i++) {
        sum += i;
        if (i !== end) {
            resultNumbersString += i + ' ';
        } else {
            resultNumbersString += i;
        }

    }

    console.log(resultNumbersString);
    console.log(`Sum: ${sum}`);

}

printAndSum(5, 10);
console.log('-------------------------');
printAndSum(0, 26);
console.log('-------------------------');
printAndSum(50, 60);