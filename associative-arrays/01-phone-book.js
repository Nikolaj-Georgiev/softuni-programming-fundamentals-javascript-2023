function phoneBook(input) {
    let phBook = {};

    for (let kvp of input) {
        let [key, value] = kvp.split(' ');

        phBook[key] = value;
    }

    for (let [key, value] of Object.entries(phBook)) {
        console.log(`${key} -> ${value}`);
    }

}

phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344'
]);
console.log('++++++++++++');
phoneBook(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344'
]);