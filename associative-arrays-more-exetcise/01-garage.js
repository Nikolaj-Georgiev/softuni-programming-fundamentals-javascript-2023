function garage(input) {

    let workInputArr = [...input];
    let garages = new Map();
    for (let line of workInputArr) {
        let tokens = line.split(' - ');
        let garageNumber = tokens[0];
        let cars = tokens[1].split(', ');
        if (!garages.has(garageNumber)) {
            garages.set(garageNumber, []);
        }
        garages.get(garageNumber).push(cars);
    }

    for (let key of garages) {
        let [garage, parkedCars] = key
        console.log(`Garage № ${garage}`);

        for (let cars of parkedCars) {
            let result = '--- ';
            let localArr = [];
            for (let car of cars) {
                localArr.push(car.split(': ').join(' - '));
            }
            result += localArr.join(', ');
            console.log(result);
        }
    }
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);
console.log('++++++++++++++++++++++++++++');
garage([
    '1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'
]);