function experienceGaining(input) {

    let workArr = [...input].map(Number);
    let neededExperience = workArr.shift();
    workArr.shift();
    let battleCount = 0;
    let experience = 0;

    for (let i = 0; i < workArr.length; i++) {
        battleCount++;
        let currentBattle = workArr[i];
        experience += currentBattle;
        if (battleCount % 3 === 0) {
            experience += currentBattle * 0.15;
        }

        if (battleCount % 5 === 0) {
            experience -= currentBattle * 0.1;
        }

        if (battleCount % 15 === 0) {
            experience += currentBattle * 0.05;
        }

        if (experience >= neededExperience) {
            break;
        }

    }

    if (experience >= neededExperience) {
        return `Player successfully collected his needed experience for ${battleCount} battles.`;
    } else {
        return `Player was not able to collect the needed experience, ${(neededExperience - experience).toFixed(2)} more needed.`
    }
}

console.log(experienceGaining([
    500, 5, 50, 100,
    200, 100, 30
]))
console.log('+++++++++++++++++++++');
console.log(experienceGaining([
    500, 5, 50, 100,
    200, 100, 20
]));
console.log('+++++++++++++++++++++');
console.log(experienceGaining([
    400, 5, 50, 100,
    200, 100, 20
]));