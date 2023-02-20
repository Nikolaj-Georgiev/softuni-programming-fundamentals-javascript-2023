function kotentse(householdItems, entryPoint, command) {

    let leftArr = householdItems.slice(0, entryPoint);
    let rightArr = householdItems.slice(entryPoint + 1);

    if (command === 'cheap') {
        leftArr = leftArr.filter(x => x < householdItems[entryPoint]);
        rightArr = rightArr.filter(x => x < householdItems[entryPoint]);
        let leftSum = leftArr.reduce((a, c) => a + c, 0);
        let rightSum = rightArr.reduce((a, c) => a + c, 0);
        if (rightSum > leftSum) {
            return `${'Right'} - ${rightSum}`;
        } else {
            return `${'Left'} - ${leftSum}`;
        }
    } else {
        leftArr = leftArr.filter(x => x >= householdItems[entryPoint]);
        rightArr = rightArr.filter(x => x >= householdItems[entryPoint]);
        let leftSum = leftArr.reduce((a, c) => a + c, 0);
        let rightSum = rightArr.reduce((a, c) => a + c, 0);
        if (rightSum > leftSum) {
            return `${'Right'} - ${rightSum}`;
        } else {
            return `${'Left'} - ${leftSum}`;
        }
    }

}

console.log(kotentse([1, 5, 1],
    1,
    "cheap"));
console.log('++++++++++++++++++++++++++');
console.log(kotentse([5, 10, 12, 5, 4, 20],
    3,
    "cheap"));
console.log('++++++++++++++++++++++++');
console.log(kotentse([-2, 2, 1, 5, 9, 3, 2, -2, 1, -1, -3, 3],
    7,
    "expensive"));