function sumFirstAndLast(input) {

    let arr = [...input];
    let firstEl = arr.shift();
    let lastEl = arr.pop();
    let sum = Number(firstEl) + Number(lastEl);

    return sum;
}

console.log(sumFirstAndLast(['20', '30', '40']));
console.log(sumFirstAndLast(['5', '10']));