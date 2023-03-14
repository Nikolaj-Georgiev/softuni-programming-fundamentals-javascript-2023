function aMinerTask(input) {

    let minerObject = {};

    for (let i = 0; i < input.length; i += 2) {
        let material = input[i];
        let quantity = Number(input[i + 1]);

        if (!(material in minerObject)) {
            minerObject[material] = 0;
        }

        minerObject[material] += quantity;
    }

    Object.entries(minerObject).forEach(kvp => {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    });
}

aMinerTask([
    'Gold',
    '155',
    'Silver',
    '10',
    'Copper',
    '17'
]);
console.log('++++++++++++++++++++');
aMinerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
]);