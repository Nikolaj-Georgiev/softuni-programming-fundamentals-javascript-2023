function amazingNumbers(number) {

    let index = number;
    let sum = 0;

    while (index > 0) {
        let digit = index % 10;
        sum += digit;
        let test = index / 10;
        index = Math.trunc(test);
    }

    console.log(`${number} Amazing? ${String(sum).includes(9) ? 'True' : 'False'}`);
}

amazingNumbers(1233);
amazingNumbers(999);