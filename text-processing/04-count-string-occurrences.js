function countOccur(text, word) {

    let resultString = text;
    let counter = 0;

    while (resultString.includes(word)) {
        counter++;
        resultString = resultString.replace(word, 'kur');
    }

    console.log(counter);

}

countOccur('This is a word and it also is a sentence', 'is');
console.log('++++++++++++++++++++');
countOccur('softuni is great place for learning new programming languages', 'softuni');