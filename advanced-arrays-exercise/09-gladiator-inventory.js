function gladiatorInventory(array) {

    let workArr = [...array];
    let inventory = workArr.shift().split(' ');

    for (let i = 0; i < workArr.length; i++) {
        let commands = workArr[i].split(' ');
        let command = commands.shift();
        let items = commands.join('').split('-');

        switch (command) {
            case 'Buy':
                buy(inventory, items[0]);
                break;
            case 'Trash':
                trash(inventory, items[0]);
                break;
            case 'Repair':
                repair(inventory, items[0]);
                break;
            case 'Upgrade':
                upgrade(inventory, items);
                break;
        }

    }

    return inventory.join(' ');


    function buy(arr, item) {
        if (!arr.includes(item)) {
            arr.push(item);
        }
        // return arr;
    }

    function trash(arr, item) {
        if (arr.includes(item)) {
            let index = arr.indexOf(item);
            arr.splice(index, 1);
        }
    }

    function repair(arr, item) {
        if (arr.includes(item)) {
            let index = arr.indexOf(item);
            let itemHolder = arr[index];
            arr.splice(index, 1);
            arr.push(itemHolder);
        }
    }

    function upgrade(arr, items) {
        if (arr.includes(items[0])) {
            let index = arr.indexOf(items[0]);
            let upgradedItem = items.join(':');
            arr.splice((index + 1), 0, upgradedItem);
        }
    }
}

console.log(gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel'
]));
console.log('+++++++++++++++++++++++++++++++++++++++++')
console.log(gladiatorInventory(['SWORD Shield Spear',
    'Trash Bow',
    'Repair Shield',
    'Upgrade Helmet-V'
]));