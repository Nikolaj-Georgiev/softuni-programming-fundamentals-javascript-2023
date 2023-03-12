function wordTracker(input) {

    let workArr = [...input];

    let searchedWordsArr = workArr.shift().split(' ');

    let holdingObject = {};

    for (let key of searchedWordsArr) {
        holdingObject[key] = 0;
    }

    for (let key of workArr) {
        if (holdingObject.hasOwnProperty(key)) {
            holdingObject[key]++;
        }
    }

    let keys = Object.entries(holdingObject).sort(([keyA, valueA], [keyB, valueB]) => valueB - valueA);

    for (let key of keys) {
        console.log(`${key[0]} - ${key[1]}`);
    }
}

wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]);
console.log('+++++++++++++++++++++');
wordTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'
]);