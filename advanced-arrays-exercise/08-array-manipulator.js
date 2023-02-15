function arrayManipulator(arrayOne, arrayTwo) {

    let manipulatedArr = [...arrayOne];
    let actionArr = [...arrayTwo];

    for (let i = 0; i < actionArr.length; i++) {
        let commands = actionArr[i].split(' ');
        let command = commands.shift();
        let values = commands.map(Number);
        let isEnd = false;

        switch (command) {
            case 'add':
                manipulatedArr.splice(values[0], 0, values[1]);
                break;
            case 'addMany':
                for (let i = 0; i < values.length; i++) {
                    if (i === values.length - 1) {
                        break;
                    } else {
                        manipulatedArr.splice((values[0] + i), 0, values[i + 1]);
                    }
                }
                break;
            case 'contains':
                console.log(manipulatedArr.indexOf(values[0]));
                break;
            case 'remove':
                manipulatedArr.splice(values[0], 1);
                break;
            case 'shift':
                let length = values[0];
                for (let i = 0; i < length; i++) {
                    let shifted = manipulatedArr.shift();
                    manipulatedArr.push(shifted);
                }
                break;
            case 'sumPairs':
                let summingArr = [];
                for (let i = 0; i < manipulatedArr.length; i += 2) {
                    if (i === (manipulatedArr.length - 1)) {
                        summingArr.push(manipulatedArr[i]);
                    } else {
                        summingArr.push((manipulatedArr[i] + manipulatedArr[i + 1]));
                    }
                }
                manipulatedArr = summingArr.slice(0);
                break;
            case 'print':
                isEnd = true;
                break;
        }

        if (isEnd) {
            break;
        }
    }

    return `[ ${manipulatedArr.join(', ')} ]`;
}

console.log(arrayManipulator([1, 2, 4, 5, 6, 7], ['add 1 8', 'contains 1', 'contains 3', 'print']));
console.log(arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 1', 'print']));
console.log(arrayManipulator([1, 2, 3, 4, 5], ['addMany 5 9 8 7 6 5', 'contains 15', 'remove 3', 'shift 3', 'sumPairs', 'print']));