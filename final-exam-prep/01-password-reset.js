function passwordReset(input) {

    let [initialPass, ...commandsArr] = input;
    commandsArr.map(line => {
        let [command, ...tokens] = line.split(' ');
        switch (command) {
            case 'TakeOdd':
                initialPass = initialPass.split('').filter((x, i) => i % 2 === 1).join('');
                console.log(initialPass);
                break;
            case 'Cut':
                let subst = initialPass.slice(+tokens[0], (+tokens[0] + +tokens[1]));
                initialPass = initialPass.replace(subst, '');
                console.log(initialPass);
                break;
            case 'Substitute':
                (initialPass.includes(tokens[0])) ? console.log(initialPass = initialPass.replace(new RegExp(tokens[0], 'g'), tokens[1])): console.log('Nothing to replace!');
                break;
            case 'Done':
                console.log(`Your password is: ${initialPass}`);
                break;
        }
    });
}

passwordReset(["Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr",
    "TakeOdd",
    "Cut 15 3",
    "Substitute :: -",
    "Substitute | ^",
    "Done"
]);
console.log('++++++++++++++');
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
    "TakeOdd",
    "Cut 18 2",
    "Substitute ! ***",
    "Substitute ? .!.",
    "Done"
])