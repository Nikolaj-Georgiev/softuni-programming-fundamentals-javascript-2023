function arrayModifier(input) {

    let workArr = [...input];
    let sequence = workArr.shift().split(' ').map(Number);
    let command = workArr.shift();

    while (command !== 'end') {
        let currentLine = command.split(' ');
        let action = currentLine[0];
        let firstIndex = Number(currentLine[1]);
        let secondIndex = Number(currentLine[2]);

        switch (action) {
            case 'swap':
                swap(sequence, firstIndex, secondIndex);
                break;
            case 'multiply':
                multiply(sequence, firstIndex, secondIndex);
                break;
            case 'decrease':
                sequence = sequence.map(x => x - 1);
                break;
        }
        command = workArr.shift();
    }

    return sequence.join(', ')

    function swap(arr, indexOne, indexTwo) {
        let firstItem = arr[indexOne];
        let secondItem = arr[indexTwo];
        arr[indexOne] = secondItem;
        arr[indexTwo] = firstItem;
    }

    function multiply(arr, indexOne, indexTwo) {
        let element = arr[indexOne] * arr[indexTwo];
        arr[indexOne] = element;
    }

}

console.log(arrayModifier([
    '23 -2 321 87 42 90 -123',
    'swap 1 3',
    'swap 3 6',
    'swap 1 0',
    'multiply 1 2',
    'multiply 2 1',
    'decrease',
    'end'
]));
console.log('++++++++++++++++++++++++');
console.log(arrayModifier([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]));