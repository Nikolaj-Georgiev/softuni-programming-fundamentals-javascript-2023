function multiplicator(number) {

    for (let i = 1; i <= 10; i++) {
        let sum = 0;
        sum = number * i;
        console.log(`${number} X ${i} = ${sum}`);
    }
}

multiplicator(5);
multiplicator(2);
console.log('--------------');

function multiplicator1(number) {

    let result = '';

    for (let i = 1; i <= 10; i++) {
        let sum = 0;
        sum = number * i;
        result += `${number} X ${i} = ${sum}\n`;
    }
    console.log(result);
}

multiplicator1(5);