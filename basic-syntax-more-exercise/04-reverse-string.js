function reverseString(string) {

    let reversedString = '';

    for (let i = string.length - 1; i >= 0; i--) {
        reversedString += string[i];
    }

    console.log(reversedString);

}

reverseString('Hello');
reverseString('SoftUni');
reverseString('1234');
console.log('-----------');

function rev1(string1) {

    let result = string1.split('').reverse().join('');
    console.log(result);
}

rev1('Hello');
rev1('SoftUni');
rev1('1234');