function houseParty(array) {

    let namesArr = [];

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');
        if (command.length === 3) {
            if (!namesArr.includes(command[0])) {
                namesArr.push(command[0]);
            } else {
                console.log(`${command[0]} is already in the list!`);
            }
        } else {
            if (namesArr.includes(command[0])) {
                let index = namesArr.indexOf(command[0]);
                namesArr.splice(index, 1);
            } else {
                console.log(`${command[0]} is not in the list!`);
            }
        }
    }

    return namesArr.join('\n');
}

console.log(houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]));
console.log('---------------------------');
console.log(houseParty(['Tom is going!',
    'Annie is going!',
    'Tom is going!',
    'Garry is going!',
    'Jerry is going!'
]));