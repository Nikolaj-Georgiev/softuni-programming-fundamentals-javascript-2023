function maxSequenceOfEquals(arrayOfNumbers) {

    let leftmostArr = [];
    let isPresent = false;
    let sequenceArr = [];
    for (let i = 0; i < arrayOfNumbers.length - 1; i++) {
        if (isPresent) {
            if (leftmostArr.length < sequenceArr.length) {
                leftmostArr = sequenceArr;
            }
            isPresent = false;
        }
        const element = arrayOfNumbers[i];
        sequenceArr = [];
        for (let j = i + 1; j < arrayOfNumbers.length; j++) {
            const nextElement = arrayOfNumbers[j];
            if (!isPresent) {
                if (element === nextElement) {
                    sequenceArr.push(element);
                    sequenceArr.push(nextElement);
                    isPresent = true;
                } else {
                    break;
                }
            } else {
                if (element === nextElement) {
                    sequenceArr.push(nextElement);
                } else {
                    break;
                }
            }

        }

    }
    console.log(leftmostArr.join(' '));

}

maxSequenceOfEquals([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
maxSequenceOfEquals([1, 1, 1, 2, 3, 1, 3, 3]);
maxSequenceOfEquals([4, 4, 4, 4]);
maxSequenceOfEquals([0, 1, 1, 5, 2, 2, 6, 3, 3]);