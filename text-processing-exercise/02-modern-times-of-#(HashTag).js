function hashTag(text) {

    let hashT = '#';
    workingText = text;

    while (workingText.includes(hashT)) {
        let start = workingText.indexOf(hashT);
        workingText = workingText.substring(start + 1);

        let searchedWord = '';
        for (let ch of workingText) {
            if (ch === ' ' && searchedWord.length === 0) {
                break;
            }
            if ((ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) || (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90)) {
                searchedWord += ch;
            } else if (ch !== ' ') {
                searchedWord = '';
                break;
            } else {
                break;
            }

        }

        if (searchedWord.length !== 0) {
            console.log(searchedWord);
        }
    }
}

hashTag('Nowadays everyone uses # to tag a #spe-cial word in #socialMedia # ');
console.log('+++++++++');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');