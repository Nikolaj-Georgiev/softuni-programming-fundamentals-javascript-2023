function chatLogger(input) {

    let workArr = [...input];
    let chatArr = [];
    let command = workArr.shift();

    while (command !== 'end') {
        let currentLine = command.split(' ');
        let action = currentLine[0];
        let word = currentLine[1];
        let newWord = currentLine[2];
        let spammedWords = currentLine.slice(1);

        switch (action) {
            case 'Chat':
                chat(chatArr, word);
                break;
            case 'Delete':
                del(chatArr, word);
                break;
            case 'Edit':
                edit(chatArr, word, newWord);
                break;
            case 'Pin':
                pin(chatArr, word);
                break;
            case 'Spam':
                spam(chatArr, spammedWords);
                break;
        }

        command = workArr.shift();
    }

    return chatArr.join('\n');

    function chat(arr, word) {
        arr.push(word);
    }

    function del(arr, word) {
        let index = arr.indexOf(word);
        if (arr[index]) {
            arr.splice(index, 1);
        }
    }

    function edit(arr, oldWord, newWord) {
        let index = arr.indexOf(oldWord);
        if (arr[index]) {
            arr.splice(index, 1, newWord);
        }
    }

    function pin(arr, word) {
        let index = arr.indexOf(word);
        if (arr[index]) {
            arr.splice(index, 1);
            arr.push(word);
        }
    }

    function spam(arr, spamArr) {
        if (spamArr.length) {
            for (let el of spamArr) {
                arr.push(el);
            }
        }
    }
}

console.log(chatLogger(["Chat Hello", "Chat darling", "Edit darling Darling", "Spam how are you", "Delete Darling", "end"]));
console.log('+++++++++++++++++++++');
console.log(chatLogger(["Chat Hello", "Delete John", "Pin Hi", "end"]));
console.log('+++++++++++++++++++++');
console.log(chatLogger(["Chat John", "Spam Let's go to the zoo", "Edit zoo cinema", "Chat tonight", "Pin John", "end"]));