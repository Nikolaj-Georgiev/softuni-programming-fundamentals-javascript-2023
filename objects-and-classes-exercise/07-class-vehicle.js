class Vehicle {

    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            engine: Number(parts.engine),
            power: Number(parts.power),
            quality: parts.engine * parts.power,
        }
        this.fuel = Number(fuel);

    }

    drive(fuelLoss) {
        this.fuel -= fuelLoss;
    }
}

let parts = { engine: 6, power: 100 };
let vehicle = new Vehicle('a', 'b', parts, 200);
vehicle.drive(100);
console.log(vehicle.fuel);
console.log(vehicle.parts.quality);

let parts1 = { engine: 9, power: 500 };
let vehicle1 = new Vehicle('l', 'k', parts1, 840);
vehicle.drive(20);
console.log(vehicle1.fuel);