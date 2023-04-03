function stringManipulator(input) {

    let [string, ...commandsArr] = input;
    commandsArr.map(x => x.split(' ')).forEach(line => {
        let [command, ...arguments] = line;
        arguments = arguments.map(x => isNaN(x) ? x : Number(x));
        switch (command) {
            case 'Translate':
                string = string.split(arguments[0]).join(arguments[1]);
                console.log(string);
                break;
            case 'Includes':
                (string.includes(arguments[0])) ? console.log('True'): console.log('False');
                break;
            case 'Start':
                (string.startsWith(arguments[0])) ? console.log('True'): console.log('False');
                break;
            case 'Lowercase':
                string = string.toLowerCase();
                console.log(string);
                break;
            case 'FindIndex':
                console.log(string.lastIndexOf(arguments[0]));
                break;
            case 'Remove':
                if (arguments[0] >= 0 && arguments[0] < string.length && arguments[1] > 0) {
                    string = string.substring(0, arguments[0]) + string.substring(arguments[0] + arguments[1]);
                    console.log(string);
                }
                break;
            case 'End':
                return;
        }

    });



}

stringManipulator([
    "//Thi5 I5 MY 5trING!//",
    "Translate 5 s",
    "Includes string",
    "Start //This",
    "Lowercase",
    "FindIndex i",
    "Remove 0 10",
    "End"
]);
console.log('++++++++++');
stringManipulator([
    "*S0ftUni is the B3St Plac3**",
    "Translate 2 o",
    "Includes best",
    "Start the",
    "Lowercase",
    "FindIndex p",
    "Remove 2 7",
    "End"
]);