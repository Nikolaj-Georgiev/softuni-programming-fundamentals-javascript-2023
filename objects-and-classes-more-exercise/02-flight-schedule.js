function flightSchedule(input) {

    let initialFLigth = {};
    let changedStatuses = {};
    let action = input[2];

    arrToObj(input[0], initialFLigth);
    arrToObj(input[1], changedStatuses);

    console.log(initialFLigth);
    console.log(changedStatuses);

    for (let key in object) {
        if (Object.hasOwnProperty.call(object, key)) {
            const element = object[key];
            
        }
    }

    function arrToObj(arr, obj) {
        arr.forEach(flight => {
            let [key, value] = flight.split(' ');
            obj[key] = value;
        });
    }
}

flightSchedule([
['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]);