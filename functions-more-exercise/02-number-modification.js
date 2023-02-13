function numberMod(number) {

    return untilBiggerThanFive(number);

    function untilBiggerThanFive(num) {
        if (!(AverageSumOfDigits(num) > 5)) {
            number = concatenateNine(number);
            untilBiggerThanFive(number);
        }

        return number;
    }

    function AverageSumOfDigits(num) {
        let numAsString = String(num);
        let iterations = numAsString.length;
        let sum = 0;
        let local = 0;
        for (let i = 0; i < iterations; i++) {
            local = num % 10;
            sum += local;
            num = Math.trunc(num / 10);
        }
        sum = sum / iterations;
        return sum;
    }

    function concatenateNine(num) {
        let numAsString = String(num);
        let result = numAsString + '9';
        result = Number(result);
        return result;
    }
}

numberMod(101);
numberMod(5835);