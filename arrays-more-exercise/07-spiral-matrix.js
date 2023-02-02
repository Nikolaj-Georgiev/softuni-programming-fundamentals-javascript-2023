function spiralMatrix(rol, col) {

    let number = 1;
    let finalNumber = rol * col;
    let startRow = 0;
    let endRow = rol;
    let startCol = col;
    let endCol = startRow;
    let matrix = [];
    let result = '';

    for (let i = 0; i < rol; i++) {
        matrix.push([]);
        for (let j = 0; j < col; j++) {
            matrix[i].push([]);
        }
    }

    while (number <= finalNumber) {

        for (let topRow = startRow; topRow < endRow; topRow++) {
            matrix[startRow][topRow] = number;
            number++;
        }

        for (let rightCol = endCol + 1; rightCol < startCol; rightCol++) {
            matrix[rightCol][startCol - 1] = number;
            number++;
        }

        for (let bottomRow = endRow - 2; bottomRow >= startRow; bottomRow--) {
            matrix[startCol - 1][bottomRow] = number;
            number++;
        }

        for (let leftCol = startCol - 2; leftCol > endCol; leftCol--) {
            matrix[leftCol][startRow] = number;
            number++;
        }

        startRow++;
        endRow--;
        startCol--;
        endCol++;
    }

    for (let i = 0; i < rol; i++) {
        for (let j = 0; j < col; j++) {
            result += matrix[i][j] + ' ';
        }
        result += '\n';
    }

    return result;
}

console.log(spiralMatrix(5, 5));
console.log('----');
spiralMatrix(3, 3);