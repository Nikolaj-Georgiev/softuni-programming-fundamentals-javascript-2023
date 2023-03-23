function hardWord(input) {

    let letter = input[0];
    let words = input[1];

    for (let i = 0; i < words.length; i++) {
        let match = '_'.repeat(words[i].length);
        if (letter.includes(match) && letter[(letter.indexOf(match) + match.length)] !== '_') {
            letter = letter.replace(match, words[i]);
        }
        if (!letter.includes('_')) {
            break;
        }
        if (i === words.length - 1) {
            i = -1;
        }

    }

    console.log(letter);
}

hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]);