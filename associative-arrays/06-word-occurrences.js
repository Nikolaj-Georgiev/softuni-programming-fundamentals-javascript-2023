function wordOccurrences(input) {

    let wordsObj = {};

    let tokens = input.join('|').split('|');

    for (let word of tokens) {
        if (word in wordsObj) {
            wordsObj[word]++;
        } else {
            wordsObj[word] = 1;
        }
    }

    let entries = Object.entries(wordsObj).sort((a, b) => b[1] - a[1]);
    for (let key of entries) {
        console.log(`${key[0]} -> ${wordsObj[key[0]]} times`);
    }
}

wordOccurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);
console.log('++++++++++++++++++++');
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"]);