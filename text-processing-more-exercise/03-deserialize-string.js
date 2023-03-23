function deserializeString(input) {

    let resultArr = [];
    let result = [];
    line = input.shift();
    while (line !== 'end') {
        let [letter, indexes] = line.split(':');
        indexes = indexes.split('/');
        indexes.unshift(letter);
        resultArr.push(indexes);
        line = input.shift();
    }

    let iteratorLength = resultArr.map(x => x.length - 1).reduce((a, c) => a + c, 0);
    for (let i = 0; i < iteratorLength; i++) {
        for (const array of resultArr) {
            let local = i.toString();
            if (array.includes(local)) {
                result.push(array[0]);
            }
        }
    }

    console.log(result.join(''));
}

deserializeString(['a:0/2/4/6',
    'b:1/3/5',
    'end'
]);
deserializeString(['a:0/3/5/11',
    'v:1/4',
    'j:2',
    'm:6/9/15',
    's:7/13',
    'd:8/14',
    'c:10',
    'l:12',
    'end'
]);