function addBook(input) {
    let addressBook = {};

    for (let line of input) {
        let [name, address] = line.split(':');
        addressBook[name] = address;
    }

    Object.keys(addressBook).sort((key1, key2) => key1.localeCompare(key2)).forEach(key => {
        console.log(`${key} -> ${addressBook[key]}`);
    })


}

addBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd'
]);
console.log('+++++++++++++++++++++++++');
addBook(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd'
]);