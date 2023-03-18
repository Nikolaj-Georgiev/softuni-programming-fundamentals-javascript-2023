let text = 'Eiusmod duis elit laboris dolore proident aliqua minim ex. id Aliqua exercitation voluptate enim occaecat et voluptate reprehenderit nulla pariatur anim id proident aute. Qui id deserunt ullamco ea. Dolore ullamco laborum consequat fugiat voluptate mollit qui nulla.';

let wordToReplace = ' id ';
let newWord = ' kur ';

let replacedString = text;
let counter = 0;

while (replacedString.indexOf(wordToReplace) >= 0) {
    replacedString = replacedString.replace(wordToReplace, newWord);
    counter++;
}

console.log(replacedString);
console.log(counter);
