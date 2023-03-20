let text = 'Exercitation aliquip incididunt anim id do cillum do. Non sunt anim laboris sit excepteur ipsum eiusmod ex ad tempor duis esse. Pariatur dolore cillum aliqua nisi sunt laborum excepteur. Enim ea officia ipsum cillum. Excepteur sunt velit aliqua mollit quis do enim fugiat eu proident ullamco sunt proident magna sunt.';

let searchedWord = 'do';
let index = text.indexOf(searchedWord);

while (index >= 0) {
    console.log('We found ' + searchedWord + ' at' + ' ' + index + ' position');
    index = text.indexOf(searchedWord, index + 1);
}