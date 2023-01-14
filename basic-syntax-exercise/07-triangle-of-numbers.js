function triangleOfNumbers(n) {

    for (let row = 1; row <= n; row++) {
        let rows = '';
        for (let col = 0; col < row; col++) {
            rows += row + ' ';
        }
        console.log(rows);
    }

}

triangleOfNumbers(2);
console.log('-----------------------');
triangleOfNumbers(3);
console.log('-----------------------');
triangleOfNumbers(5);
console.log('-----------------------');
triangleOfNumbers(6);
console.log('-----------------------');
triangleOfNumbers(8);
console.log('-----------------------');

function triangleOfNumbers1(n) {

    let matrix = '';
    for (let row = 1; row <= n; row++) {
        let rows = '';
        for (let col = 0; col < n; col++) {
            rows += n + ' ';
        }
        matrix += rows + '\n';

    }
    console.log(matrix);

}

triangleOfNumbers1(3);