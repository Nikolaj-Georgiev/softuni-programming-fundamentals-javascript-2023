function magicSum(numArray, uniqueNumber) {

    for (let i = 0; i <= numArray.length - 1; i++) {
        sumArr = [];
        let sum = 0;
        let firstElement = numArray[i];
        let isUnique = false;
        for (let j = i + 1; j < numArray.length; j++) {
            let secondElement = numArray[j];
            sum = firstElement + secondElement;
            if (!isUnique) {
                if (sum === uniqueNumber) {
                    sumArr.push(firstElement);
                    sumArr.push(secondElement);
                    console.log(sumArr.join(' '));
                    isUnique = true;
                    break;
                }
            }
        }
    }
}

magicSum([1, 7, 6, 2, 19, 23], 8);
console.log('-----------------------');
magicSum([14, 20, 60, 13, 7, 19, 8], 27);
console.log('------------------------');
magicSum([1, 2, 3, 4, 5, 6], 6);
console.log('------------------------');
magicSum([1, 2, 3, 4, 5, 1, 0, 4], 5);
console.log('------------------------');
magicSum([1, 0, 0, 0, 1, 0, 0, 4], 1);
console.log('---------------------');
magicSum([1, 0, 0, 0, 1, 0, 0, 0], 0);
console.log('---------------------');
magicSum([1, 1, 1, 1, 1, 1, 1, 1, 1], 2);
console.log('---------------------');

function magicSum2(numArray, uniqueNumber) {

    for (let i = 0; i < numArray.length - 1; i++) {
        //buffer array for storing the unique pair and printing
        sumArr = [];
        let sum = 0;
        let firstElement = numArray[i];
        let tempElement = 0;
        let isUnique = false;
        for (let j = i + 1; j < numArray.length; j++) {
            let secondElement = numArray[j];
            sum = firstElement + secondElement;
            if (!isUnique) {
                if (sum === uniqueNumber) {
                    sumArr.push(firstElement);
                    sumArr.push(secondElement);
                    console.log(sumArr.join(' '));
                    tempElement = j;
                    isUnique = true;
                    break;
                }
            }
        }
        //checking if the pair was unique and removing it from the array
        if (isUnique) {
            numArray.splice(i, 1);
            numArray.splice(tempElement - 1, 1);
            i--;
        }
    }
}

magicSum2([1, 7, 6, 2, 19, 23], 8);
console.log('-----------------------');
magicSum2([14, 20, 60, 13, 7, 19, 8], 27);
console.log('------------------------');
magicSum2([1, 2, 3, 4, 5, 6], 6);
console.log('------------------------');
magicSum2([1, 2, 3, 4, 5, 1, 0, 4], 5);
console.log('------------------------');
magicSum2([1, 0, 0, 0, 1, 0, 0, 4], 1);
console.log('---------------------');
magicSum2([1, 0, 0, 0, 1, 0, 0, 0], 0);
console.log('---------------------');
magicSum2([1, 1, 1, 1, 1, 1, 1, 1, 1], 2);
console.log('-----------');

function magicSum3(numArray, uniqueNumber) {

    for (let i = 0; i <= numArray.length - 1; i++) {
        let sum = 0;
        let firstElement = numArray[i];
        for (let j = i + 1; j < numArray.length; j++) {
            let secondElement = numArray[j];
            sum = firstElement + secondElement;
            if (sum === uniqueNumber) {
                sumArr.push(firstElement);
                sumArr.push(secondElement);
                console.log(firstElement + ' ' + secondElement);

            }
        }
    }
}

magicSum3([1, 7, 6, 2, 19, 23], 8);
console.log('-----------------------');
magicSum3([14, 20, 60, 13, 7, 19, 8], 27);
console.log('------------------------');
magicSum3([1, 2, 3, 4, 5, 6], 6);
console.log('------------------------');
magicSum3([1, 2, 3, 4, 5, 1, 0, 4], 5);
console.log('------------------------');
magicSum3([1, 0, 0, 0, 1, 0, 0, 4], 1);
console.log('---------------------');
magicSum3([1, 0, 0, 0, 1, 0, 0, 0], 0);
console.log('---------------------');
magicSum3([1, 1, 1, 1, 1, 1, 1, 1, 1], 2);