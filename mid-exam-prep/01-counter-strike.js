function counterStrike(input) {

    let workArr = [...input];

    let energy = Number(workArr.shift());
    let command = workArr.shift();
    let counter = 0;

    while (command !== 'End of battle') {
        let enemyDistance = Number(command);
        if ((energy - enemyDistance) >= 0) {
            energy -= enemyDistance;
        } else {
            return `Not enough energy! Game ends with ${counter} won battles and ${energy} energy`;
        }
        counter++;
        if (counter % 3 === 0) {
            energy += counter;
        }

        command = workArr.shift();
    }

    if (command === 'End of battle') {
        return `Won battles: ${counter}. Energy left: ${energy}`
    }

}

console.log(counterStrike(["100",
    "10",
    "10",
    "10",
    "1",
    "2",
    "3",
    "73",
    "10"
]));
console.log('++++++++++++++++++++');
console.log(counterStrike(["200",
    "54",
    "14",
    "28",
    "13",
    "End of battle"
]));