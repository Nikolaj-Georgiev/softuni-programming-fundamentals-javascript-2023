function inventory(input) {

    let workArr = [...input].map(String);
    let inventory = workArr.shift().split(', ');
    let command = workArr.shift();

    while (command !== 'Craft!') {
        let currentLine = command.split(' - ');
        let action = currentLine[0];
        let item = currentLine[1];

        switch (action) {
            case 'Collect':
                collect(inventory, item);
                break;
            case 'Drop':
                drop(inventory, item);
                break;
            case 'Combine Items':
                combine(inventory, item);
                break;
            case 'Renew':
                renew(inventory, item);
                break;
        }

        command = workArr.shift();
    }

    return inventory.join(', ');

    function collect(arr, item) {
        if (!arr.includes(item)) {
            arr.push(item)
        }
    }

    function drop(arr, item) {
        if (arr.includes(item)) {
            let index = arr.indexOf(item);
            arr.splice(index, 1);
        }
    }

    function combine(arr, item) {
        let items = item.split(':');
        let oldItem = items[0];
        let newItem = items[1];
        if (arr.includes(oldItem)) {
            let index = arr.indexOf(oldItem);
            arr.splice((index + 1), 0, newItem)
        }
    }

    function renew(arr, item) {
        if (arr.includes(item)) {
            let index = arr.indexOf(item);
            let renewedItem = arr.splice(index, 1).join('');
            arr.push(renewedItem);
        }
    }


}

console.log(inventory([
    'Iron, Wood, Sword',
    'Collect - Gold',
    'Drop - Wood',
    'Craft!'
]));
console.log('+++++++++++++++++++');
console.log(inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]));
console.log('++++++++++++++++');
console.log(inventory([
    'Iron, Sword',
    'Collect - Gold',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
]));