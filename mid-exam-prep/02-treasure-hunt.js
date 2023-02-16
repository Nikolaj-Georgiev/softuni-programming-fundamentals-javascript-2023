function treasureHunt(input) {

    let workArr = [...input];
    let treasureChest = workArr.shift().split('|');
    let tokens = workArr.shift().split(' ');

    while (tokens[0] !== 'Yohoho!') {
        let command = tokens.shift();

        switch (command) {
            case 'Loot':
                loot(treasureChest, tokens);
                // console.log(treasureChest);
                break;
            case 'Drop':
                drop(treasureChest, Number(tokens[0]));
                // console.log(treasureChest);
                break;
            case 'Steal':
                let stolenItems = steal(treasureChest, Number(tokens[0]));
                console.log(stolenItems.join(', '));
                // console.log(treasureChest);
                break;
        }

        tokens = workArr.shift().split(' ');
    }

    if (treasureChest.length === 0) {
        return 'Failed treasure hunt.';
    } else {
        return `Average treasure gain: ${average(treasureChest).toFixed(2)} pirate credits.`
    }

    function loot(chest, items) {
        for (let i = 0; i < items.length; i++) {
            let element = items[i];
            if (includes(element, chest)) {
                continue;
            } else {
                chest.unshift(element);
            }
        }
    }

    function drop(chest, index) {
        if (indexChecker(index, chest)) {
            let element = chest[index];
            chest.splice(index, 1);
            chest.push(element);
        }
    }

    function steal(chest, number) {
        if (chest.length === 0) {
            return
        }
        let stolen = chest.splice(-number);
        return stolen;
    }

    function includes(element, array) {
        let result = false;
        if (array.includes(element)) {
            result = true;
            return result;
        } else {
            return result;
        }
    }

    function indexChecker(index, arr) {
        let result = false;
        if (index < 0 || index > arr.length - 1) {
            return result;
        } else {
            result = true;
            return result;
        }
    }

    function average(chest) {
        let avg = chest.reduce((acc, current) => acc + current.length, 0);
        avg = avg / chest.length;
        return avg;
    }

}

console.log(treasureHunt(["Gold|Silver|Bronze|Medallion|Cup",
    "Loot Wood Gold Coins",
    "Loot Silver Pistol",
    "Drop 3",
    "Steal 3",
    "Yohoho!"
]));
console.log('+++++++++++++++++++++++++++++++++++++++');
console.log(treasureHunt(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"
]));