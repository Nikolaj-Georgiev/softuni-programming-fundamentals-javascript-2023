function secretChat(input) {

    let [secretMessage, ...commandsArr] = input;
    commandsArr.forEach(line => {
        if (line === 'Reveal') {
            console.log(`You have a new text message: ${secretMessage}`);
            return;
        }
        let [command, firstValue, secondValue] = line.split(':|:');
        switch (command) {
            case 'ChangeAll':
                secretMessage = secretMessage.replace(new RegExp(firstValue, 'g'), secondValue);
                console.log(secretMessage);
                break;
            case 'Reverse':
                if (!secretMessage.includes(firstValue)) {
                    console.log('error');
                    break;
                }
                secretMessage = secretMessage.substring(0, secretMessage.indexOf(firstValue)) + secretMessage.substring(secretMessage.indexOf(firstValue) + firstValue.length) + firstValue.split('').reverse().join('');
                console.log(secretMessage);
                break;
            case 'InsertSpace':
                secretMessage = secretMessage.substring(0, Number(firstValue)) + ' ' + secretMessage.substring(Number(firstValue));
                console.log(secretMessage);
                break;
        }

    });
}

secretChat([
    'heVVodar!gniV',
    'ChangeAll:|:V:|:l',
    'Reverse:|:!gnil',
    'InsertSpace:|:5',
    'Reveal'
]);
console.log('++++++++++++++++');
secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
]);