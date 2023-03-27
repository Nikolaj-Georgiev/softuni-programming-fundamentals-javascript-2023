function race(input) {

    let [listOfNames, ...workArr] = input;
    let namesArr = listOfNames.split(', ').reduce((acc, name) => {
        acc.push({ name, value: 0 });
        return acc;
    }, []);

    for (const line of workArr) {
        let pattern = /[A-Za-z0-9]/g;
        let match = line.match(pattern);
        let currentPlayer = '';
        let currentPlayerDistance = 0;
        for (const char of match) {
            let checker = char.toLowerCase();
            if (checker.charCodeAt(0) >= 97 && checker.charCodeAt(0) <= 122) {
                currentPlayer += char;
            } else if (checker.charCodeAt(0) >= 48 && checker.charCodeAt(0) <= 57) {
                currentPlayerDistance += +char;
            }
        }
        // namesArr.forEach(x => x.name === currentPlayer ? x.value += currentPlayerDistance : false);
        for (const player of namesArr) {
            if (player.name === currentPlayer) {
                player.value += currentPlayerDistance;
                break;
            }
        }
    }

    namesArr.sort((a, b) => b.value - a.value);
    console.log(`1st place: ${namesArr[0].name}
2nd place: ${namesArr[1].name}
3rd place: ${namesArr[2].name}
`);
}

// function race(input) {
//     let [listOfNames, ...workArr] = input;
//     let namesArr = listOfNames.split(', ').reduce((acc, name) => {
//         acc.push({ name, value: 0 });
//         return acc;
//     }, []);

//     for (let line of workArr) {
//         let currentPlayer = '';
//         let currentPlayerDistance = 0;
//         for (let char of line) {
//             let checker = char.toLowerCase();
//             if (checker.charCodeAt(0) >= 97 && checker.charCodeAt(0) <= 122) {
//                 currentPlayer += char;
//             } else if (checker.charCodeAt(0) >= 48 && checker.charCodeAt(0) <= 57) {
//                 currentPlayerDistance += +char;
//             }
//         }
//         for (let player of namesArr) {
//             if (player.name === currentPlayer) {
//                 player.value += currentPlayerDistance;
//                 break;
//             }
//         }
//     }

//     namesArr.sort((a, b) => b.value - a.value);
//     console.log(`1st place: ${namesArr[0].name}
// 2nd place: ${namesArr[1].name}
// 3rd place: ${namesArr[2].name}
// `);
// }
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