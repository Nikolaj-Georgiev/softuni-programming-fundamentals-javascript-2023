function addAndRemove(stringArray) {

    let resultArr = [];

    for (let i = 0; i < stringArray.length; i++) {
        let number = i + 1;
        let command = stringArray[i];
        if (command === 'add') {
            resultArr.push(number);
        } else {
            resultArr.pop()
        }
    }

    if (resultArr.length === 0) {
        console.log('Empty');
    } else {
        console.log(resultArr.join(' '));
    }

}

addAndRemove(['add', 'add', 'add', 'add']);
console.log('-----------------------');
addAndRemove(['add', 'add', 'remove', 'add', 'add']);
console.log('------------------------');
addAndRemove(['remove', 'remove', 'remove']);