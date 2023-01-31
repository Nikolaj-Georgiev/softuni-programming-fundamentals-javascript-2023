function ladybugs(input) {

    let flyField = [];
    for (let i = 0; i < input[0]; i++) {
        flyField.push(0);
    }

    let initialLadybugsArr = input[1].split(' ');

    for (let j = 0; j < initialLadybugsArr.length; j++) {
        let ladybug = Number(initialLadybugsArr[j]);
        if (ladybug >= 0 && ladybug < flyField.length) {
            flyField[ladybug] = 1;
        }
    }

    let commandArr = [];
    for (let k = 2; k < input.length; k++) {
        const element = input[k];
        commandArr.push(element);

    }
    let index = 0;

    while (index < commandArr.length) {
        let commands = commandArr[index].split(' ');
        let position = Number(commands[0]);
        let direction = commands[1];
        let flightLength = Number(commands[2]);

        if ((position < 0 || position >= flyField.length) || flyField[position] === 0) {
            index++;
            continue;
        }

        switch (direction) {
            case 'right':
                let rightIndex = position + flightLength;
                while (rightIndex < flyField.length && rightIndex >= 0) {
                    if (flyField[rightIndex] === 0) {
                        flyField[rightIndex] = 1;
                        flyField[position] = 0;
                        break;
                    } else {
                        rightIndex++;
                    }
                }

                if (rightIndex >= flyField.length || rightIndex < 0) {
                    flyField[position] = 0;
                }
                break;
            case 'left':
                let leftIndex = position - flightLength;
                while (leftIndex >= 0 && leftIndex < flyField.length) {
                    if (flyField[leftIndex] === 0) {
                        flyField[leftIndex] = 1;
                        flyField[position] = 0;
                        break;
                    } else {
                        leftIndex--;
                    }
                }

                if (leftIndex < 0 || leftIndex >= flyField.length) {
                    flyField[position] = 0;
                }
                break;
        }

        index++;
    }

    console.log(flyField.join(' '));
}

ladybugs([3,
    '0 1',
    '0 right 1',
    '2 right 1'
]);
console.log('--------');
ladybugs([3,
    '0 1 2',
    '0 right 0',
    '1 right 1',
    '2 left -3'
]);
console.log('------------');
ladybugs([5,
    '3',
    '3 left 2',
    '1 left -2'
]);