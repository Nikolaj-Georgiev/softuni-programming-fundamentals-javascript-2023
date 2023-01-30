function equalSums(arrayOfNumbers) {

    isEqual = false;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let leftSum = 0;
        let rightSum = 0;

        for (let l = i - 1; l >= 0; l--) {
            let leftElement = arrayOfNumbers[l];
            leftSum += leftElement;
        }

        for (let r = i + 1; r < arrayOfNumbers.length; r++) {
            let rightElement = arrayOfNumbers[r];
            rightSum += rightElement;
        }

        if (leftSum === rightSum) {
            console.log(i);
            isEqual = true;
            break;
        }
    }

    if (!isEqual) {
        console.log('no');
    }

}

equalSums([1, 2, 3, 3]);
equalSums([1, 2]);
equalSums([1]);
equalSums([1, 2, 3]);
equalSums([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);