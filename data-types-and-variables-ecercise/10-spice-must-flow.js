function spiceMustFlow(startingYield) {

    let workingYield = startingYield;
    let daysCounter = 0;
    let totalMinedSpice = 0

    while (workingYield >= 100) {
        daysCounter++;
        totalMinedSpice += (workingYield - 26);
        workingYield -= 10;
    }
    if (totalMinedSpice >= 26) {
        totalMinedSpice -= 26;
    }

    console.log(daysCounter);
    console.log(totalMinedSpice);
}

spiceMustFlow(111);
spiceMustFlow(450);