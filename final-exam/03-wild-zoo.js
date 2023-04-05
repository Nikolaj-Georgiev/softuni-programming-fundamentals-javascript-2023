function wildZoo(input) {

    let commandsArr = input.slice(0, input.findIndex(x => x === 'EndDay'));
    let zoo = {};
    commandsArr.map(line => line.split(': ')).forEach(commandLine => {
        let [command, arguments] = commandLine;
        arguments = arguments.split('-').map(x => isNaN(x) ? x : Number(x));
        switch (command) {
            case 'Add':
                {
                    let name = arguments[0];
                    let food = arguments[1];
                    let area = arguments[2];
                    if (!zoo.hasOwnProperty(area)) {
                        zoo[area] = {};
                    }
                    if (!zoo[area].hasOwnProperty(name)) {
                        zoo[area][name] = { food };
                        break
                    }
                    zoo[area][name].food += food;
                }
                break;
            case 'Feed':
                let name = arguments[0];
                let food = arguments[1];
                feed(name, food);
                break;
        }
    });

    console.log('Animals:');
    let keys = Object.keys(zoo);
    keys.forEach(key => {
        let innerKeys = Object.keys(zoo[key]);
        innerKeys.forEach(innerKey => {
            console.log(` ${innerKey} -> ${zoo[key][innerKey].food}g`);
        });
    });

    console.log('Areas with hungry animals:');
    keys.forEach(key => {
        let innerKeys = Object.keys(zoo[key]);
        console.log(` ${key}: ${innerKeys.length}`);
    })

    function feed(animalName, food) {
        let keys = Object.keys(zoo);
        keys.forEach(key => {
            if (zoo[key].hasOwnProperty(animalName)) {
                zoo[key][animalName].food -= food;
                if (zoo[key][animalName].food <= 0) {
                    console.log(`${animalName} was successfully fed`);
                    delete zoo[key][animalName];
                    let keys = Object.keys(zoo[key]);
                    if (keys.length === 0) {
                        delete zoo[key];
                    }
                    return;
                }
            }
        });
    }

}

wildZoo([
    "Add: Adam-4500-ByTheCreek",
    "Add: Maya-7600-WaterfallArea",
    "Add: Maya-1230-WaterfallArea",
    "Feed: Jamie-2000",
    "EndDay"
]);
console.log('+++++++++++++++++++++++');
wildZoo(
    [
        "Add: Jamie-600-WaterfallArea",
        "Add: Maya-6570-WaterfallArea",
        "Add: Adam-4500-ByTheCreek",
        "Add: Bobbie-6570-WaterfallArea",
        "Feed: Jamie-2000",
        "Feed: Adam-2000",
        "Feed: Adam-2500",
        "EndDay"
    ]);
console.log('+++++++++++++++++++++++');
wildZoo([
    "Add: Bonie-3490-RiverArea",
    "Add: Sam-5430-DeepWoodsArea",
    "Add: Bonie-200-RiverArea",
    "Add: Maya-4560-ByTheCreek",
    "Feed: Maya-2390",
    "Feed: Bonie-3500",
    "Feed: Johny-3400",
    "Feed: Sam-5500",
    "EndDay"
]);