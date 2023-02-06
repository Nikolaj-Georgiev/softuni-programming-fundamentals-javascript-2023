function loadingBar(number) {

    let result = '';

    if (number !== 100) {
        let percentResult = number + '%';
        result += `${percentResult} ${crateBar(number)}` + '\n' + 'Still loading...';
    } else {
        result = '100% Complete!' + '\n' + `${crateBar(number)}`;
    }

    return result;

    function crateBar(a) {
        let result = '[';
        let barPercent = a / 10;
        let barDots = 10 - barPercent;
        result += '%'.repeat(barPercent) + '.'.repeat(barDots) + ']';
        return result;
    }
}

console.log(loadingBar(30));
console.log(loadingBar(50));
console.log(loadingBar(100));