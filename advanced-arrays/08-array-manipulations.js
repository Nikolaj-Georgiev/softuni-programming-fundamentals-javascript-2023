function arrayManipulator(input) {

    let workArr = [...input];
    let manipulatedArr = workArr.shift().split(' ').map(Number);

    for (let i = 0; i < workArr.length; i++) {
        let tokens = workArr[i].split(' ');
        let command = tokens.shift();
        let values = tokens.map(Number);

        switch (command) {
            case 'Add':
                addNumberToEndOfArr(manipulatedArr, values[0]);
                break;
            case 'Remove':
                removeAllAvailableOccurrence(manipulatedArr, values[0]);
                break;
            case 'RemoveAt':
                removeAtIndex(manipulatedArr, values[0]);
                break;
            case 'Insert':
                insertAtIndex(manipulatedArr, values[0], values[1]);
                break;
        }

    }

    return manipulatedArr.join(' ');

    function addNumberToEndOfArr(arr, number) {
        arr.push(number);
    }

    function removeAllAvailableOccurrence(arr, num) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === num) {
                arr.splice(i, 1);
            }
        }
    }

    function removeAtIndex(arr, index) {
        arr.splice(index, 1);
    }

    function insertAtIndex(arr, number, index) {
        arr.splice(index, 0, number);
    }

}

console.log(arrayManipulator(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]));
console.log('----------------------------------');
console.log(arrayManipulator(['6 12 2 65 6 42',
    'Add 8',
    'Remove 12',
    'RemoveAt 3',
    'Insert 6 2'
]));