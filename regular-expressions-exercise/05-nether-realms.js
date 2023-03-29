function netherRealms(string) {
    const matches = [...string.matchAll(/(?<name>[^ ,\s]+)\s*/g)];
    let listOfDemons = [];
    for (const currentMatch of matches) {
        let demonName = currentMatch.groups.name;
        let health = demonName.match(/[^0-9*+-.\/\s]+?/g).reduce((acc, cur) => acc + cur.charCodeAt(0), 0);
        let initialDamageElements = demonName.match(/[-+]?[\d+\.]+/g);
        let damage = 0;
        if (initialDamageElements !== null) {
            damage = initialDamageElements.reduce((acc, cur) => acc + Number(cur), 0);
        }

        let tempDemonName = demonName.match(/[*\/]/g);
        if (tempDemonName !== null) {
            for (const ch of tempDemonName) {
                damage = (ch === '*') ? damage * 2 : damage / 2;
            }
        }

        listOfDemons.push({ demonName, health, damage });
    }

    listOfDemons.sort((a, b) => a.demonName.localeCompare(b.demonName)).forEach(demonObj => {
        console.log(`${demonObj.demonName} - ${demonObj.health} health, ${demonObj.damage.toFixed(2)} damage`);
    });
}

netherRealms('M3ph-0.5s-0.5t0.0**');
console.log('++++++++++++++++');
netherRealms('M3ph1st0**, Azazel');
console.log('+++++++++++++++++');
netherRealms('Gos/ho');
netherRealms('m15*/c-5.0');