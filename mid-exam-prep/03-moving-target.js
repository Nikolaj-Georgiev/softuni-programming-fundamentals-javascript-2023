function movingTarget(input) {

    let workArr = [...input];
    let targets = workArr.shift().split(' ').map(Number);
    let command = workArr.shift();

    while (command !== 'End') {
        let currentLine = command.split(' ');
        let action = currentLine[0];
        let index = Number(currentLine[1]);
        let value = Number(currentLine[2]);

        switch (action) {
            case 'Shoot':
                shoot(targets, index, value);
                break;
            case 'Add':
                add(targets, index, value);
                break;
            case 'Strike':
                strike(targets, index, value);
                break;
        }

        command = workArr.shift();
    }

    return targets.join('|');

    function shoot(arr, index, power) {
        if (arr[index]) {
            arr[index] -= power;
        }
        if (arr[index] <= 0) {
            arr.splice(index, 1);
        }
    }

    function add(arr, index, value) {
        if (arr[index]) {
            arr.splice(index, 0, value);
        } else {
            console.log('Invalid placement!');
        }
    }

    function strike(arr, index, radius) {
        let leftIndex = index - radius;
        let rightIndex = index + radius;
        if (arr[leftIndex] && arr[rightIndex]) {
            arr.splice(leftIndex, radius * 2 + 1);
        } else {
            console.log('Strike missed!');
        }
    }

}

console.log(movingTarget(["52 74 23 44 96 110",
    "Shoot 5 0",
    "Shoot 1 80",
    "Strike 2 2",
    "Add 22 3",
    "End"
]));
console.log('++++++++++++++++++++++++++++++++');
console.log(movingTarget(["1 2 3 4 5",
    "Strike 0 1",
    "End"
]));