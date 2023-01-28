function mergeArrays(firstArray, secondArray) {

    let resultArray = [];
    for (let i = 0; i < firstArray.length; i++) {
        let firstArrElement = firstArray[i];
        let secondArrElement = secondArray[i];

        if (i % 2 === 0) {
            resultArray.push(Number(firstArrElement) + Number(secondArrElement));
        } else {
            resultArray.push(firstArrElement + secondArrElement)
        }

    }

    console.log(resultArray.join(' - '));

}

mergeArrays(['5', '15', '23', '56', '35'], ['17', '22', '87', '36', '11']);
mergeArrays(['13', '12312', '5', '77', '4'], ['22', '333', '5', '122', '44']);