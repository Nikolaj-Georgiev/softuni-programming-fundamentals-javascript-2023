function memoryGame(input) {

    let workArr = [...input];
    let sequenceArr = workArr.shift().split(' ');
    let command = workArr.shift();
    let counter = 0;

    while (command !== 'end') {
        if (!sequenceArr.length) {
            break;
        }
        counter++;
        let indexes = command.split(' ');
        let firstIndex = Number(indexes[0]);
        let secondIndex = Number(indexes[1]);
        let firsElement = sequenceArr[firstIndex];
        let secondElement = sequenceArr[secondIndex];
        if ((firstIndex === secondIndex) ||
            (firstIndex < 0 || firstIndex > sequenceArr.length - 1) ||
            (secondIndex < 0 || secondIndex > sequenceArr.length - 1)) {
            console.log("Invalid input! Adding additional elements to the board");
            sequenceArr.splice(sequenceArr.length / 2, 0, `-${counter}a`, `-${counter}a`);
            command = workArr.shift();
            continue;
        }

        if (firsElement === secondElement) {
            console.log(`Congrats! You have found matching elements - ${firsElement}!`);
            sequenceArr = sequenceArr.filter(x => x !== firsElement);
        } else {
            console.log('Try again!');
        }

        command = workArr.shift();
    }

    if (sequenceArr.length) {
        return `Sorry you lose :(\n${sequenceArr.join(' ')}`;
    } else {
        return `You have won in ${counter} turns!`;
    }
}

console.log(memoryGame(['1 1', '1 0', 'end']));
// console.log('+++++++++++++++++++++++++++++++');
// console.log(memoryGame(['a 2 4 a 2 4', '0 3', '0 2', '0 1', '0 1', 'end']));
// console.log('+++++++++++++++++++++++++++++++++');
// console.log(memoryGame(['a 2 4 a 2 4', '4 0', '0 2', '0 1', '0 1', 'end']));