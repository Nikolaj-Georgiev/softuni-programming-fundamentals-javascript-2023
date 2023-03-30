function worldTour(input) {

    let [string, ...commandsArr] = input;
    for (const currentLine of commandsArr) {
        let [command, ...tokens] = currentLine.split(':');
        switch (command) {
            case 'Add Stop':
                let [index, subString] = tokens;
                if (indexChecker(+index, string)) {
                    string = string.substring(0, +index) + subString + string.substring(+index);

                }
                console.log(string);
                break;
            case 'Remove Stop':
                let [startIndex, endIndex] = tokens;
                if (indexChecker(+startIndex, string) && indexChecker(+endIndex, string)) {
                    string = string.substring(0, +startIndex) + string.substring(+endIndex + 1);

                }
                console.log(string);
                break;
            case 'Switch':
                let [oldString, newString] = tokens;
                if (oldString) {
                    string = string.replace(new RegExp(oldString, 'g'), newString);
                }
                console.log(string);
                break;
            case 'Travel':
                console.log(`Ready for world tour! Planned stops: ${string}`);
                return;
        }
    }

    function indexChecker(index, string) {
        if (index < 0 || index > string.length - 1) {
            return false;
        }
        return true;
    }
}

worldTour([
    "Hawai::Cyprys-Greece",
    "Add Stop:7:Rome",
    "Remove Stop:11:16",
    "Switch::",
    "Travel"
]);
worldTour([
    '', "Switch:Berlin:Sofia", "Add Stop: 0:Berlin", "Remove Stop: 5:3", "Travel"
]);
worldTour(["Paris London Tokyo", "Add Stop: 20:Berlin", "Travel"]);
worldTour(["Paris London Tokyo", "Switch:Berlin:Sofia", "Travel"]);
worldTour(["Paris London Tokyo", "Add Stop: 0:Berlin", "Travel"]);
worldTour(["Paris London Tokyo", "Remove Stop: 5:3", "Travel"]);
worldTour(["Paris London Tokyo", "Switch:Paris:", "Travel"]);