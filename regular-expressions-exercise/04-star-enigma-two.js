function starEnigma(input) {
    const attackedPlanets = new Set();
    const destroyedPlanets = new Set();

    const [, ...lines] = input;
    for (const line of lines) {
        const keyWordsArr = line.match(/[star]/gi) || [];
        const keyWordsCount = keyWordsArr.length;

        const newMessage = Array.from(line, (char) =>
            String.fromCharCode(char.charCodeAt(0) - keyWordsCount)
        ).join("");

        const pattern = /@(?<planetName>[A-Za-z]+)[^!\-:@>]*:(?<population>\d+)[^!\-:@>]*!(?<attackType>[AD])![^!\-:@>]*->(?<soldiersCount>\d+)/g;
        const match = pattern.exec(newMessage);
        if (match === null) continue;

        const { planetName, attackType } = match.groups;
        if (attackType === "A") {
            attackedPlanets.add(planetName);
        } else {
            destroyedPlanets.add(planetName);
        }
    }

    console.log(`Attacked planets: ${attackedPlanets.size}`);
    [...attackedPlanets]
    .sort((a, b) => a.localeCompare(b))
        .forEach((planet) => console.log(`-> ${planet}`));
    console.log(`Destroyed planets: ${destroyedPlanets.size}`);
    [...destroyedPlanets]
    .sort((a, b) => a.localeCompare(b))
        .forEach((planet) => console.log(`-> ${planet}`));
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