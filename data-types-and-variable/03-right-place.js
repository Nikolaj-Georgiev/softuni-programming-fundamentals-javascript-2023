function rightPlace(string1, char, string2) {

    let newString = ''

    for (let i = 0; i < string1.length; i++) {
        let localChar = string1[i];
        if (localChar === '_') {
            localChar = char;
        }

        newString += localChar;

    }

    console.log((newString === string2) ? 'Matched' : 'Not Matched');
}

rightPlace('Str_ng', 'I', 'Strong');
rightPlace('Str_ng', 'i', 'String');