function passwordValidator(input) {

    let [pass, ...commandsArr] = input;
    commandsArr.pop();
    commandsArr.map(x => x.split(' ')).forEach(line => {
        let [command, ...arguments] = line;
        arguments = arguments.map(x => isNaN(x) ? x : Number(x));
        (command === 'Make') ? command = command + ' ' + arguments[0]: false;
        switch (command) {
            case 'Make Upper':
                (indexChecker(arguments[1])) ? makeUpper(arguments[1]): false;
                console.log(pass);
                break;
            case 'Make Lower':
                (indexChecker(arguments[1])) ? makeLower(arguments[1]): false;
                console.log(pass);
                break;
            case 'Insert':
                (indexChecker(arguments[0])) ? insertChar(arguments[0], arguments[1]): false;
                console.log(pass);
                break;
            case 'Replace':
                let char = String(arguments[0]);
                (pass.includes(char)) ? replace(char, arguments[1]): false;
                console.log(pass);
                break;
            case 'Validation':
                if (pass.length < 8) { console.log('Password must be at least 8 characters long!'); break; }
                let match = pass.match(/\W/g);
                if (match !== null) { console.log('Password must consist only of letters, digits and _!'); break; }
                match = pass.match(/[A-Z]+/g);
                if (match === null) { console.log('Password must consist at least one uppercase letter!'); break; }
                match = pass.match(/[a-z]+/g);
                if (match === null) { console.log('Password must consist at least one lowercase letter!'); break; }
                match = pass.match(/\d+/g);
                if (match === null) { console.log('Password must consist at least one digit!'); break; }
                break;
            default:
                break;
        }
    });

    function makeUpper(index) {
        let newLetter = pass[index].toUpperCase();
        pass = pass.substring(0, index) + newLetter + pass.substring(index + 1);
        return pass;
    }

    function makeLower(index) {
        let newLetter = pass[index].toLowerCase();
        pass = pass.substring(0, index) + newLetter + pass.substring(index + 1);
        return pass;
    }

    function insertChar(index, char) {
        pass = pass.substring(0, index) + char + pass.substring(index);
        return pass;
    }

    function replace(char, value) {
        let newChar = String.fromCharCode((char.charCodeAt(0) + value));
        pass = pass.split(char).join(newChar);
        return pass;
    }

    function indexChecker(index) {
        if (index >= 0 && index < pass.length) {
            return true;
        }
        return false;
    }

}

passwordValidator(['invalidpassword*',
    'Add 2 p',
    'Replace i -50',
    'Replace * 10',
    'Make Upper 2',
    'Validation',
    'Complete'
]);
console.log('++++++++++++++++++++++++');
passwordValidator(['123456789',
    'Insert 3 R',
    'Replace 5 15',
    'Validation',
    'Make Lower 3',
    'Complete'
]);