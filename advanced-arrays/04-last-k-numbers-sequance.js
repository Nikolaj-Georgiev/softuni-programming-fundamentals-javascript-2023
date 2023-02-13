function lastKNumberSequence(n, k) {

    let arr = [1];
    for (let i = 1; i < n; i++) {
        let lastKElements = arr.slice(-k);
        let sum = lastKElements.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        arr.push(sum);
    }

    return arr.join(' ');
}

console.log(lastKNumberSequence(6, 3));
console.log(lastKNumberSequence(8, 2));