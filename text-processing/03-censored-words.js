// function censoredWord(text, searchedWord) {

//     let resultString = text;

//     while (resultString.includes(searchedWord)) {
//         resultString = resultString.replace(searchedWord, ('*'.repeat(searchedWord.length)));
//     }

//     console.log(resultString);
// }

// censoredWord('A small sentence with some words', 'small');
// console.log('++++++++++++++++++++++++++');
// censoredWord('Find the hidden word hidden pesho hidden.', 'hidden');
// console.log('++++++++++++++++++++++++++');


function censoredWord1(text, searchedWord) {

    let resultString = text;
    let censoredWord = '*'.repeat(searchedWord.length);
    let index = resultString.indexOf(searchedWord);

    while (index >= 0) {
        let startLocal = resultString.substring(0, index);
        let endLocal = resultString.substring(index + searchedWord.length);
        resultString = startLocal + censoredWord + endLocal;
        index = resultString.indexOf(searchedWord);
    }

    console.log(resultString);
}

censoredWord1('A small sentence with some words', 'small');
console.log('++++++++++++++++++++++++++');
censoredWord1('Find the hidden word hidden pesho hidden.', 'hidden');