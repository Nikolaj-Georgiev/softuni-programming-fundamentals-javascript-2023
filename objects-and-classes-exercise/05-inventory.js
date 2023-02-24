function inventory(input) {

    let inputArr = input.map(x => x.split(' / '));
    let objArr = [];

    for (let ar of inputArr) {
        let [heroName, heroLvl, heroItems] = ar;
        let newObj = { Hero: heroName, level: Number(heroLvl), items: heroItems };
        objArr.push(newObj);
    }

    objArr = objArr.sort((a, b) => a.level - b.level);

    for (let obj of objArr) {
        let keys = Object.keys(obj);
        console.log(`${keys[0]}: ${obj[keys[0]]}`);
        console.log(`${keys[1]} => ${obj[keys[1]]}`);
        console.log(`${keys[2]} => ${obj[keys[2]]}`);
    }

}

inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);
console.log('+++++++++++++++++++');
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);