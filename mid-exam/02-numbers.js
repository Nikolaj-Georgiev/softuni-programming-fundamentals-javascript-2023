function numbers(input) {

    let workArr = [...input];
    let sequenceArr = workArr.shift().split(' ').map(Number);
    let command = workArr.shift();

    while (command !== 'Finish') {
        let currentLine = command.split(' ');
        let action = currentLine[0];
        let firstValue = Number(currentLine[1]);
        let secondValue = Number(currentLine[2]);
        let buffer = [];

        switch (action) {
            case 'Add':
                add(sequenceArr, firstValue);
                break;
            case 'Remove':
                remove(sequenceArr, firstValue);
                break;
            case 'Replace':
                replace(sequenceArr, firstValue, secondValue);
                break;
            case 'Collapse':
                buffer = collapse(sequenceArr, firstValue);
                if (buffer.length) {
                    sequenceArr = buffer.slice(0);
                }
                break;
        }

        command = workArr.shift();
    }

    return sequenceArr.join(' ');

    function add(arr, value) {
        arr.push(value);
    }

    function remove(arr, value) {
        let index = arr.indexOf(value);
        if (index !== -1) {
            arr.splice(index, 1);
        }
    }

    function replace(arr, oldWord, newValue) {
        let index = arr.indexOf(oldWord);
        if (arr[index]) {
            arr.splice(index, 1, newValue);
        }
    }

    function collapse(arr, value) {
        let localArr = arr.filter(x => x >= value);
        return localArr;
    }

}

console.log(numbers(["1 4 5 19",
    "Add 1",
    "Remove 4",
    "Finish"
]));
console.log('+++++++++++++++++++++++');
console.log(numbers(["1 20 -1 10",
    "Collapse 8",
    "Finish"
]));
console.log('+++++++++++++++++++++');
console.log(numbers(["5 9 70 -56 9 9",
    "Replace 9 10",
    "Remove 9",
    "Finish"
]));