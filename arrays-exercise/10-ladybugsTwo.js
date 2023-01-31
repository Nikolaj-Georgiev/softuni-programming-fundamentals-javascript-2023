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

    let commandArr = input.slice(2);

    for (let l = 0; l < commandArr.length; l++) {
        let commands = commandArr[l].split(' ');
        let position = Number(commands[0]);
        let direction = commands[1];
        let flightLength = Number(commands[2]);

        if (position < 0 || position >= flyField.length || flyField[position] !== 1) {
            continue;
        }

        flyField[position] = 0;

        switch (direction) {
            case 'right':
                let rightIndex = position + flightLength;
                if (rightIndex < flyField.length && rightIndex >= 0) {
                    if (flyField[rightIndex] !== 1) {
                        flyField[rightIndex] = 1;
                    } else {
                        rightIndex++;
                        if (rightIndex < flyField.length && rightIndex >= 0) {
                            flyField[rightIndex] = 1;
                        }
                    }
                }
                break;
            case 'left':
                let leftIndex = position - flightLength;
                if (leftIndex >= 0 && leftIndex < flyField.length) {
                    if (flyField[leftIndex] !== 1) {
                        flyField[leftIndex] = 1;
                    } else {
                        leftIndex--;
                        if (leftIndex >= 0 && leftIndex < flyField.length) {
                            flyField[leftIndex] = 1;
                        }
                    }
                }
                break;
        }
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