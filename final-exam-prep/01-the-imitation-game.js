function imitationGame(input) {

    let [message, ...workArr] = input;
    for (const line of workArr) {
        if (line === 'Decode') {
            break;
        }
        let tokens = line.split('|');
        let [command, firstValue, secondValue] = tokens;
        switch (command) {
            case 'ChangeAll':
                {
                    while (message.includes(firstValue)) {
                        let index = message.indexOf(firstValue);
                        message = message.substring(0, index) + secondValue + message.substring(index + 1);
                    }
                }
                break;
            case 'Insert':
                {
                    message = message.substring(0, +firstValue) + secondValue + message.substring(+firstValue);
                }
                break;
            case 'Move':
                {
                    message = message.substring(+firstValue).concat(message.substring(0, +firstValue))
                    console.log();message.substring(0, +firstValue)
                }
                break;
        }

    }

    console.log(`The decrypted message is: ${message}`);

}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
]);
console.log('+++++++++');
imitationGame([
    'owyouh',
    'Move|2',
    'Move|3',
    'Insert|3|are',
    'Insert|9|?',
    'Decode'
]);