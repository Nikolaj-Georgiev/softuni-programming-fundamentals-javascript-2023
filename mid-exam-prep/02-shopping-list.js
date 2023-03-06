function shoppingList(input) {

    let workArr = [...input];
    let groceriesList = workArr.shift().split('!');
    let command = workArr.shift();

    while (command !== 'Go Shopping!') {
        let currentLine = command.split(' ');
        let action = currentLine[0];
        let item = currentLine[1];
        let newItem = currentLine[2];

        switch (action) {
            case 'Urgent':
                urgent(groceriesList, item);
                break;
            case 'Unnecessary':
                unnecessary(groceriesList, item);
                break;
            case 'Correct':
                correct(groceriesList, item, newItem);
                break;
            case 'Rearrange':
                rearrange(groceriesList, item);
                break;
        }
        command = workArr.shift();
    }

    return groceriesList.join(', ');

    function urgent(arr, item) {
        if (arr.includes(item)) {
            return;
        }
        arr.unshift(item);
    }

    function unnecessary(arr, item) {
        if (!arr.includes(item)) {
            return;
        }
        let index = arr.indexOf(item);
        arr.splice(index, 1);
        // let newArr = arr.filter(x => x !== item);
        // return newArr;
    }

    function correct(arr, oldItem, newItem) {
        if (!arr.includes(oldItem)) {
            return;
        }
        let index = arr.indexOf(oldItem);
        arr[index] = newItem;
    }

    function rearrange(arr, item) {
        if (!arr.includes(item)) {
            return;
        }
        let index = arr.indexOf(item);
        let element = arr.splice(index, 1).join('');
        arr.push(element);

        // let newArr = arr.filter(x => x !== item);
        // newArr.push(item);
        // return newArr;
    }
}

console.log(shoppingList(["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"
]));
console.log('+++++++++++++++++++++++++++++');
console.log(shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Salt",
    "Unnecessary Grapes",
    "Correct Pepper Onion",
    "Rearrange Grapes",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]))
console.log('+++++++++++++++++++++++++++++');
console.log(shoppingList(["Milk!Pepper!Salt!Water!Banana",
    "Urgent Tortilla",
    "Unnecessary Pepper",
    "Correct Salt Onion",
    "Rearrange Banana",
    "Correct Tomatoes Potatoes",
    "Go Shopping!"
]));