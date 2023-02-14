function bombNumbers(initialSequenceArr, bombArr) {

    let bombingFieldArr = [...initialSequenceArr];
    let bombNumber = bombArr[0];
    let bombPower = bombArr[1];

    while (bombingFieldArr.includes(bombNumber)) {
        let indexOfBomb = bombingFieldArr.indexOf(bombNumber);
        leftExplosionIndex = Math.max((indexOfBomb - bombPower), 0);
        rightExplosionIndex = Math.min((indexOfBomb), bombingFieldArr.length - 1);
        if ((indexOfBomb - bombPower) < 0) {
            bombPower = indexOfBomb - 1;
            if (bombPower === 0) {
                bombPower = 1;
            }
        }

        bombingFieldArr.splice(leftExplosionIndex, bombPower);
        bombPower = bombArr[1];
        if (leftExplosionIndex === 0) {
            rightExplosionIndex = 0;
            bombingFieldArr.splice(rightExplosionIndex, bombPower + 1);
        } else {
            bombingFieldArr.splice(rightExplosionIndex - bombPower, bombPower + 1);
        }
    }

    let result = bombingFieldArr.reduce((previous, current) => previous + current, 0);
    return result;

}

console.log(bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]));
console.log('-----------------------------------------------');
console.log(bombNumbers([1, 4, 4, 2, 8, 9, 1], [9, 3]));
console.log('===============================================');
console.log(bombNumbers([1, 7, 7, 1, 2, 3], [7, 1]));
console.log('++++++++++++++++++++++++++++++++++++++++++++++++');
console.log(bombNumbers([1, 1, 2, 1, 1, 1, 2, 1, 1, 1], [2, 1]));
console.log('----------------------------------');
console.log(bombNumbers([1, 4, 1, 1, 1, 1, 1, 1, 4], [4, 3]));
console.log('----------------------------------');
console.log(bombNumbers([1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 4], [4, 4]));
console.log('----------------------------------');
console.log(bombNumbers([4, 1, 1, 1, 1, 1, 1, 1, 1, 4], [1, 0]));