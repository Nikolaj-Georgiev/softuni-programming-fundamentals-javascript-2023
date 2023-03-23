function serializeString(input) {

    let string = input[0].split('');
    let resultArr = [];
    for (let i = 0; i < string.length; i++) {
        let resultString = '';
        let ch = string[i];
        for (let j = 0; j < string.length; j++) {
            if (ch === string[j]) {
                if (!resultString.includes(ch)) {
                    resultString += ch + ':' + j + '/';
                } else {
                    resultString += j + '/';
                }
            }
        }
        if (!resultArr.includes(resultString)) {
            resultArr.push(resultString);
        }
    }

    resultArr = resultArr.map(x => x = x.slice(0, x.length - 1))
    console.log(resultArr.join('\n'));

}

// serializeString(["abababa"]);
serializeString(["avjavamsdmcalsdm"]);