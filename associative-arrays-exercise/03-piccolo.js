function piccolo(input) {

    let workArr = [];

    for (let line of input) {
        workArr.push(line.split(', '));
    }

    let garage = new Set()
    for (let [action, car] of workArr) {
        switch (action) {
            case 'IN':
                garage.add(car);
                break;
            case 'OUT':
                if (garage.has(car)) garage.delete(car);
                break;
        }
    }

    let garageArr = [];
    for (let car of garage) {
        garageArr.push(car);
    }

    if (!garageArr.length) {
        console.log('Parking Lot is Empty');
    }

    garageArr.sort((a, b) => a.localeCompare(b)).forEach(car => console.log(car));
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);
console.log('++++++++++++++++++++++++++++++');
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);