function pascalCaseSplitter(text) {

    let result = '';
    result += text[0];
    for (let i = 1, len = text.length; i < len; i++) {
        if (text[i].charCodeAt(0) >= 65 && text[i].charCodeAt(0) <= 90) {
            result += ', ' + text[i];
        } else {
            result += text[i];
        }
    }

    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('++++++++++++++++++++++++++++');
pascalCaseSplitter('HoldTheDoor');
console.log('++++++++++++++++++++++++++++');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');