function needForSpeed(input) {
    class Car {
        constructor(car, mileage, fuel) {
            this.car = car;
            this.mileage = mileage;
            this.fuel = fuel;
        }

        drive(distance, fuel) {
            if (!this.fuel >= fuel) {
                console.log('Not enough fuel to make that ride');
                return;
            }
            this.mileage += distance;
            this.fuel -= fuel;
            console.log(`${this.car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            if (this.mileage >= 100000) {
                console.log(`Time to sell the ${this.car}!`);
                delete carsCollection[this.car];
            }
        }

        refuel(fuel) {
            let maxLoad = 75 - this.fuel;
            if (fuel > maxLoad) {
                this.fuel += maxLoad;
                console.log(`${this.car} refueled with ${maxLoad} liters`);
                return;
            }
            this.fuel += fuel;
            console.log(`${this.car} refueled with ${fuel} liters`);

        }

        revert() {}

    }

    let carsCollection = {};
    input.slice(1, +input[0] + 1).map(line => line.split('|')).forEach(line => {
        let [car, mileage, fuel] = line;
        carsCollection[car] = new Car(car, Number(mileage), Number(fuel));
    });
    input.slice(+input[0] + 1).map(line => {
        let [command, carName, ...tokens] = line.split(' : ');
        switch (command) {
            case 'Drive':
                carsCollection[carName].drive(Number(tokens[0]), Number(tokens[1]));
                break;
            case 'Refuel':
                carsCollection[carName].refuel(Number(tokens[0]));
                break;
            case 'Revert':
            case 'Stop':
        }

    })


}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 62000 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]);
console.log('++++++++++++++++');
needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
]);