function meetings(input) {
    let scheduleObj = {};

    input.forEach(kvp => {
        let [day, person] = kvp.split(' ');
        if (day in scheduleObj) {
            console.log(`Conflict on ${day}!`);
        } else {
            scheduleObj[day] = person;
            console.log(`Scheduled for ${day}`);
        }
    });

    for (let [day, value] of Object.entries(scheduleObj)) {
        console.log(`${day} -> ${value}`);
    }

}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'
]);
console.log('++++++++++++++++++++++++');
meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'
]);