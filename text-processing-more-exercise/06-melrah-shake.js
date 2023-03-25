function melrahShake(input) {

    let randomChars = input[0];
    let pattern = input[1];
    while (randomChars.includes(pattern)) {
        if (pattern.length === 0 || randomChars.length === 0) {
            break;
        }
        let localStart = randomChars.slice(0, randomChars.indexOf(pattern));
        let localMid = randomChars.slice((randomChars.indexOf(pattern) + pattern.length), randomChars.lastIndexOf(pattern));
        let localEnd = randomChars.slice((randomChars.lastIndexOf(pattern) + pattern.length));
        randomChars = localStart + localMid + localEnd;
        pattern = pattern.slice(0, pattern.length / 2) + pattern.slice((pattern.length / 2 + 1));
        console.log('Shaked it.');
    }

    console.log('No shake.');
    console.log(randomChars);
}

melrahShake(['astalavista baby',
    'sta'
]);
melrahShake(['##mtm!!mm.mm*mtm.#',
    'mtm'
]);
melrahShake(['11',
    '11'
]);