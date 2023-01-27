function condense(array) {


    if (array.length === 1) {
        console.log(array.join(''));
    } else {
        for (let k = array.length - 1; k > 0; k--) {
            let summingArray = [];
            for (let i = 0; i < array.length - 1; i++) {
                let result = 0;
                result += (array[i] + array[i + 1]);
                summingArray.push(result);
            }
            array = summingArray.slice(0);
        }
        console.log(array.join(''));
    }
}

condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
condense([1]);