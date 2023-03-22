function pascalCaseSplitter(text) {

    let result = [];
    let startIndex = 0;
    for (let i = 1, len = text.length; i < len; i++) {
        if (text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90) {
            result.push(text.substring(startIndex, i));
            startIndex = i;
        }
    }

    result.push(text.substring(startIndex));
    console.log(result.join(', '));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('++++++++++++++++++++++++++++');
pascalCaseSplitter('HoldTheDoor');
console.log('++++++++++++++++++++++++++++');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');