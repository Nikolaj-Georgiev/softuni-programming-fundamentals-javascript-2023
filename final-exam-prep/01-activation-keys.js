function activationCase(input) {

    let [rawActivationKey, ...commands] = input.slice(0, input.length - 1);
    commands.map(line => line.split('>>>')).forEach(commandLine => {
        let [command, ...tokens] = commandLine;
        switch (command) {
            case 'Slice':
                rawActivationKey = rawActivationKey.substring(0, Number(tokens[0])) + rawActivationKey.substring(Number(tokens[1]));
                console.log(rawActivationKey);
                break;
            case 'Flip':
                (tokens[0] === 'Lower') ?
                rawActivationKey = rawActivationKey.substring(0, Number(tokens[1])) + rawActivationKey.substring(Number(tokens[1]), Number(tokens[2])).toLowerCase() + rawActivationKey.substring(Number(tokens[2])):
                    rawActivationKey = rawActivationKey.substring(0, Number(tokens[1])) + rawActivationKey.substring(Number(tokens[1]), Number(tokens[2])).toUpperCase() + rawActivationKey.substring(Number(tokens[2]));
                console.log(rawActivationKey);
                break;
            case 'Contains':
                (rawActivationKey.includes(tokens[0])) ? console.log(`${rawActivationKey} contains ${tokens[0]}`): console.log('Substring not found!');
                break;
        }
    });
    console.log(`Your activation key is: ${rawActivationKey}`);
}

activationCase([
    "abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"
]);
console.log('++++++++++++++');
activationCase([
    "134softsf5ftuni2020rockz42",
    "Slice>>>3>>>7",
    "Contains>>>-rock",
    "Contains>>>-uni-",
    "Contains>>>-rocks",
    "Flip>>>Upper>>>2>>>8",
    "Flip>>>Lower>>>5>>>11",
    "Generate"
]);