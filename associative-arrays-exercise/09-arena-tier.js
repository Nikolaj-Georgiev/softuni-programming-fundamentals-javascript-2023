function arenaTier(input) {

    let workInput = [...input];
    const gladiators = {};
    const skill = 'skill';
    const tech = 'technique';
    let command = workInput.shift();

    while (command !== 'Ave Cesar') {
        if (command.includes('->')) {
            let [name, technique, skillPower] = command.split(' -> ');
            skillPower = Number(skillPower);

            if (!gladiators.hasOwnProperty(name)) {
                gladiators[name] = {};
                gladiators[name][skill] = 0;
            }

            if (!gladiators[name].hasOwnProperty(tech)) {
                gladiators[name][tech] = {};
            }

            if (!gladiators[name][tech].hasOwnProperty(technique)) {
                gladiators[name][tech][technique] = skillPower;
                gladiators[name][skill] += skillPower;
            }

            if (gladiators[name][tech][technique] < skillPower) {
                gladiators[name][skill] += (skillPower - gladiators[name][tech][technique]);
                gladiators[name][tech][technique] = skillPower;
            }

        } else {
            let [firstGlady, secondGlady] = command.split(' vs ');

            if (gladiators.hasOwnProperty(firstGlady) && gladiators.hasOwnProperty(secondGlady)) {
                let firstGladyTechnique = Object.keys(gladiators[firstGlady][tech]);
                let secondGladyTechnique = Object.keys(gladiators[secondGlady][tech]);
                let isBattle = false;

                firstGladyTechnique.forEach(technique => {
                    if (secondGladyTechnique.includes(technique)) {
                        isBattle = true;
                    }
                });

                if (isBattle) {
                    if (gladiators[firstGlady][skill] > gladiators[secondGlady][skill]) {
                        delete gladiators[secondGlady];
                    } else if (gladiators[secondGlady][skill] > gladiators[firstGlady][skill]) {
                        delete gladiators[firstGlady];
                    }
                }
            }
        }

        command = workInput.shift();
    }

    let gladiatorNames = Object.keys(gladiators)
        .sort((gladiatorOne, gladiatorTwo) => gladiators[gladiatorTwo][skill] - gladiators[gladiatorOne][skill] || (gladiatorOne).localeCompare(gladiatorTwo));

    for (let key of gladiatorNames) {
        console.log(`${key}: ${gladiators[key][skill]} skill`);
        let gladiatorTechniques = Object.keys(gladiators[key][tech])
            .sort((techOne, techTwo) => gladiators[key][tech][techTwo] - gladiators[key][tech][techOne] || (techOne).localeCompare(techTwo));

        for (let technique of gladiatorTechniques) {
            console.log(`- ${technique} <!> ${gladiators[key][tech][technique]}`);
        }
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250',
    'Ave Cesar'
]);
console.log('++++++++++++');
arenaTier([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 0',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 150',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);