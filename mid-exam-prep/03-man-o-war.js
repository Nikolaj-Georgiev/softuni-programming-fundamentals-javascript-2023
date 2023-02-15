function manOWar(arr) {

    let workArr = arr.slice(0).map(x => String(x));
    let pirateShipArr = workArr.shift().split('>').map(Number);
    let manOWarShipArr = workArr.shift().split('>').map(Number);
    let sectionMaxHp = Number(workArr.shift());
    let isSunk = false;

    let index = 0;
    while (workArr[index] !== 'Retire') {
        let currentCommand = workArr.shift().split(' ');
        let command = currentCommand.shift();
        let values = currentCommand.map(x => Number(x));

        switch (command) {
            case 'Fire':
                isSunk = fire(manOWarShipArr, values[0], values[1]);
                break;
            case 'Defend':
                isSunk = defend(pirateShipArr, values[0], values[1], values[2]);
                break;
            case 'Repair':
                repair(pirateShipArr, values[0], values[1], sectionMaxHp);
                break;
            case 'Status':
                let countSections = pirateShipArr.filter(x => x < (sectionMaxHp * 0.2));
                console.log(`${countSections.length} sections need repair.`);
                break;
        }

        if (isSunk) {
            break;
        }


    }

    let pirateShipSum = pirateShipArr.reduce((start, current) => start + current, 0);
    let manOWarShipSum = manOWarShipArr.reduce((start, current) => start + current, 0);

    if (!isSunk) {
        return `Pirate ship status: ${pirateShipSum}\nWarship status: ${manOWarShipSum}`
    }

    function fire(shipArr, index, damage) {
        if (index >= 0 && index <= shipArr.length) {
            let damagedSection = shipArr[index] - damage;
            if (damagedSection <= 0) {
                console.log(`You won! The enemy ship has sunken.`);
                isSunk = true;
                return isSunk;
            } else {
                shipArr.splice(index, 1, damagedSection);
            }
        }
    }

    function defend(shipArr, startIndex, endIndex, damage) {
        if ((startIndex >= 0 && startIndex <= shipArr.length - 1) && (endIndex >= 0 && endIndex <= shipArr.length - 1)) {
            for (let i = startIndex; i <= endIndex; i++) {
                let damagedSection = shipArr[i] - damage;
                if (damagedSection <= 0) {
                    console.log(`You lost! The pirate ship has sunken.`);
                    isSunk = true;
                    return isSunk;
                } else {
                    shipArr[i] = damagedSection;
                }
            }
        }
    }

    function repair(shipArr, index, health, maxHealth) {
        if (index >= 0 && index <= shipArr.length) {
            let missingHealth = maxHealth - shipArr[index];
            let healedFor = Math.min(missingHealth, health);
            let newHp = shipArr[index] + healedFor;
            shipArr[index] = newHp;
        }
    }

}

console.log(manOWar(["12>13>11>20>66",
    "12>22>33>44>55>32>18",
    "70",
    "Fire 2 11",
    "Fire 8 100",
    "Defend 3 6 11",
    "Defend 0 3 5",
    "Repair 1 33",
    "Status",
    "Retire"
]));
console.log('++++++++++++++++++++++++++++++++');
console.log(manOWar(["2>3>4>5>2",
    "6>7>8>9>10>11",
    "20",
    "Status",
    "Fire 2 3",
    "Defend 0 4 11",
    "Repair 3 18",
    "Retire"
]));