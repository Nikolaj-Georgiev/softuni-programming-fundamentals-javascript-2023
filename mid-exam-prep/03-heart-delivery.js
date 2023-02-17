function heartDelivery(input) {

    let workArr = [...input];
    let neighborhood = workArr.shift().split('@').map(Number);
    let command = workArr.shift();
    let cupidPosition = 0;
    let cupidDamage = 2;

    while (command !== 'Love!') {
        let jumps = command.split(' ');
        let jumpLength = Number(jumps[1]);

        if (cupidPosition + jumpLength >= neighborhood.length) {
            cupidPosition = 0;
        } else {
            cupidPosition += jumpLength;
        }

        if (neighborhood[cupidPosition] > 0) {
            neighborhood[cupidPosition] -= cupidDamage;
            if (neighborhood[cupidPosition] === 0) {
                console.log(`Place ${cupidPosition} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);
        }

        command = workArr.shift();
    }

    console.log(`Cupid's last position was ${cupidPosition}.`);

    let valentine = neighborhood.filter(x => x !== 0);

    if (valentine.length) {
        return `Cupid has failed ${valentine.length} places.`;
    } else {
        return 'Mission was successful.'
    }

}

console.log(heartDelivery(["10@10@10@2",
    "Jump 1",
    "Jump 2",
    "Love!"
]));
console.log('+++++++++++++++++++++++++++');
console.log(heartDelivery(["2@4@2",
    "Jump 2",
    "Jump 2",
    "Jump 8",
    "Jump 3",
    "Jump 1",
    "Love!"
]));