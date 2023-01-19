function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let sum = 0;
        if (i < 10) {
            sum = i;
        } else {
            let currentNumber = '' + i;
            for (let j = 0; j < currentNumber.length; j++) {
                let digitFromCurrent = currentNumber[j]
                sum += Number(digitFromCurrent);
            }
        }

        let isSpecial = (sum === 5 || sum === 7 || sum === 11);
        console.log(`${i} -> ${isSpecial ? 'True' : 'False'}`);
    }

}

specialNumbers(15);
specialNumbers(20);