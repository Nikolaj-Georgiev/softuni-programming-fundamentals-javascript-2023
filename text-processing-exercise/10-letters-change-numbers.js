function lettersChangeNumbers(string) {

    let arrayOfSequences = string.split(' ').filter(x => x.length);
    let alphabetU = '1ABCDEFGHIJKLMNOPQRSTUVWXYYZ';
    let alphabetL = alphabetU.toLocaleLowerCase();
    let totalSum = 0;

    arrayOfSequences.forEach(sequence => {
        totalSum += lettersOperations(sequence);
    });


    function lettersOperations(string) {
        let firstLetter = string[0];
        let lastLetter = string[string.length - 1];
        let number = Number(string.slice(1, string.length - 1));
        let sum = 0;

        if (alphabetU.includes(firstLetter)) {
            sum = number / alphabetU.indexOf(firstLetter);
        } else if (alphabetL.includes(firstLetter)) {
            sum = number * alphabetL.indexOf(firstLetter);
        }

        if (alphabetU.includes(lastLetter)) {
            sum -= alphabetU.indexOf(lastLetter);
        } else {
            sum += alphabetL.indexOf(lastLetter);
        }

        return sum;
    };
    console.log(Number.parseFloat(totalSum).toFixed(2));
}

lettersChangeNumbers('Z1Z');
lettersChangeNumbers('P34562Z q2576f   H456z');
lettersChangeNumbers('a1A');