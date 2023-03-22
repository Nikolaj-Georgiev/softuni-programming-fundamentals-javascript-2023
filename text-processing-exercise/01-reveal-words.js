function revealWord(replacingWords, stringWithTemplates) {

    let replacingArr = replacingWords.split(', ');
    let stringWithTemplatesArr = stringWithTemplates.split(' ');
    for (const word of replacingArr) {
        if (!word.length) {
            continue;
        }

        for (let i = 0; i < stringWithTemplatesArr.length; i++) {
            if (stringWithTemplatesArr[i].includes('*') && stringWithTemplatesArr[i].length === word.length) {
                stringWithTemplatesArr[i] = word;
            }
        }
    }

    console.log(stringWithTemplatesArr.join(' '));
}

revealWord(
    'great',
    'softuni is ***** place for learning new programming languages'
);
console.log('++++++++++++++++++');
revealWord(
    'great, learning',
    'softuni is ***** place for ******** new programming languages'
);