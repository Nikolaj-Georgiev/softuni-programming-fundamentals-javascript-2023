function armies(input) {

    let armiesObj = {};

    input.forEach(element => {
        if (element.includes('arrives')) {
            let leaderName = element.substring(0, (element.indexOf('arrives') - 1))
            if (!armiesObj.hasOwnProperty(leaderName)) {
                armiesObj[leaderName] = { totalArmy: 0 };
                console.log();
            }
        } else if (element.includes('defeated')) {
            let defeatedLeader = element.substring(0, (element.indexOf('defeated') - 1))
            if (armiesObj.hasOwnProperty(defeatedLeader)) {
                delete armiesObj[defeatedLeader];
            }
        } else if (element.includes(': ')) {
            let [leader, army] = element.split(': ');
            if (armiesObj.hasOwnProperty(leader)) {
                let [armyName, armyCount] = army.split(', ');
                armiesObj[leader][armyName] = Number(armyCount);
                armiesObj[leader].totalArmy += Number(armyCount);
            };

        } else if (element.includes(" + ")) {
            let [armyName, armyCount] = element.split(' + ');
            armyCount = Number(armyCount);
            Object.entries(armiesObj).map(element => {
                if (element[1].hasOwnProperty(armyName)) {
                    element[1][armyName] += armyCount;
                    element[1].totalArmy += armyCount;
                }
            });
        }
    });

    Object.entries(armiesObj)
        .sort((a, b) => b[1].totalArmy - a[1].totalArmy)
        .forEach(element => {
            console.log(`${element[0]}: ${element[1].totalArmy}`);
            Object.entries(element[1])
                .filter(x => x[0] !== 'totalArmy')
                .sort((a, b) => b[1] - a[1])
                .forEach(army => console.log(`>>> ${army[0]} - ${army[1]}`));
        });
}

armies([
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000',
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
]);
console.log('+++++++++++++++++');
armies(['Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423'
]);