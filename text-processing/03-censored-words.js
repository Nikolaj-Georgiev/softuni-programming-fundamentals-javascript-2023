function censoredWord(text, searchedWord) {

    let resultString = text;

    while (resultString.includes(searchedWord)) {
        resultString = resultString.replace(searchedWord, ('*'.repeat(searchedWord.length)));
    }

    console.log(resultString);
}

censoredWord('A small sentence with some words', 'small');
console.log('++++++++++++++++++++++++++');
censoredWord('Find the hidden word hidden pesho hidden.', 'hidden');