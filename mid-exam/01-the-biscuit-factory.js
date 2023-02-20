function biscuitFactory(input) {

    let days = 30;
    let biscuitsPerDay = Number(input[0]);
    let workers = Number(input[1]);
    let competitorBiscuits = Number(input[2]);
    let producedBiscuits = 0;
    let dailyProduction = biscuitsPerDay * workers;

    for (let i = 1; i <= days; i++) {
        producedBiscuits += dailyProduction;
        if (i % 3 === 0) {
            producedBiscuits -= Math.floor(dailyProduction * 0.25);
        }
    }

    let percentage = Math.abs((producedBiscuits - competitorBiscuits) / competitorBiscuits) * 100;

    if (producedBiscuits > competitorBiscuits) {
        return `You have produced ${producedBiscuits} biscuits for the past month.\nYou produce ${percentage.toFixed(2)} percent more biscuits.`
    } else {
        return `You have produced ${producedBiscuits} biscuits for the past month.\nYou produce ${percentage.toFixed(2)} percent less biscuits.`
    }

}

console.log(biscuitFactory(["78",
    "8",
    "16000"
]));
console.log('++++++++++++++++++++++++');
console.log(biscuitFactory(["65",
    "12",
    "26000"
]));
console.log('+++++++++++++++++++++++');
console.log(biscuitFactory(["163",
    "16",
    "67020"
]));