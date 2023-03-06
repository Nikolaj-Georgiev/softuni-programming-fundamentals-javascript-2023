function storage(input) {

    const storage = new Map();

    for (let line of input) {
        let [product, quantity] = line.split(' ');
        let localQ = Number(quantity);
        if (storage.has(product)) {
            quantity = localQ + storage.get(product);
        }
        storage.set(product, Number(quantity));
    }

    for (let iterator of storage) {
        console.log(`${iterator[0]} -> ${storage.get(iterator[0])}`);
    }

}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);
console.log('+++++++++++++++++++++');
storage(['apple 50',
    'apple 61',
    'coffee 115',
    'coffee 40'
]);