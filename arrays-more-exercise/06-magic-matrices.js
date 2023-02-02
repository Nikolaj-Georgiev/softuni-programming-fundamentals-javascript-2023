function magicMatrix(matrixArr) {

    let length = matrixArr.length;
    let sum = 0;
    let isMagic = true;

    for (let i = 0; i < length; i++) {
        let localRowSum = 0;
        for (let j = 0; j < length; j++) {
            localRowSum += matrixArr[i][j];
        }

        if (sum === 0) {
            sum = localRowSum
        } else {
            if (sum !== localRowSum) {
                isMagic = false;
                break;
            }
        }

    }

    for (let k = 0; k < length; k++) {
        let localColSum = 0;
        for (let l = 0; l < length; l++) {
            localColSum += matrixArr[l][k];
        }

        if (sum !== localColSum) {
            isMagic = false;
            break;
        }
    }

    console.log(isMagic);
}

magicMatrix([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);
console.log('-------');
magicMatrix([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]
]);
console.log('-------');
magicMatrix([
    [1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]
]);