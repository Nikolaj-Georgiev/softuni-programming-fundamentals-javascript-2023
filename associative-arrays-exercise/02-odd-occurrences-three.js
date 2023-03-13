function oddOcc(words) {

    let resultObject = {};
    let allWords = words
        .split(' ')
        .map(w => w.toLowerCase());

    for (let word of allWords) {
        if (!resultObject.hasOwnProperty(word)) {
            resultObject[word] = 1;
        } else {
            resultObject[word]++;
        }
    }

    let result = [];

    for (const word of allWords) {
        if (resultObject[word] % 2 === 1) {
            result.push(word);
            delete resultObject[word];
        }
    }

    console.log(result.join(' '));
}

oddOcc('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('++++++++++++++++++++++++++');
oddOcc('Cake IS SWEET is Soft CAKE sweet Food');