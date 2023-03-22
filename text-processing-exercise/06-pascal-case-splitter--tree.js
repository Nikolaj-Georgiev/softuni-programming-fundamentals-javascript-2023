function pascalCaseSplitter(text) {

    let result = text[0];
    let lower = text.toLowerCase();
    for (let i = 1; i < text.length; i++) {
        if (text[i] !== lower[i]) {
            result += ', ';
        }
        result += text[i];
    }

    console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
console.log('++++++++++++++++++++++++++++');
pascalCaseSplitter('HoldTheDoor');
console.log('++++++++++++++++++++++++++++');
pascalCaseSplitter('ThisIsSoAnnoyingToDo');