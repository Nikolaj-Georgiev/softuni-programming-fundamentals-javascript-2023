function passwordGenerator(input) {

    const englishVowels = ['a', 'e', 'i', 'o', 'u'];
    let passwordString = (input[0] + input[1]).toLowerCase();
    let passwordValidator = input[2].toUpperCase();
    let index = 0;

    for (const ch of passwordString) {
        if (englishVowels.includes(ch)) {
            passwordString = passwordString.replace(ch, passwordValidator[index++]);
        }
        if (index >= passwordValidator.length) {
            index = 0;
        }
    }

    console.log(`Your generated password is ${passwordString.split('').reverse().join('')}`);

}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
]);
passwordGenerator([
    'easymoneyeazylife', 'atleasttencharacters',
    'absolute'
]);
passwordGenerator([
    'areyousureaboutthisone', 'notquitebutitrustyou',
    'disturbed'
]);