function countOccur(text, word) {

    let resultArr = text.split(' ');
    let counter = 0;

    for (let w of resultArr) {
        if (w === word) {
            counter++;
        }
    }

    console.log(counter);
}

countOccur('This is a word and it also is a sentence', 'is');
console.log('++++++++++++++++++++');
countOccur('softuni is great place for learning new programming languages', 'softuni');