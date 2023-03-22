function hashTag(text) {

    let textArr = text
        .split(' ')
        .filter(x => x.startsWith('#') && x.length > 1)
        .map(x => x.substring(1))
        .filter(x => {
            for (const z of x) {
                if (z.toLowerCase().charCodeAt(0) < 97 || z.toLowerCase().charCodeAt(0) > 122) {
                    return false;
                }
            }
            return true;
        })
        .join('\n');
    console.log(textArr);
}

hashTag('Nowadays everyone uses # to tag a #spe-cial word in #socialMedia # ');
console.log('+++++++++');
hashTag('The symbol # is known #variously in English-speaking #regions as the #number sign');