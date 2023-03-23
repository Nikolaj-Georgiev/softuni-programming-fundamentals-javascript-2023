function valueOfAString(input) {

    let string = input[0];
    let command = input[1];
    let sum = 0;

    switch (command) {
        case 'UPPERCASE':
            for (const ch of string) {
                if (ch.charCodeAt(0) >= 65 && ch.charCodeAt(0) <= 90) {
                    sum += ch.charCodeAt(0);
                }
            }
            break;
        case 'LOWERCASE':
            for (const ch of string) {
                if (ch.charCodeAt(0) >= 97 && ch.charCodeAt(0) <= 122) {
                    sum += ch.charCodeAt(0);
                }
            }
            break;
    }

    console.log(`The total sum is: ${sum}`);
}

valueOfAString([
    'HelloFromMyAwesomePROGRAM',
    'LOWERCASE'
]);
valueOfAString([
    'AC/DC',
    'UPPERCASE'
]);