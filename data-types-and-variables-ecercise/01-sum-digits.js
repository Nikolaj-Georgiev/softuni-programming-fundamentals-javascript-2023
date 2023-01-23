function sumOfDigits(number) {

    let sum = 0;
    let numberAsString = number + '';

    for (let i = 0; i < numberAsString.length; i++) {
        let currentDigit = Number(numberAsString[i]);
        sum += currentDigit;
    }

    console.log(sum);

}

sumOfDigits(245678);
sumOfDigits(97561);
sumOfDigits(543);
console.log('--------');

function sumOfDigits2(num) {

    let sum = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        sum += lastDigit;
        num = Math.trunc(num / 10);
    }

    console.log(sum);

}

sumOfDigits2(245678);
sumOfDigits2(97561);
sumOfDigits2(543);