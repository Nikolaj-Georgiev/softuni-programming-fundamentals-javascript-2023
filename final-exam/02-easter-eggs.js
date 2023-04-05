function easterEggs(input) {

    let string = input[0];
    let pattern = /[#@]+(?<color>[a-z]{3,})[#@][^0-9A-Za-z]*\/+(?<amount>[0-9]+)\/+/g;
    let match = pattern.exec(string);
    while (match !== null) {
        console.log(`You found ${match.groups.amount} ${match.groups.color} eggs!`);
        match = pattern.exec(string);
    }
}

easterEggs(['@@@@green@*/10/@yel0w@*26*#red#####//8//@limon*@*23*@@@red#*/%^&/6/@gree_een@/notnumber/###purple@@@@@*$%^&*/5/']);
console.log('++++++++++++');
easterEggs(['#@##@red@#/8/@rEd@/2/#@purple@////10/']);