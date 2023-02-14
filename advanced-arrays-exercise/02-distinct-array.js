function distinctArr(array) {
    let workArr = []
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (!workArr.includes(array[j])) {
                workArr.push(array[j]);
            }
        }
    }

    return workArr.join(' ');
}

console.log(distinctArr([1, 2, 3, 4]));
console.log(distinctArr([7, 8, 9, 7, 2, 3, 4, 1, 2]));
console.log(distinctArr([20, 8, 12, 13, 4, 4, 8, 5]));
console.log(distinctArr([1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(distinctArr([1, 0, 0, 0, 0, 0, 0, 0, 1, 1]));