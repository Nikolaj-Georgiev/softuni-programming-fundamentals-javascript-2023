function sorting(array) {

    let workArr = [...array];
    let descendingArr = workArr.slice(0).sort((a, b) => b - a);
    let resultArr = [];

    for (let i = 0; i < workArr.length / 2; i++) {
        let big = descendingArr.shift();
        let small = descendingArr.pop();
        resultArr.push(big, small);
    }


    return resultArr.join(' ');
}

console.log(sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]));
console.log(sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47]));