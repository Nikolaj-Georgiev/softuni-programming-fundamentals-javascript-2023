function race(input) {

    let workArr = [...input];
    let listOfNames = workArr.shift().split(', ');
    let namesArr = listOfNames.map(x => {
        let newObj = {};
        newObj.name = x;
        newObj.value = 0;
        return newObj;
    });

    let line = workArr.shift();
    while (line !== 'end of race') {
        let pattern = /[A-Za-z0-9]/g;
        let match = line.match(pattern);
        let currentPlayer = '';
        let currentPlayerDistance = 0;
        match.map(x => {
            let checker = x.toLowerCase();
            if (checker.charCodeAt(0) >= 97 && checker.charCodeAt(0) <= 122) {
                currentPlayer += x;
            } else if (checker.charCodeAt(0) >= 48 && checker.charCodeAt(0) <= 57) {
                currentPlayerDistance += +x;
            }
        });
        namesArr.forEach(x => x.name === currentPlayer ? x.value += currentPlayerDistance : false);
        line = workArr.shift();
    }

    namesArr.sort((a, b) => b.value - a.value);
    console.log(`1st place: ${namesArr[0].name}
2nd place: ${namesArr[1].name}
3rd place: ${namesArr[2].name}
`);
}

race(['George, Peter, Bill, Tom',
    'G4e@55or%6g6!68e!!@ ',
    'R1@!3a$y4456@',
    'B5@i@#123ll',
    'G@e54o$r6ge#',
    '7P%et^#e5346r',
    'T$o553m&6',
    'end of race'
]);
console.log('+++++++++++++++++++++++++');
race(['Ronald, Bill, Tom, Timmy, Maggie, Michonne',
    'Mi*&^%$ch123o!#$%#nne787) ',
    '%$$B(*&&)i89ll)*&) ',
    'R**(on%^&ald992) ',
    'T(*^^%immy77) ',
    'Ma10**$#g0g0g0i0e',
    'end of race'
]);