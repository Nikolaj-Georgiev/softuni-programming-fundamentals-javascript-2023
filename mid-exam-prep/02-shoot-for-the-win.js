function shootForTheWin(input) {

    let workArr = [...input];
    let targets = workArr.shift().split(' ').map(Number);
    let command = workArr.shift();
    let counter = 0;

    while (command !== 'End') {
        let index = Number(command);
        if (index >= 0 && index < targets.length) {
            let element = targets[index];
            if (element === -1) {
                command = workArr.shift();
                continue;
            }
            counter++
            reduceIncrease(targets, index);
        }

        command = workArr.shift();
    }

    return `Shot targets: ${counter} -> ${targets.join(' ')}`

    function reduceIncrease(arr, index) {
        let element = arr[index];
        arr[index] = -1;
        for (let i = 0; i < arr.length; i++) {
            let currentElement = arr[i];
            if (currentElement <= element && currentElement !== -1) {
                currentElement += element;
            } else if (currentElement > element && currentElement !== -1) {
                currentElement -= element;
            }

            arr[i] = currentElement;
        }
    }

}

console.log(shootForTheWin(["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"
]));
console.log('++++++++++++++++++++++++++++');
console.log(shootForTheWin(["30 30 12 60 54 66",
    "5",
    "2",
    "4",
    "0",
    "End"
]));