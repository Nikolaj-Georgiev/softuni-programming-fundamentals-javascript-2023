function spaceTravel(input) {

    let workArr = [...input];
    let travelRoute = workArr.shift().split('||');
    let fuel = Number(workArr.shift());
    let ammo = Number(workArr.shift())

    let command = travelRoute.shift();
    let flag = false;

    while (command !== 'Titan') {
        let currentLine = command.split(' ');
        let encounter = currentLine.shift();
        let value = Number(currentLine.shift());

        switch (encounter) {
            case 'Travel':
                travel(value, fuel);
                fuel -= value;
                if (fuel < 0) {
                    flag = true;
                }
                break;
            case 'Enemy':
                enemy(value, ammo, fuel);
                if (ammo - value >= 0) {
                    ammo -= value;
                } else {
                    if (fuel - (value * 2) >= 0) {
                        fuel -= (value * 2);
                    } else {
                        flag = true;
                    }
                }
                break;
            case 'Repair':
                ammo += (value * 2);
                console.log(`Ammunitions added: ${value * 2}.`);
                fuel += value;
                console.log(`Fuel added: ${value}.`);
                break;

        }
        if (flag) {
            break;
        }


        command = travelRoute.shift();
    }

    if (command === 'Titan') {
        return `You have reached Titan, all passengers are safe.`;
    }

    function travel(distance, fuel) {
        if (fuel - distance >= 0) {
            console.log(`The spaceship travelled ${distance} light-years.`);
        } else {
            console.log('Mission failed.');
        }
    }

    function enemy(enemy, ammo, fuel) {
        if (ammo >= enemy) {
            console.log(`An enemy with ${enemy} armour is defeated.`);
        } else {
            if (enemy * 2 <= fuel) {
                console.log(`An enemy with ${enemy} armour is outmaneuvered.`);
            } else {
                console.log(`Mission failed.`);
            }
        }
    }
}

console.log(spaceTravel(['Travel 10||Enemy 30||Repair 15||Titan', '50', '80']));
console.log('++++++++++++++++++++++++');
console.log(spaceTravel(['Travel 20||Enemy 50||Enemy 50||Enemy 10||Repair 15||Enemy 50||Titan', '60', '100']));