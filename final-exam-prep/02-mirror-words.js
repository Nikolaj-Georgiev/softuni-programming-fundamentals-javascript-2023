function mirrorWords(input) {
    let string = input[0];
    let pattern = /([#@]+?)(?<firstWord>[A-Za-z]{3,})\1{2}(?<secondWord>[A-Za-z]{3,})\1+?/g;
    let match = string.match(pattern);
    if (match === null) {
        console.log("No word pairs found!\nNo mirror words!")
        return;
    }
    let mirrorWordsArr = [];
    let workingArr = match.map(wordPair => wordPair.split(wordPair[0]).join(' ').trim()).forEach(wordPair => {
        let [firstWord, secondWord] = wordPair.split('  ');
        if (firstWord === secondWord.split('').reverse().join('')) {
            mirrorWordsArr.push(firstWord + ' <=> ' + secondWord);
        }
    });
    console.log(`${match.length} word pairs found!\n${(mirrorWordsArr.length)? `The mirror words are:\n${mirrorWordsArr.join(', ')}`: 'No mirror words!'}`);
}

mirrorWords([
    '@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r'
]);
console.log('++++++++++++++++++++++');
mirrorWords(['#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@']);
console.log('++++++++++++++++++++++');
mirrorWords(['#lol#lol# @#God@@doG@# #abC@@Cba# @Xyu@#uyX#'])