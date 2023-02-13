function negativeOrPositiveNumber(input) {

    let arr = [...input].map(Number);
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.unshift(arr[i]);
        } else {
            result.push(arr[i]);
        }
    }

    return result.join('\n');
}

console.log(negativeOrPositiveNumber(['7', '-2', '8', '9']));
console.log(negativeOrPositiveNumber(['3', '-2', '0', '-1']));