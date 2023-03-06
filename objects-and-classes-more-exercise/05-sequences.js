function sequences(input) {
    let whatAreYou = {};
    whatAreYou.arr = [];
    whatAreYou.arr.push(JSON.parse(input[0]).sort((a, b) => b - a));

    for (let i = 1; i < input.length; i++) {
        let localArr = JSON.parse(input[i]).sort((a, b) => b - a);
        let checker = localArr[0];
        let internalChecker = whatAreYou.arr.find(el => el.find(x => x === checker));
        if (!internalChecker) {
            whatAreYou.arr.push(localArr);
        }
        // console.log(internalChecker);
    }

    whatAreYou.arr = whatAreYou.arr.map(JSON.stringify);
    [...new Set(whatAreYou.arr)].map(JSON.parse).sort((a, b) => a.length - b.length).forEach(arr => {
        console.log(`[${arr.join(', ')}]`);
    })
}

sequences(["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"
]);