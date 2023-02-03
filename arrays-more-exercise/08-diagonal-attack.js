function checkDiagonals(stringMatrix) {

    let matrixSize = stringMatrix.length;
    let workArr = [...stringMatrix];
    let matrix = [];

    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = workArr[i].split(' ');
    }

    let sumOfRightDiagonals = sumRightDiagonal(matrix);
    let sumOfLeftDiagonals = sumLeftDiagonal(matrix);

    if (sumOfLeftDiagonals !== sumOfRightDiagonals) {
        return workArr.map(arr => console.log(arr));
    } else {
        for (let j = 0; j < matrixSize; j++) {
            for (let k = 0; k < matrixSize; k++) {
                let element = Number(matrix[j][k]);
                if (j == k || k == (matrixSize - j - 1)) {
                    matrix[j][k] = element;
                } else {
                    matrix[j][k] = sumOfRightDiagonals;
                }
            }
        }
    }

    let result = '';
    for (let l = 0; l < matrixSize; l++) {
        for (let m = 0; m < matrixSize; m++) {
            result += matrix[l][m] + ' ';
        }
        result += '\n';
    }

    return result;

    function sumRightDiagonal(matrix) {

        let size = matrix.length;
        let sumOfRightDiagonals = 0;
        let index = 0;
        while (index < size) {
            let localIndex = index;
            while (index >= localIndex) {
                sumOfRightDiagonals += Number(matrix[index][index]);
                localIndex++;
            }
            index++;
        }

        return sumOfRightDiagonals;
    }

    function sumLeftDiagonal(matrix) {

        let size = matrix.length;
        let sumOfLeftDiagonals = 0;
        let index = size - 1;
        while (index <= size && index >= 0) {
            let localIndex = index;
            while (index <= localIndex) {
                sumOfLeftDiagonals += Number(matrix[index][size - (index + 1)]);
                localIndex--;
            }
            index--;
        }

        return sumOfLeftDiagonals;
    }
}

console.log(checkDiagonals([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'
]));
console.log('-------------');
checkDiagonals([
    '1 1 1',
    '1 1 1',
    '1 1 0'
]);