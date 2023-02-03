function orbit(input) {
    let row = Number(input[0]);
    let col = Number(input[1]);
    let rowIndex = Number(input[2]);
    let colIndex = Number(input[3]);
    let matrix = [];
    for (let i = 0; i < row; i++) {
        matrix.push([]);
        for (let j = 0; j < col; j++) {
            matrix[i].push([]);
        }
    }

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            matrix[i][j] = Math.max(Math.abs(i - rowIndex) + 1, Math.abs(j - colIndex) + 1);
            console.table(matrix);
        }
    }
    console.table(matrix)

}

orbit([4, 4, 0, 0]);
console.log('---------------');
orbit([5, 5, 2, 2]);
console.log('---------------');
orbit([3, 3, 2, 2]);