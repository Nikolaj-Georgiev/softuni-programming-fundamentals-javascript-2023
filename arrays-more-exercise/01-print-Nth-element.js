function printNthElement(stringArray) {

    let nTh = Number(stringArray[stringArray.length - 1]);
    let result = '';
    for (let i = 0; i < stringArray.length - 1; i += nTh) {
        if ((i + nTh) < stringArray.length - 1) {
            result += stringArray[i] + ' ';
        } else {
            result += stringArray[i];
        }
    }

    console.log(result);
}

printNthElement(['5', '20', '31', '4', '20', '2']);
console.log('---------------------------');
printNthElement(['dsa', 'asd', 'test', 'test', '2']);
console.log('---------------------------');
printNthElement(['1', '2', '3', '4', '5', '6']);