function planDiscovery(input) {
    class Plant {
        constructor(plantName, plantRarity, plantRating) {
            this.name = plantName;
            this.rarity = plantRarity;
            this.rating = plantRating;
        }

        rate(rating) {
            this.rating.push(rating);
        }

        update(rarity) {
            this.rarity = rarity;
        }

        reset() {
            this.rating = [];
        }

        averageRating() {
            let average = 0;
            let divisor = this.rating.length;
            if (divisor === 0) return 0;
            let sumOfRatings = this.rating.reduce((a, c) => a + c, 0);
            average = sumOfRatings / divisor;
            return average;
        }

        toConsole() {
            console.log(`- ${this.name}; Rarity: ${this.rarity}; Rating: ${(this.averageRating()).toFixed(2)}`);
        }
    }

    let plantsCollection = {};
    let inititalPlants = input.slice(1, Number(input[0]) + 1).map(x => x.split('<->'))
    inititalPlants.forEach(plantInfo => {
        let plant = new Plant(plantInfo[0], Number(plantInfo[1]), []);
        plantsCollection[plantInfo[0]] = plant;
    });

    input.slice(Number(input[0]) + 1).forEach(line => {
        let [command, tokens] = line.split(': ');
        if (command === 'Exhibition') return;
        let [plantName, value] = tokens.split(' - ');
        switch (command) {
            case 'Rate':
                (plantsCollection.hasOwnProperty(plantName)) ? plantsCollection[plantName].rate(Number(value)): console.log('error');
                break;
            case 'Update':
                (plantsCollection.hasOwnProperty(plantName)) ? plantsCollection[plantName].update(Number(value)): console.log('error');
                break;
            case 'Reset':
                (plantsCollection.hasOwnProperty(plantName)) ? plantsCollection[plantName].reset(): console.log('error');
                break;
        }
    });
    console.log('Plants for the exhibition:');
    for (const plant in plantsCollection) {
        plantsCollection[plant].toConsole();
    }
}

planDiscovery(([
    "3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"
]));
console.log('+++++++++++++++++++++');
planDiscovery(([
    "2",
    "Candelabra<->10",
    "Oahu<->10",
    "Rate: Oahu - 7",
    "Rate: Candelabra - 6",
    "Exhibition"
]))