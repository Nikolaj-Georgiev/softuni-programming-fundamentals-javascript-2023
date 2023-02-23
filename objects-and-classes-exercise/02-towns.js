function towns(input) {

    let workObj = {};

    for (let el of input) {
        let currentLine = el.split(' | ');
        workObj.town = currentLine[0]
        workObj.latitude = Number(currentLine[1]).toFixed(2);
        workObj.longitude = Number(currentLine[2]).toFixed(2);
        console.log(workObj);
    }

}

towns(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625'
]);
console.log('++++++++++++++');
towns(['Plovdiv | 136.45 | 812.575']);