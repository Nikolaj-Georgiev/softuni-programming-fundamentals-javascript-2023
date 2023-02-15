function muOnline(input) {
    let workArr = String(input).split('|');
    let journeyLength = workArr.length;
    let health = 100;
    let bitcoins = 0;
    let isDead = false;

    for (let i = 0; i < journeyLength; i++) {
        let room = workArr.shift().split(' ');
        let command = room[0];
        let value = Number(room[1]);

        switch (command) {
            case 'potion':
                health = potion(health, value);
                break;
            case 'chest':
                bitcoins += value;
                console.log(`You found ${value} bitcoins.`);
                break;
            default:
                health = monster(command, value, health);
                break;
        }

        if (isDead) {
            console.log(`Best room: ${i + 1}`);
            break;
        }
    }

    if (!isDead) {
        return `You've made it!\nBitcoins: ${bitcoins}\nHealth: ${health}`;
    }

    function potion(health, potion) {
        let missingHealth = 100 - health;
        let healedFor = Math.min(missingHealth, potion);
        health += healedFor;
        console.log(`You healed for ${healedFor} hp.`);
        console.log(`Current health: ${health} hp.`);

        return health;
    }

    function monster(monster, damage, health) {
        health -= damage;
        if (health <= 0) {
            console.log(`You died! Killed by ${monster}.`);
            isDead = true;
        } else {
            console.log(`You slayed ${monster}.`);
        }

        return health;
    }

}

console.log(muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"));
console.log('++++++++++++++++++++++++++++++++++++++');
console.log(muOnline("cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"));