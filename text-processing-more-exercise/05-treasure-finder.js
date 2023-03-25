function treasureFinder(input) {

    let workArr = [...input];
    let sequence = workArr.shift().split(' ').map(Number);
    let line = workArr.shift();

    while (line !== 'find') {
        let treasureString = '';
        let iterationLength = Math.max(sequence.length, line.length);
        let index = 0;
        for (let i = 0; i < iterationLength; i++) {
            if (i > line.length - 1) {
                break;
            }
            let localCh = line[i].charCodeAt(0);
            localCh -= sequence[index];
            treasureString += String.fromCharCode(localCh);
            index++;
            if (index === sequence.length) {
                index = 0;
            }
        }

        let item = treasureString.slice((treasureString.indexOf('&') + 1), (treasureString.lastIndexOf('&')));
        let coordinates = treasureString.slice((treasureString.indexOf('<') + 1), treasureString.indexOf('>'));
        console.log(`Found ${item} at ${coordinates}`);
        line = workArr.shift();
    }

}

treasureFinder([
    "1 2 1 3",
    "ikegfp'jpne)bv=41P83X@",
    "ujfufKt)Tkmyft'duEprsfjqbvfv=53V55XA",
    "find"
]);

treasureFinder([
    "1 4 2 5 3 2 1",
    `Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
    "tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
    "'stj)>34W68Z@",
    "find"
]);