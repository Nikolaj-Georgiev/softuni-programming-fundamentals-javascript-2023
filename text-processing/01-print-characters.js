function printCharacters(string) {

    for (let i = 0, len = string.length; i < len; i++) {
        console.log(string[i]);
    }

}

printCharacters('AWord');
console.log('++++++++++++++++');
printCharacters('Sentence');
console.log('++++++++++++++++');

function printCharacters1(string) {

    for (let char of string) {
        console.log(char);
    }

}

printCharacters1('AWord');
console.log('++++++++++++++++');
printCharacters1('Sentence');