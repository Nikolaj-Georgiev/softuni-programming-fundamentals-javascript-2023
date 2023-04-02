function decryptingCommands(input) {

    let [message, ...commands] = input;
    commands = commands.slice(0, commands.indexOf('Finish'));
    commands.map(x => x.split(' ')).forEach(line => {
        let [command, ...tokens] = line;
        switch (command) {
            case 'Replace':
                message = message.replace(new RegExp(tokens[0], 'g'), tokens[1]);
                console.log(message);
                break;
            case 'Cut':
                let startIndex = Number(tokens[0]);
                let endIndex = Number(tokens[1]);
                if (indexChecker(startIndex, endIndex)) {
                    message = message.substring(0, startIndex) + message.substring(endIndex + 1);
                    console.log(message);
                    break;
                }
                console.log('Invalid indices!');
                break;
            case 'Make':
                (tokens[0] === 'Upper') ? message = message.toUpperCase(): message = message.toLowerCase();
                console.log(message);
                break;
            case 'Check':
                (message.includes(tokens[0])) ? console.log(`Message contains ${tokens[0]}`): console.log(`Message doesn't contain ${tokens[0]}`);
                break;
            case 'Sum':
                let sIndex = Number(tokens[0]);
                let eIndex = Number(tokens[1]);
                if (indexChecker(sIndex, eIndex)) {
                    let sub = message.substring(sIndex, eIndex + 1);
                    let sum = sub.split('').map(x => x.charCodeAt(0)).reduce((a, c) => a + c, 0);
                    console.log(sum);
                    break;
                }
                console.log('Invalid indices!');
                break;
        }
    });

    function indexChecker(startIndex, endIndex) {
        if ((startIndex >= 0 && startIndex < message.length) && (endIndex >= 0 && endIndex < message.length)) {
            return true;
        }
        return false;
    }
}

// decryptingCommands([
//     "ILikeSoftUni",
//     "Replace I We",
//     "Make Upper",
//     "Check SoftUni",
//     "Sum 1 4",
//     "Cut 1 4",
//     "Finish"
// ]);
// console.log("++++++++++++++++++++");
decryptingCommands([
    "HappyNameDay",
    "Replace p r",
    "Make Lower",
    "Cut 2 23",
    "Sum -2 2",
    "Finish"
]);