function bossRush(input) {
    let pattern = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+ [A-Za-z]+)#/g;
    let [num, ...inputs] = input;
    inputs.forEach(line => {
        let match = pattern.exec(line);
        if (match !== null) {
            console.log(`${match[1]}, The ${match[2]}`);
            console.log(`>> Strength: ${match[1].length}`);
            console.log(`>> Armor: ${match[2].length}`);
        } else {
            console.log(`Access denied!`);
        }
        match = pattern.exec(line);
    });
}

bossRush([
    '3',
    '|PETER|:#Lead architect#',
    '|GEORGE|:#High Overseer#',
    '|ALEX|:#Assistant Game Developer#'
]);
console.log('++++++++++++++++');
bossRush([
    '3',
    '|STEFAN|:#H1gh Overseer#',
    '|IVAN|:#Master detective#',
    '|KARL|: #Marketing lead#'
]);