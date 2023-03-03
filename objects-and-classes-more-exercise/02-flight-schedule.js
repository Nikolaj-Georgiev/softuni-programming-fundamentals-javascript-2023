function flightSchedule(input) {

    let initialFlights = {};
    let canceledFlights = {};
    let action = input[2][0];

    arrToObj(input[0], initialFlights);
    arrToObj(input[1], canceledFlights);

    let initialFlightsKeys = Object.keys(initialFlights);
    let canceledFlightsKeys = Object.keys(canceledFlights);

    if (action === 'Cancelled') {
        initialFlightsKeys.forEach(flight => {
            canceledFlightsKeys.forEach(cancFl => {
                if (flight === cancFl) {
                    console.log(`{ Destination: '${initialFlights[flight]}', Status: 'Cancelled' }`);

                }
            })
        });

    } else {
        canceledFlightsKeys.forEach(flight => {
            if (flight in initialFlights) {
                delete initialFlights[flight];
                index = initialFlightsKeys.indexOf(flight);
                initialFlightsKeys.splice(index, 1);
            }
        });
        initialFlightsKeys.forEach(flight => {
            console.log(`{ Destination: '${initialFlights[flight]}', Status: 'Ready to fly' }`);
        })

    }

    function arrToObj(arr, obj) {
        arr.forEach(flight => {
            let currentLine = flight.split(' ');
            let key = currentLine.shift();
            let value = currentLine.join(' ');
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
        'WN678 Pennsylvania'
    ],
    ['DL2120 Cancelled',
        'WN612 Cancelled',
        'WN1173 Cancelled',
        'SK430 Cancelled'
    ],
    ['Cancelled']
]);

// flightSchedule([
//     ['WN269 Delaware',
//         'FL2269 Oregon',
//         'WN498 Las Vegas',
//         'WN3145 Ohio',
//         'WN612 Alabama',
//         'WN4010 New York',
//         'WN1173 California',
//         'DL2120 Texas',
//         'KL5744 Illinois',
//         'WN678 Pennsylvania'
//     ],
//     ['DL2120 Cancelled',
//         'WN612 Cancelled',
//         'WN1173 Cancelled',
//         'SK330 Cancelled'
//     ],
//     ['Ready to fly']
// ]);