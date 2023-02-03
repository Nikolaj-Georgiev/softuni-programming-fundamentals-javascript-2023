function palindromeIntegers(integersArray) {

    let result = '';

    for (let i = 0; i < integersArray.length; i++) {
        let currentElement = String(integersArray[i]);
        let localArr = currentElement.split('');
        let reversedElement = localArr.reverse().join('');

        if (currentElement === reversedElement) {
            result += 'true\n';
        } else {
            result += 'false\n';
        }
    }

    return result;
}

console.log(palindromeIntegers([123, 323, 421, 121]));
palindromeIntegers([32, 2, 232, 1010]);