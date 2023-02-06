function perfectNumber(number) {

    let maxDivider = number / 2;

    let sum = 0;

    for (let i = maxDivider; i > 0; i--) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number) {
        return 'We have a perfect number!';
    } else {
        return 'It\'s not so perfect.';
    }

}

console.log(perfectNumber(6));
console.log(perfectNumber(28));
console.log(perfectNumber(1236498));