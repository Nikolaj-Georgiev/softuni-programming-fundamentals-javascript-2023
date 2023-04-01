function heroes(input) {
    class Hero {
        constructor(name, hp, mp) {
            this.name = name;
            this.hp = Number(hp);
            this.mp = Number(mp);
        }

        castSpell(neededMp, spellName) {
            let spellchecker = this.mp - neededMp;
            if (spellchecker >= 0) {
                this.mp -= neededMp;
                console.log(`${this.name} has successfully cast ${spellName} and now has ${this.mp} MP!`);
                return;
            }
            console.log(`${this.name} does not have enough MP to cast ${spellName}!`);
        }

        takeDamage(damage, attacker) {
            let hpChecker = this.hp - damage;
            if (hpChecker > 0) {
                this.hp -= damage;
                console.log(`${this.name} was hit for ${damage} HP by ${attacker} and now has ${this.hp} HP left!`);
                return;
            }
            console.log(`${this.name} has been killed by ${attacker}!`);
            delete heroesCollection[this.name];
        }

        recharge(amount) {
            let rechargeAmount = Math.min((200 - this.mp), amount);
            this.mp += rechargeAmount;
            console.log(`${this.name} recharged for ${rechargeAmount} MP!`);
        }

        heal(amount) {
            let rechargeAmount = Math.min((100 - this.hp), amount);
            this.hp += rechargeAmount;
            console.log(`${this.name} healed for ${rechargeAmount} HP!`);
        }

        toConsole() {
            console.log(`${this.name}\n  HP: ${this.hp}\n  MP: ${this.mp}`);
        }
    }

    let heroesCollection = {};
    input.slice(1, (Number(input[0]) + 1)).map(hero => hero.split(' ')).forEach(line => {
        let [name, hp, mp] = line;
        heroesCollection[name] = new Hero(name, hp, mp);
    });

    input.slice((Number(input[0]) + 1), input.length - 1).forEach(commandLine => {
        let [command, name, ...tokens] = commandLine.split(' - ');
        switch (command) {
            case 'CastSpell':
                heroesCollection[name].castSpell(Number(tokens[0]), tokens[1]);
                break;
            case 'TakeDamage':
                heroesCollection[name].takeDamage(Number(tokens[0]), tokens[1]);
                break;
            case 'Recharge':
                heroesCollection[name].recharge(Number(tokens[0]));
                break;
            case 'Heal':
                heroesCollection[name].heal(Number(tokens[0]));
                break;
        }
    });

    for (const key in heroesCollection) heroesCollection[key].toConsole();
}

heroes([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
]);
console.log('+++++++++++++++++++++');
heroes(['4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]);