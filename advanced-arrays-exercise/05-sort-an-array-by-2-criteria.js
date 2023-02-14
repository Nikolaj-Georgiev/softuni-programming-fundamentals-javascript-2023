function sortingByTwoCriteria(array) {

    let workArr = [...array];

    let resultArr = workArr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    return resultArr.join('\n');
}

console.log(sortingByTwoCriteria(['alpha', 'beta', 'gamma']));
console.log(sortingByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']));