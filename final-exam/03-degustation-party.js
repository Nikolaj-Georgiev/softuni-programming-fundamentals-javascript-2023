function degustationParty(input) {
    let commandsArr = input.slice(0, input.findIndex(x => x === 'Stop'));
    let unlikedMeals = 0;
    let guestList = {};
    commandsArr.map(x => x.split('-')).forEach(line => {
        let [command, name, food] = line;
        switch (command) {
            case 'Like':
                if (!guestList.hasOwnProperty(name)) {
                    guestList[name] = {};
                    if (!guestList[name].hasOwnProperty(food)) {
                        guestList[name][food] = food;
                        break;
                    }
                    break;
                }
                if (guestList[name].hasOwnProperty(food)) {
                    break;
                }
                guestList[name][food] = food;
                break;
            case 'Dislike':
                if (!guestList.hasOwnProperty(name)) {
                    console.log(`${name} is not at the party.`);
                    break;
                }
                if (!guestList[name].hasOwnProperty(food)) {
                    console.log(`${name} doesn't have the ${food} in his/her collection.`);
                    break;
                }
                delete guestList[name][food];
                console.log(`${name} doesn't like the ${food}.`);
                unlikedMeals++;
                break;
            default:
                break;
        }
    });

    let gestsArr = Object.keys(guestList);
    gestsArr.forEach(guest => {
        let meals = Object.keys(guestList[guest]);
        console.log(`${guest}: ${meals.join(', ')}`);
    });
    console.log(`Unliked meals: ${unlikedMeals}`);
}

degustationParty([
    "Like-Krisi-shrimps",
    "Like-Krisi-soup",
    "Like-Penelope-dessert",
    "Like-Misho-salad",
    "Stop"
]);
console.log('+++++++++++++++');
degustationParty([
    "Like-Krisi-shrimps",
    "Dislike-Vili-carp",
    "Dislike-Krisi-salad",
    "Stop"
]);
console.log('++++++++++++');
degustationParty([
    "Like-Katy-fish",
    "Dislike-Katy-fish",
    "Stop"
]);