function searchForANumber(firstArr, secondArr) {

    let items = secondArr.shift();
    let deleted = secondArr.shift();
    let searchedNumber = secondArr[0];

    let workArr = firstArr.slice(0, items);
    workArr.splice(0, deleted);
    let counterArr = workArr.filter(x => x === searchedNumber);

    let result = counterArr.length;

    return `Number ${searchedNumber} occurs ${result} times.`;
}

console.log(searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]));
console.log(searchForANumber([7, 1, 5, 8, 2, 7], [3, 1, 5]));