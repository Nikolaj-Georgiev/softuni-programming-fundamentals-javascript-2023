function hashTag(text) {

    let hashT = '#';
    workingText = text;

    while (workingText.includes(hashT)) {
        let start = workingText.indexOf(hashT);
        workingText = workingText.substring(start + 1);

        let firstWord = '';
        for (let ch of workingText) {
            if (ch === ' ' && firstWord.length === 0) {
                break;
            }
            if ((ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) || (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90)) {
                firstWord += ch;
            } else if (ch !== ' ') {
                firstWord = '';
                break;
            } else {
                break;
            }

        }

        if (firstWord.length !== 0) {
            console.log(firstWord);
        }
    }
}

hashTag('Nowadays everyone uses # to tag a #spe-cial word in #socialMedia # ');
console.log('+++++++++');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');