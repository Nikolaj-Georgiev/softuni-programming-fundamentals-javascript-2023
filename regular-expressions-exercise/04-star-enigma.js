function starEnigma(input) {
    let attackedPlanets = { count: 0, planets: [] };
    let destroyedPlanets = { count: 0, planets: [] };

    let [, ...lines] = input;
    for (const line of lines) {
        let keyWordsArr = line.match(/[star]/gi) || [];
        let keyWordsCount = keyWordsArr.length;
        const newMessage = Array.from(line, (char) =>
            String.fromCharCode(char.charCodeAt(0) - keyWordsCount)
        ).join("");
        let pattern = /@(?<planetName>[A-Za-z]+)[^!\-:@>]*:(?<population>\d+)[^!\-:@>]*!(?<attackType>[AD])![^!\-:@>]*->(?<soldiersCount>\d+)/g;
        let match = pattern.exec(newMessage);
        if (match === null) continue;
        if (match.groups.attackType === 'A') {
            attackedPlanets.count++;
            attackedPlanets.planets.push(match.groups.planetName);
        } else {
            destroyedPlanets.count++;
            destroyedPlanets.planets.push(match.groups.planetName);
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.count}`);
    let planetsAtt = attackedPlanets.planets;
    planetsAtt.sort((a, b) => a.localeCompare(b)).map(x => console.log(`-> ${x}`));
    console.log(`Destroyed planets: ${destroyedPlanets.count}`);
    let planetsDestr = destroyedPlanets.planets;
    planetsDestr.sort((a, b) => a.localeCompare(b)).map(x => console.log(`-> ${x}`));
}

starEnigma(['2',
    'STCDoghudd4=63333$D$0A53333',
    'EHfsytsnhf?8555&I&2C9555SR'
]);
console.log('+++++++++++');
starEnigma(['3',
    "tt(''DGsvywgerx>6444444444%H%1B9444",
    'GQhrr|A977777(H(TTTT',
    'EHfsytsnhf?8555&I&2C9555SR'
]);