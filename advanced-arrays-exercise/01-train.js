function train(array) {

    let workArr = [...array];

    let trainArr = workArr[0].split(' ').map(Number);
    let maxCapacity = workArr[1].split(' ').map(Number);
    let commandsArr = workArr.slice(2);

    for (let i = 0; i < commandsArr.length; i++) {
        let command = commandsArr[i].split(' ');
        if (command[0] === 'Add') {
            trainArr.push(Number(command[1]));
        } else {
            for (let j = 0; j < trainArr.length; j++) {
                let localElement = trainArr[j] + Number(command[0]);
                if (localElement <= maxCapacity) {
                    trainArr[j] = localElement;
                    break;
                }
            }
        }
    }

    return trainArr.join(' ');
}

console.log(train(['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]));
console.log('---------------------------');
console.log(train(['0 0 0 10 2 4',
    '10',
    'Add 10',
    '10',
    '10',
    '10',
    '8',
    '6'
]));