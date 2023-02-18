function numbers(input) {

    let numbers = input.split(' ').map(Number);
    let average = numbers.reduce((total, current) => total + current, 0) / numbers.length;
    let topFive = numbers.filter(x => x > average);
    topFive.sort((a, b) => b - a);

    if (topFive.length) {
        if (topFive.length >= 5) {
            return topFive = topFive.slice(0, 5).join(' ');
        } else {
            return topFive.join(' ');
        }
    } else {
        return 'No';
    }
}

console.log(numbers('10 20 30 40 50'));
console.log('++++++++++++++++++++');
console.log(numbers('5 2 3 4 -10 30 40 50 20 50 60 60 51'));
console.log('++++++++++++++++++++');
console.log(numbers('1'));
console.log('++++++++++++++++++++');
console.log(numbers('-1 -2 -3 -4 -5 -6'));