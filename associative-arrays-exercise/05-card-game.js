function cardGame(input) {

    let workInput = [...input];
    let players = {};
    let cardsPower = {
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        '10': 10,
        'J': 11,
        'Q': 12,
        'K': 13,
        'A': 14,
    };

    let cardsType = {
        'S': 4,
        'H': 3,
        'D': 2,
        'C': 1,
    }

    for (const player of workInput) {
        let [playerName, playerCardsString] = player.split(': ');
        let playerCardsArr = playerCardsString.split(', ');
        let uniqueCards = new Set(playerCardsArr);
        if (!players.hasOwnProperty(playerName)) {
            players[playerName] = uniqueCards;
        }
        (Array.from(uniqueCards)).forEach(element => {
            players[playerName].add(element);
        });
    }

    let resultObj = {};
    let playersArr = Object.entries(players);
    playersArr.forEach(player => {
        player[1] = Array.from(player[1]);
        let localArr = player[1].map(x => x.split(''));
        localArr.forEach(element => {
            if (element.length === 3) {
                element[0] = element[0] + element[1];
                element[1] = element[2];
            }
            element[0] = cardsPower[element[0]], element[1] = cardsType[element[1]];
        });

        localArr = localArr.map(x => x = x[0] * x[1]).reduce((a, c) => a + c, 0);
        resultObj[player[0]] = localArr;
    });

    for (const key in resultObj) {
        console.log(`${key}: ${resultObj[key]}`);
    }
}

cardGame([
    'Peter: 2C, 4H, 9H, AS, QS',
    'Tomas: 3H, 10S, JC, KD, 5S, 10S',
    'Andrea: QH, QC, QS, QD',
    'Tomas: 6H, 7S, KC, KD, 5S, 10C',
    'Andrea: QH, QC, JS, JD, JC',
    'Peter: JD, JD, JD, JD, JD, JD'
]);
console.log('+++++++++++++++++');
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD'
]);