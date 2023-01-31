function dungeonestDark(input) {

    let roomsArr = input[0].split('|');

    let health = 100;
    let coins = 0;

    let index = 0;
    isDead = false;

    while (index < roomsArr.length) {
        let commandArr = roomsArr[index].split(' ');
        let encounter = commandArr[0];
        let value = Number(commandArr[1]);

        switch (encounter) {
            case 'potion':
                if ((health + value) > 100) {
                    value = 100 - health;
                    health = 100;
                } else {
                    health = health + value;
                }
                console.log(`You healed for ${value} hp.`);
                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += value;
                console.log(`You found ${value} coins.`);
                break;
            default:
                if ((health - value) <= 0) {
                    console.log(`You died! Killed by ${encounter}.`);
                    console.log(`Best room: ${index + 1}`);
                    isDead = true;
                } else {
                    health = health - value;
                    console.log(`You slayed ${encounter}.`);
                }
                break;
        }
        if (isDead) {
            break;
        }
        index++;
    }

    if (!isDead) {
        console.log("You've made it!");
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}

// dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
// console.log('--------------------------------------------------------');
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);